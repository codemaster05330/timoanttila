---
title: Redirect old domain to new domain in WordPress via .htaccess
createdAt: 2022-12-29T19:17:24+02:00
description: How to use .htaccess to redirect all traffic from the old and still valid domain to the new domain in the same WordPress directory.
tags: tutorials, wordpress, domain, htaccess
image: wordpress
twitter: 1608786717225676800
---

When migrating a site from one domain to another, it is critical not to break all of the links that you have built to your old domain. All pages on the old domain should be properly redirected to the same location on the new domain to ensure that visitors to the old domain end up in the right place. Failure to redirect will result in a loss of both visitors and search engine rankings.

My first thought was to redirect those requests before they even reached the WordPress directory, but I didn't have access to the web server's configuration in this case. I was just another user on the server.

Our client had several websites and domains before deciding to consolidate them all under one domain. The old websites are now subfolders, and the domains must be redirected to the appropriate subfolder, for example, myoldsite.com > newdomain.com/myoldsite.

As a result, I had to redirect requests to the appropriate subfolder using `.htaccess` from the WordPress directory. Htaccess is an abbreviation for Hypertext Access. It is an HTTP Server configuration file used by web servers based on [Apache](https://httpd.apache.org/).

## Redirecting old domains to new domains

The following code redirects all requests from the old domain to the new domain. The code is placed in the `.htaccess` file in the WordPress directory. The code can also be used in the web directory of the old domain, but since there is only one active website after the migration, every domain points to the same IP / server / directory.

```apache
<IfModule mod_rewrite.c>
RewriteEngine On

RewriteCond %{HTTP_HOST} ^myoldsite\.com$ [NC]
RewriteRule ^(.*)$ https://newdomain.com/myoldsite/$1 [R=301,L]

RewriteCond %{HTTP_HOST} ^myotheroldsite\.com$ [NC]
RewriteRule ^(.*)$ https://newdomain.com/myotheroldsite/$1 [R=301,L]
</IfModule>
```
There is probably a better way to use regular expressions, but this is the simplest way I found.

## If the old website is active, use its .htaccess file

If the old website is still up and running, you can use its `.htaccess` file. This is a simplified version of the code above that can also be used for local page redirects.

All the requests:

```apache
Redirect 301 / https://newdomain.com/
```

Individual pages:

```apache
Redirect 301 /oldpage https://newdomain.com/newpage
Redirect 301 /oldpage /newpage-locally
```

So simple, so powerfull.. Thanks for reading!
