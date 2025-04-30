---
title: "Hexagonal Architecture"
date: "2024-05-22"
summary: "My take on hexagonal architecture."
description: "A general intro to hexagonal."
toc: false
autonumber: false
math: true
tags: ["architecture", "java", "hexagonal"]
showTags: true
hideBackToTop: true
hidePagination: true
---

Hexagonal architecture is a pattern of building and designing software, which aims to have applications as loosely coupled as possible.
While one might argue about whether it is a bit over-kill or not, I have personally had some quite experiences when building larger projects with it using OOP languages.

While my interpretation might differ a bit from other resources you might find online, it generally still attempts to follow the basic principles of hexagonal architecture.

The following below is a folder structure diagram, which displays how I usually go by when building applications with hexagonal design in mind.

```sh
.
├── adapter/
│   ├── mq/
│   │   ├── producers
│   │   └── consumers
│   ├── db/
│   ├── http/
│   ├── grpc/
│   └── api/
│       ├── controllers/
│       └── mappers/
├── domain/
│   ├── models/
│   ├── ports/
│   │   ├── dbPort
│   │   ├── httpPort
│   │   ├── grpcPort
│   │   └── producerPort
│   └── usecases/
└── infrastructure/
    ├── metrics/
    ├── cron/
    └── feature_flags/
```

### Adapter layer

The adapter layer consists of outgoing and incoming logic. Incoming being the api controllers, MQ consumers, etc. Outgoing being http requests against arbitrary 3rd party API's, db integration, MQ producers, etc.

The adapter layer tend to have a port, from the domain layer, that they implement. The ports will be used in usecases, which we will get to later.
Adapter modules also contain any necessary configuration for setting up any adapter instance, e.g the db adapter would also contain configuration containing db name, password, etc.

### Domain layer

Domain layer consists of 3 major parts, firstly models, which you can think of as simple POJOs. Secondly the ports, which are the interfaces implemented by adapter layer. Lastly, usecases, this is where the core business logic is actually implemented.

Domain layer should always strive to exclude external dependencies, a good tool for that is [ArchUnit](https://www.archunit.org/) where you can setup tests to validate your Java applications architecture.

Usecases are able to hit the db, send requests, produce messages, via the ports in the port package.

### Infrastructure layer

The infrastructure layer is where I usually put anything that does not really fit into core application logic. E.g could be cronjobs, metrics and other nice to haves.
These are essential for the application, but not something I would classify as part of the business logic.
