---
title: "Awesome tmux"
date: "2025-03-22"
summary: "My tmux setup."
toc: false
autonumber: false
math: true
showTags: false
hideBackToTop: true
hidePagination: true
---

# Tmux

I really like using tmux, it's a game changer.

Using tmux plugin manager makes it a lot easier to install and load plugins into the configuration.

I have previously been using the `iterm2` terminal as my emulator, but recently changed back to the native
Mac terminal since I somehow managed to make my configuration work better there.

One issue I had was copying any output in the terminal, since I can sometimes default to using the mouse/trackpad for copying. Adding this line of configuration seems to have solved it:

```sh
set-window-option -g mouse on
```

On Mac it essentially allows you to use the `fn` key to copy terminal output.

Here is my full tmux configuration:
[tmux-conf](https://github.com/Keffin/cerebrum/blob/main/tmux.conf)

Using vim bindings as well to swap between open panes.
