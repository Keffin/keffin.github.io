---
title: "Virtual threads for testing"
date: "2025-03-22"
summary: "Mimic pods using virtual threads."
toc: false
autonumber: false
math: true
tags: ["java", "threads", "testing"]
showTags: true
hideBackToTop: true
hidePagination: true
---

Have you ever had a scenario where you are attempting to write tests that should mimic pod-like behavior? Well, I have.

Sometimes you might find yourself in a situation where a pod-like setup might be hard to re-create locally and test as well for that matter. 
E.g. scenarios where multiple instances of your application are attempting to access the same resource. 
I found a good way of testing these scenarios locally is to utilize multi-threading, where you can think of each spawned thread as a sort of pod or application instance.

As someone who also enjoys writing Java, at times, who could come up with a better scenario where I can get my hands dirty and use virtual threads?

So put the example scenario in a more exact manner, imagine a setup where you have 2 instances of your application running in some arbitrary environment.

Now, let's say that part of your complex domain logic will require a scenario where your application will attempt to e.g archive/delete old data, updating cached data or sending notifications.
In these scenarios, you would prefer only 1 pod or application instance to perform the task because otherwise, it could lead to invalid states for your data.

To prevent this applications can use distributed locks to make sure that the important task is executed only once. So if 1 pod is able to run the full task, it will acquire a lock that prevents other pods from executing the same task.

For the sake of simplicity let's propose that we have some simple interface for the locking mechanism. I can recommend looking into tools such as [Shedlock](https://github.com/lukas-krecan/ShedLock) or [Redis](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/) for this in more practice. But for now, we won't go into implementation detail.

```java
public enum LockStatus {
  LOCK_ACQUIRED,
  LOCK_SKIPPED,
}

public LockStatus lock(String task, String podId);
```

Now what this method does is that it returns `LOCK_ACQUIRED` if it was successful in acquiring the lock and otherwise `LOCK_SKIPPED`.

Then in our application code, we can have the scheduled method just running a `lock()` and checking the return status. If the status is acquired it can execute its task, pretty straightforward.

Now to the testing part. You could just test this live in any of your testing environments to verify that it is working, but let's say that you want to write local tests to verify that the locking mechanism is working and only 1 application instance can perform said task, preventing it from causing invalid data states.

For that, I used virtual threads in Java. You could use regular platform threads as well, but where is the fun in that, let's use some of the new java features. Virtual threads allow us to simulate these live concurrent environments without platform threads overhead.

```java
@SpringbootTest
public class IntegrationTest {

  @Autowired
  private SharedResourceAcquirer acquirer;

  private static String TASK = "acquire_data";

  @Test
  void testLock() {
    ExecutorService vExec = Executors.newVirtualThreadPerTaskExecutor();

    Future<LockStatus> fstPod = vExec.submit(() -> acquirer.lock(TASK, "POD_1_ID"));
    Future<LockStatus> sndPod = vExec.submit(() -> acquirer.lock(TASK, "POD_2_ID"));


    if (fstPod.get() == LOCK_ACQUIRED) {
      assertThat(sndPod.get()).isEqualTo(LOCK_SKIPPED);
    } else {
      assertThat(sndPod.get()).isEqualTo(LOCK_ACQUIRED);
    }

    vExec.shutdown();
  }
}
```

Looking at this test, we spawn 2 threads that mimic our pod-like behavior. Each thread will attempt to acquire the lock. But only one will have the valid status, showing that only 1 pod was able to acquire the lock and thus preventing invalid data states by performing the task multiple times on the same piece of data.
