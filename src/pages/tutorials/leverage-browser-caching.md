---
title: How to leverage browser caching for images, CSS and JavaScript
pub:
- 12
- Sep
published: 2016-09-12T05:20:02+03:00
modified: 2016-09-12T05:20:02+03:00
summary: Page load times can be significantly improved by asking visitors to save and reuse the files included in your website.
layout: tutorial
---

Normally, the website should load all its content under two seconds and hopefully even faster, but websites with a lot of pictures and JavaScript may take way too long time to load. And those websites also make a lot of requests to the web server. First visit is always harder and takes longer time to load, but after that, those websites could use browser caching instead of loading all that data again from the website's server.

Browser caching stores some of the loaded files locally in the user's browser. Files like all the HTML, CSS, JavaScripts and images. When a user visits the same website again, refreshes a page or moves to a new page in the same website, they already have some of the data locally and requested page load faster. Less data to load and less requests to the server.

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

- <a href="https://varvy.com/pagespeed/leverage-browser-caching.html" rel="noopener" target="_blank">Varvy</a>
- <a href="https://gtmetrix.com/leverage-browser-caching.html" rel="noopener" target="_blank">GTmetrix</a>
- <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching" rel="noopener" target="_blank">Google PageSpeed Insights</a>