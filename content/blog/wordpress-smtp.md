---
title: Configure SMTP on WordPress without using a plugin
description: How to send email reliably from WordPress for free and without third-party plugins
createdAt: 2023-01-10T20:02:24+02:00
prevTitle: PHP mail function test
prevUrl: php-mail-test
tags: tutorials, php, mail, smtp, wordpress
---

WordPress uses PHP's `mail()` function by default, but in some hosting and VPS services, sending email is not permitted or is incorrectly configured, and email may not be sent at all or may end up in spam. To improve WordPress email sending, I recommend using a [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (SMTP) server to send email from WordPress and its forms. I use [Sendinblue](https://www.sendinblue.com/) because they provide 300 free emails per day.

Many plugins make it simple to change the email route, but some require a paid version. Extra charges to the customer are not a good thing, so a better solution is to edit the WordPress `wp-config.php` and `function.php` files.

The file `wp-config.php` can be found in the WordPress directory root (`/`). Copy and paste the following files into your WordPress website's `/wp-config.php` file.

```PHP
define('SMTP_username', 'youremail@gmail.com'); // Username
define('SMTP_password', 'password'); // Password or app key
define('SMTP_server', 'smtp-relay.sendinblue.com'); // SMTP server
define('SMTP_FROM', 'myuser@myemail.com'); // Sender's email address
define('SMTP_NAME', 'Tuspe Design'); // Sender's name
define('SMTP_PORT', '587'); // Server Port Number
define('SMTP_SECURE', 'tls'); // Encryption - SSL or TLS
define('SMTP_AUTH', true); // SMTP authentication
define('SMTP_DEBUG', 0); // Debugging purposes only
```

You must also edit the corresponding information in the `functions.php` file in addition to the `wp-config.php` file. This file can be found in the WordPress website's Themes: the file can be edited from the WordPress dashboard by going to `Appearance > Theme Editor` (`/wp-content/themes/<yourtheme>/functions.php`).

```PHP
add_action( 'phpmailer_init', 'phpmailer_smtp' );
function phpmailer_smtp( $phpmailer ) {
  $phpmailer->isSMTP();     
  $phpmailer->From = SMTP_FROM;
  $phpmailer->FromName = SMTP_NAME;
  $phpmailer->Host = SMTP_server;  
  $phpmailer->Password = SMTP_password;
  $phpmailer->Port = SMTP_PORT;
  $phpmailer->SMTPAuth = SMTP_AUTH;
  $phpmailer->SMTPSecure = SMTP_SECURE;
  $phpmailer->Username = SMTP_username;
}
```

You do not need to make any changes to the above file; simply copy and paste the code into the `functions.php` file. Save the changes. I recommend that you use a child theme; otherwise, these changes will be lost when the theme is updated.

You can now send an email through selected SMTP server.

Thanks for reading!

## Related Posts

- [PHP mail function test](/blog/php-mail-test/)
- [Contact form](/blog/contact-form/)
