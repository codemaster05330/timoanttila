---
title: 'Secure your Ubuntu server with ease: automate security package Updates'
description: Protect your Ubuntu server effortlessly by automating security package updates. Safeguard your system from potential threats with ease.
createdAt: 2023-05-02T20:00:00+02:00
prevTitle: Ubuntu server package updates
prevUrl: ubuntu-server-update
tags: tutorials, server, ubuntu, update
---

If you want to automatically install security updates on your Ubuntu server, you can use the `unattended-upgrades` package. This package will automatically install security updates for your system's packages.

## How to activating automatic security updates on Ubuntu

Install the unattended-upgrades package:

```bash
sudo apt-get update && sudo apt-get install unattended-upgrades
```

Edit the configuration file `/etc/apt/apt.conf.d/50unattended-upgrades`:

```bash
sudo nano /etc/apt/apt.conf.d/50unattended-upgrades
```

Uncomment the following line by removing the `//` at the beginning of the line, and change `false` to `true` if you want the system to reboot automatically after installing updates.

```
//Unattended-Upgrade::Automatic-Reboot "false";
```
Edit the configuration file `/etc/apt/apt.conf.d/20auto-upgrades`:

```
sudo nano /etc/apt/apt.conf.d/20auto-upgrades
```

Uncomment the following lines by removing the `//` at the beginning of each line:

```
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
```

These lines configure the system to update the package lists once a day and to automatically install security updates.

Optionally, you can also configure email notifications to be sent when updates are installed by adding your email address to the `/etc/apt/apt.conf.d/50unattended-upgrades` configuration file:

```
Unattended-Upgrade::Mail "youremail@yourdomain.com";
```

Save the changes and exit the text editor.

Your Ubuntu system is now configured to automatically download and install security updates. You can check the log files located at `/var/log/unattended-upgrades/` to ensure that updates are being installed correctly.

It is important to note that automatic updates may not always be desirable in certain environments, such as production servers where manual intervention may be required to ensure that updates do not cause any issues. Therefore, it is important to carefully consider whether automatic updates are appropriate for your particular use case.

## Related articles

- [Ubuntu server package updates](/ubuntu-server-update/)
- [Linux server journal size management](/linux-journal-files/)
- [Ubuntu server log file size management](/linux-log-rotation/)
- [Remove unnecessary PHP sessions files on Debian](/setup-crontab-to-remove-php-session-files/)
