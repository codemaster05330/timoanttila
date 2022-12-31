---
title: Create SSH keys and login to servers without using passwords
createdAt: 2015-09-19T01:23:32+02:00
updatedAt: 2022-12-31T00:14:14+02:00
description: SSH keys are used to authenticate yourself to an SSH server by utilizing public-key cryptography and challenge-response authentication.
tags: tutorials, ssh, servers, security
prevUrl: simple-popup
prevTitle: Simple PHP / JavaScript popup
nextUrl: teamspeak-3
nextTitle: Set up TeamSpeak 3 server
---

I have to log in to four different servers, and because time is money, I don't have the time or inclination to type passwords all the time. **ssh keys** are the most convenient way to log in without a password.You need a pair of keys, **private** and **public**, and use them while logging in.

SSH keys are used to identify yourself to an SSH server via [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) and [challenge-response authentication](https://en.wikipedia.org/wiki/Challenge-response-authentication). One obvious advantage of this method over traditional password authentication is that the server can authenticate you without ever sending your password over the network ([source](https://wiki.archlinux.org/index.php/SSH_keys){title="SSH keys"}).

To begin, you must generate a pair of keys. One for you (private key, `id_rsa`) and one for the server (public key, `id_rsa.pub`). The easiest approach is to launch **Terminal / CMD** and execute the command `ssh-keygen`. If you use Windows, you can also use **[PuTTYgen](http://www.chiark.greenend.org.uk/sgtatham/putty/download.html)** to generate a pair of keys.

If you want to learn more about ssh-keygen in general, run `man ssh-keygen` and RTFM. There you'll find all important information about ssh-keygen.

## Creating the keys

So, let's get back to business: open Terminal or CMD and type:

```SSH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**RSA** is a cryptosystem for public-key encryption, and is widely used for securing sensitive data, particularly when being sent over an insecure network such as the Internet (read more about RSA). ´-b´ specifies the number of bits in the key to create. For RSA keys, the default is 2048 and that is generally considered sufficient. ´-C´ is just a comment for the key. Easier to remember which key is which when you look at your public keys.

I recommend leaving the default settings alone so that when prompted to `Enter a file in which to save the key`, you can simply press `Enter` to proceed.

You'll be prompted to enter a password. Use a different password for this. You only need to remember this once if you're using Ubuntu-based Linux or OS X.

## Transfer the public key to the server

Now that the keys have been generated, you must add your new key to the server. This is the last time you'll need to use your real password to log in.

```Shell
ssh-copy-id ~/.ssh/id_rsa.pub account@server
```

If your operating system lacks that command, you must log in to your server and edit `/.ssh/authorized keys`. Save the file after adding the public key to the last line.

## SSH connection verification

You can then test your connection. If you're using Linux Mint or Ubuntu, your system should be aware of your new key and should prompt you to enter it when connecting to the server.

Windows users may be required to run **Pageant** or other similar software.

Linux Mint, Ubuntu, and OS X can save your private key password to **Keyring**, so you never have to type it again. These operating systems also run `ssh-agent` with a private key by default, so you no longer need to worry about adding `id_rsa` to the agent. Other Linux and Windows users must add the file each time they log in. If you run your servers as superuser, you must enter your true password when prompted.

The private key file may need to be added to the `.ssh/config` or SSH agent. It is simpler to use a configuration file and there is no need to use additional services every time you want to connect to a remote server.

### Changes to the .ssh/config file

```SSH
Host *
  ServerAliveInterval 60
Host 192.168.0.1
  User timo
  IdentityFile /home/timo/.ssh/id_backup
Host github.com
  User timoanttila
  IdentityFile /home/timo/.ssh/id_shop
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile /home/title/.ssh/id_rsa
```

### SSH Agent

```Shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

Thank you for taking the time to read this, and I hope you learned something today.
