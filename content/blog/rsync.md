---
title: How to automatic backup data in Linux
createdAt: 2016-05-14T19:50:05.000Z
description: Rsync is a powerful tool that facilitates the transfer and synchronization of data between both local and remote systems.
tags: tutorials, servers, backup, crontab, security
---

**[Rsync](https://linux.die.net/man/1/rsync)** is a powerful tool that facilitates the transfer and synchronization of data between both local and remote systems.

Rsync finds files that need to be transferred using a lqquick checkrq algorithm (by default) that looks for files that have changed in size or in last-modified time. Any changes in the other preserved attributes (as requested by options) are made on the destination file directly when the quick check indicates that the file's data does not need to be updated.

This short line transfers all new and modified files from Server_1 to Server_2. Take less time and bandwidth than full copy over SSH. It does not touch local files so you don't need write permission on Server_1 (and in my case my user has no write permission to /wwwroot).

First, you need to set up SSH keys so you can log into a remote server without prompting password. After that's done, you need to make your own command with variables.

```Shell
<code>rsync -azq /wwwroot/ timo@Server_2:/wwwroot/
```

The **-a** option is a combination flag which stands for "archive" and syncs recursively and preserves symbolic links, special and device files, modification times, group, owner, and permissions. The **-z** compress file data during the transfer and the **-q** option suppress non-error messages.

If you like to see what is going on you should use **-azhvP**.

The **-P** option combines **--progress** and **--partial**. You can see a progress bar and can resume interrupted transfers. The **-h** output numbers in a human-readable format and the **-v** increase verbosity. So more information which is easier to read.

## Crontab

But this should work automatically without user running things so let's use cron to handle sync. Make a new file and write something like this example.

To command line:

```Shell
crontab -e
```

Edit crontab:

```Shell
15 1 * * Sat rsync -avh /wwwroot/ timo@Server_2:/wwwroot/ > /dev/null 2>&amp;1
```

This command runs every Saturday at 01:15.  
Cron timing: minute 0-59, hour 0-23, day of month 1-31, month 1-12, day of week 0-6.

```Shell
crontab -l
```

You can learn more about rsync [here](https://linux.die.net/man/1/rsync).  
Easiest way to [learn cron](https://crontab.guru/).

Thanks for reading and happy rsyncing!
