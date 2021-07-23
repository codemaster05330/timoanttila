---
title: Remove unnecessary PHP sessions files on Debian
createdAt: 2020-04-10T01:06:14.000Z
description: How to find hidden system files that keep filling hard drives and how to remove old and unnecessary PHP session files.
tags: tutorials, servers, bash, crontab
---

Have you ever run out of hard drive space even when *df -h* tells there's a lot of space still unused? I've been using Ubuntu and Debian for a long time, but have never before come against this kind of problem. I looked for the problem for a long time and deleted all possible unnecessary files from the disk, but the hard drive quickly refilled.

While looking for a solution to the problem, I found an software called *ncdu* (NCurses Disk Usage). Ncdu is a disk usage analyzer with an ncurses interface. It is designed to find space hogs on a remote server where you don't have an entire graphical setup available. Like a gift from heaven.

```Shell
sudo apt install ncdu
```

Ncdu is an awesome software for finding problems and it helped me find a 5.5 GB PHP sessions directory.

The server has been running for over three years and I have never cleaned old PHP session files. These files should be deleted with the correct setting in the *php.ini* file (*session.gc_maxlifetime*), but apparently it is not configured by default. There were 1 216 910 unnecessary files. Normal rm -f could not destroy the files, so had to look for an alternative solution and a simple perl script solved the problem.

```Bash
cd /var/lib/php/sessions
perl -e 'for(<*>){((stat)[9]<(unlink))}'
```

Ubuntu/Debian have a script (*/etc/cron.d/php*) to do the cleanup automatically, but I guess it's broken. Because I like simple answers to problems, I added the following line to root *crontab*:

```Crontab
crontab -e
16 3 * * 1 rm -f /var/lib/php/sessions/*
```

The command destroys all files in the directory on Monday at 3:16. Problem solved.