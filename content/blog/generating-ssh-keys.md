---
title: Generate SSH keys and login to servers without passwords
createdAt: 2015-09-19T01:23:32.000Z
description: SSH keys serve as a means of identifying yourself to an SSH server using public-key cryptography and challenge-response authentication.
tags: tutorials, ssh, servers, security
---

I have to log in to four different servers and time is always money so I don’t have time or will to type passwords all the time. Easiest way to log in without a password is **ssh keys**. You need a pair of keys, **private** and **public**, and use them while logging in.

SSH keys serve as a means of identifying yourself to an SSH server using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) and [challenge-response authentication](https://en.wikipedia.org/wiki/Challenge-response_authentication). One immediate advantage this method has over traditional password authentication is that you can be authenticated by the server without ever having to send your password over the network ([source](https://wiki.archlinux.org/index.php/SSH_keys){title="SSH keys"}).

First, you need to generate a pair of keys. One for yourself (private key, *id_rsa*) and another one for a server (public key, *id_rsa.pub*). The easiest way is run **Terminal / CMD** and run a command **ssh-keygen**. If you’re a Windows user you can also download **[PuTTYgen](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)** and use it to create a pair of keys.

If you're interested in ssh-keygen in general, type **man ssh-keygen** and RTFM. You'll find all important information about ssh-keygen there.

## Generating the keys

So back in business, as they say. Open Terminal or CMD and type:

```SSH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**RSA** is a cryptosystem for public-key encryption, and is widely used for securing sensitive data, particularly when being sent over an insecure network such as the Internet (read more about RSA). ´-b´ specifies the number of bits in the key to create. For RSA keys, the default is 2048 and that is generally considered sufficient. ´-C´ is just a comment for the key. Easier to remember which key is which when you look at your public keys.

I suggest keeping the default settings as they are, so when you're prompted to ´Enter a file in which to save the key´, just press Enter to continue.

You'll be asked to enter a passphrase. Do not use your real password for this. If you're using Ubuntu based Linux or OS X, you have to remember this only once.

## Copy the public key to server

Now the keys are generated and next you want to add your new key to the server. This is the last time when you need to log in with your real password.

```Shell
ssh-copy-id ~/.ssh/id_rsa.pub account@server
```

If your OS does not have that command you have to log in your server and edit ´~/.ssh/authorized_keys´. Add the public key to the last line of the file and save.

## Testing connection

After that you can test your connection. If you're running Linux Mint or Ubuntu, your system should know your new key and that should be prompted while connecting to the server.

Windows users may have to run ´Pageant´ or some other similar software.

Linux Mint, Ubuntu and OS X can store your private key password to Keyring which means that you don't have to type it ever again. Those OS also run ssh-agent with a private key automatically so you don't have to worry about adding id_rsa to the agent anymore. Some other Linux OS and Windows users have to add the file every time they log in. That's just sad. And if you run your servers as superuser, you need to type your real password while prompted.

You may need to add the private key file to the ´.ssh/config´ or SSH agent. Config file is easier and no need to use additional services every time you want to make a connection to the remote server.

### .ssh/config

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

Thanks for reading and hope you learned something today.