---
title: Set up TeamSpeak 3 server
description: Complete guide for installing TeamSpeak 3 as a service on a Linux server.
createdAt: 2015-09-30T00:20:02+02:00
nextTitle: Parse an XML document with PHP
nextUrl: parse-an-xml-document-with-php
prevTitle: Create SSH keys and login to servers without using passwords
prevUrl: generate-ssh-keys
tags: tutorials, linux, software
---

First, we need the latest version of the [TeamSpeak 3 server for Linux](http://ftp.4players.de/pub/hosted/ts3/releases/). You can also download the package from [the official website](https://www.teamspeak.com/en/downloads/).

Move the packages to the server and unzip it.

```Shell
tar xvjf teamspeak3-server_linux_amd64-3.8.0.tar.bz2
```

Now we have a TeamSpeak 3 server folder which you want to move to a better place. The folder's name depends which package you chose. I assume you work in the same directory where you download it. You need sudo if you don't work as root or superuser already.

```Shell
sudo mv teamspeak3-server_linux-amd64 /usr/local/teamspeak3
```

## Run the TeamSpeak 3 server as service

Next we want to make it run as service and startup after boot. First, we make symbolic link to `/etc/init.d`.

```Shell
sudo ln -s /usr/local/teamspeak3/ts3server_startscript.sh /etc/init.d/teamspeak3
```

Then we have to create a user who runs TeamSpeak as a service. We don't want that user able to log in so this is a local account only. New users need privilege to run the service so we must change the ownership of the folder to user teamspeak3.

```Shell
sudo adduser --disabled-login teamspeak3
sudo chown -R teamspeak3 /usr/local/teamspeak3
sudo update-rc.d teamspeak3 defaults
```

## Running the server first time

Now we’re all done and it’s time to start the TeamSpeak 3 server for the first time.

```Shell
sudo service teamspeak3 start
```

Now there is very important information for you. You need a token to raise your level of admin group and there is also login information for Telnet connections. You can use the token only once, but write down the login information because those are the only way to restore your admin rights if you delete your TeamSpeak information from your client computer.

Your server is probably protected with a firewall so you need to open the port for TeamSpeak 3 server. The default port for voice is 9987 (UDP) and for Telnet 10011 (TCP). If you use ufw the command will be:

```Shell
sudo ufw allow 9987/udp
```

## Gaining the power

Now use your TeamSpeak 3 client to connect your server. When you log in the first time the server will ask for the token. Copy the code from the server window and hit enter. Now you're the Boss. You can do whatever you want and no one can stop you.

First, you should go check out server and channel groups and make them as you like. After that, create your channels and let people in.

## Restore admin rights

Use the Telnet connection to your server where TeamSpeak is running.

```Shell
telnet your_ip/host 10011
```

After successful login, write this to the input line.

```Shell
login serveradmin password
clientsetserverquerylogin client_login_name=serveradmin
```
