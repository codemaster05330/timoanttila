---
title: Ubuntu server package updates
description: Control the package updates on your Ubuntu server. With these step-by-step instructions, you can learn how to manually update / upgrade your Ubuntu.
createdAt: 2023-05-01T20:43:17+02:00
nextTitle: 'Secure your Ubuntu server with ease: automate security package updates'
nextUrl: ubuntu-server-automatic-security-updated
prevTitle: Linux server journal size management
prevUrl: linux-journal-files
tags: tutorials, server, ubuntu, update
---

[Ubuntu](https://ubuntu.com/) is one of the most popular operating systems for servers due to its reliability and security features. As with any operating system, it is important to keep the packages on your Ubuntu server updated to ensure that it is running smoothly and securely. In this article, we will discuss how to keep your Ubuntu server packages updated and how often you should run updates.

## Updating packages on Ubuntu Server

The first step in keeping your Ubuntu server packages updated is to ensure that your system is up to date with the latest package lists. This can be achieved by running the following command:

```bash
sudo apt update
```

This command will download the latest package lists from the Ubuntu servers and update the package index on your system. Once the package index is updated, you can check for available updates by running the following command:

```bash
sudo apt upgrade
```

This command displays a list of all available updates for your system's packages. You see something like this:

```bash
126 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 233 MB of archives.
After this operation, 238 MB of additional disk space will be used.
Do you want to continue? [Y/n]
```

To install these updates, simply press Enter if Y is already selected, or Y and Enter otherwise.

It is important to note that the `apt upgrade` command will only install updates for packages that are currently installed. If you want to install new packages, type `apt install` followed by the name of the package(s) you want to install.

I like to keep security updates active automatically on my server. You can read more about automatic security updates [here](/ubuntu-server-automatic-security-updated/).

## Updating single package on Ubuntu Server

If you only want to update a single package on your Ubuntu server, use the `apt install` command followed by the package name. If you want to update the nginx package, for example, run the following command:

```bash
sudo apt install nginx
```

## How to check if everything is okay

After running updates on your Ubuntu server, it is important to ensure that everything is functioning correctly. Here are some ways to check if everything is okay:

Check the system logs: You can use the tail command to view the last few lines of the system logs. Look for any error messages or warnings that may indicate an issue.

```bash
sudo tail -n 50 /var/log/syslog
```

Check the status of running services: You can use the `systemctl` command to check the status of running services. Look for any services that are not running or have errors.

```bash
sudo service nginx status
```

Test your website or application: If your server hosts a website or application, test it to ensure that it is functioning correctly.

Monitor system resources: Use the top or htop command to monitor system resources such as CPU usage and memory usage. Look for any processes that are using an unusually high amount of resources.

## Conclusion

Keeping your Ubuntu server packages updated is crucial for maintaining the security and stability of your server. By running updates at least once a week and monitoring your system for any issues, you can ensure that your server runs smoothly and remains secure.

## Related Posts

- [Secure your Ubuntu server with ease: automate security package Updates](/blog/ubuntu-server-automatic-security-updated/)
- [Linux server journal size management](/blog/linux-journal-files/)
- [Ubuntu server log file size management](/blog/linux-log-rotation/)
- [Remove unnecessary PHP sessions files on Debian](/blog/setup-crontab-to-remove-php-session-files/)
