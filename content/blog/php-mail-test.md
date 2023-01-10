---
title: PHP mail function test
description: This is a useful PHP script for testing your hosting to ensure that you can send emails from PHP-based sites that include a contact form or something similar.
createdAt: 2023-01-09T21:33:17+02:00
nextTitle: Configure SMTP on WordPress without using a plugin
nextUrl: wordpress-smtp
prevTitle: Redirect old domain to new domain in WordPress via .htaccess
prevUrl: wordpress-redirect-old-domain
tags: tutorials, php, mail
---

We actively use external email services / servers, but you may also need to use PHP's `mail()` function to send email.

Because not all hosting or VPS services allow you to send email, this simple code makes it simple to see if `mail()` works with a username.

You can create a new file `test.php` and run it with the command `php test.php`, or you can place `index.php` in the public directory and use a browser to access the address.

```PHP
<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$from = "emailtest@example.com";
$to = "timo@example.com";
$subject = "PHP mail test";
$message = "This is a test to see if PHP Mail works.";
$headers = "From:" . $from;

mail($to, $subject, $message, $headers);
echo "A test email was sent";
```
Check your email to make sure the email was delivered.

If you have the file publicly accessible on your website, remember to delete it once the testing is finished!

## Related Posts

- [Configure SMTP on WordPress without using a plugin](/blog/wordpress-smtp/)
