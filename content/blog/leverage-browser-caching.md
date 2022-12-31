---
title: Leverage browser caching for images, CSS and JavaScript apache2
description: Page load times can be significantly reduced by requesting that visitors' browsers save and reuse the files on your website.
createdAt: 2016-09-12T05:20:02+02:00
updatedAt: 2022-12-31T18:04:12+02:00
nextTitle: Offsetting achor links with fixed header
nextUrl: offsetting-anchor-links-with-fixed-header
prevTitle: Utilize rsync to backup or sync data on Linux
prevUrl: rsync
tags: tutorials, cache, browser, apache2, servers
---

Normally, the website should load all of its content in under two seconds, if not faster, but websites with a lot of images and JavaScript may take much longer to load. Those websites also send a large number of requests to the web server. The first visit is always more difficult and takes longer to load, but after that, browsers could use caching instead of loading all that data from the server again.

Browser caching saves some of the files that have been loaded locally in the user's browser. Files such as HTML, CSS, JavaScript, and images. When a user returns to the same website, refreshes a page, or navigates to a different page within the same website, they already have some of the data locally, making the requested page load faster. Less data to load and fewer server requests.

Easiest way to enable browser caching on a website running on Apache2 is to modify a file called .htaccess. The "code" below tells browsers how long it should "remember" files loaded from the web site.

```htaccess
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access 1 month"
ExpiresByType image/jpeg "access 1 month"
ExpiresByType image/png "access 1 year"
ExpiresByType text/css "access 1 month"
ExpiresByType text/html "access 1 month"
ExpiresByType application/pdf "access 1 year"
ExpiresByType application/javascript "access 1 year"
ExpiresByType application/x-javascript "access 1 year"
ExpiresByType image/x-icon "access 1 year"
ExpiresDefault "access 2 days"
</IfModule>
```

## Read more

- [Varvy](https://varvy.com/pagespeed/leverage-browser-caching.html)
- [GTmetrix](https://gtmetrix.com/leverage-browser-caching.html)
- [Google PageSpeed Insights](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
