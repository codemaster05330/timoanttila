---
title: Creating a bootable Manjaro USB memory stick on Linux
description: Tips for creating a bootable USB flash drive in Linux. Etcher is now the simplest and best way to create a bootable USB drive.
createdAt: 2021-07-24T00:23:31+02:00
nextTitle: Upgrade Debian 9 Stretch to Debian 10 Buster
nextUrl: upgrade-debian-stretch-to-buster
prevTitle: Remove unnecessary PHP sessions files on Debian
prevUrl: setup-crontab-to-remove-php-session-files
tags: tutorials, linux
image: etcher
---

Whether you are installing a new linux distro or trying a new live one, you need to create a bootable USB stick. Windows and MacOS are well supported by a variety of software, but we Linux users have a built-in command line dd and a separate download and run Etcher.

I recommend Etcher to those who are not used to using the Linux command prompt. In this article, I will go through both options.

## Command line tool dd

`dd` is a command line utility for Unix and Unix-like operating systems whose primary purpose is to convert and copy files. In Unix, hardware, device drivers, and special device files appear in the file system like regular files.

A very dangerous program in the wrong hands, but an effective guy if you know what to do.

First you need to find out the path of the USB stick. You need root / sudo privileges to see more detailed information about the disks in use.

```
fdisk -l
```

The USB flash drive uses the path `/dev/sda`. The command below checks that the file exists and copies it to a USB flash drive.

In the example command, Linux distro is loaded into the `user's` directory of the active user and is named` manjaro-xface-21.0.7-210614-linux510.iso`. The abbreviation `bs` stands for` blocksize`, with a recommended value of `4M`. Increasing the value speeds up the process, but can also result in a non-functioning result. On newer systems, it is possible to use the additional `status` option. It shows, surprise surprise, process status.

The process may take about ten minutes, depending on the size and content of the file.

```
cd ~/Downloads   
dd if=manjaro-xface-21.0.7-210614-linux510.iso of=/dev/sda bs=4M status=progress
```

The bootable USB flash drive is ready! No internet connection or new applications are required on the machine.

### See also:

- [`dd` command in Linux](https://www.geeksforgeeks.org/dd-command-linux/)
- [How to Calculate Optimal Blocksize to Use With dd](https://www.baeldung.com/linux/dd-optimal-blocksize)

# Bootable USB flash drive with Etcher

Was it difficult or what? Fortunately, Balena now offers a very easy-to-use installation software called [Etcher](https://www.balena.io/etcher/) for all major platforms.

<picture>
<source srcset="/images/etcher.webp" type="image/webp"/>
<source srcset="/images/etcher.jpg" type="image/jpeg"/>
<img class="block w-full" src="/images/etcher.jpg" alt="Etcher"/>
</picture>

- Download the software from the link above
- Two icons, first one for the file and second for the path where to install
- Flash it!

When Etcher announces that the installation is complete, you can safely remove the USB stick or reboot the computer and boot from the memory stick.
