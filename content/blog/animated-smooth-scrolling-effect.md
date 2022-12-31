---
title: Animated smooth scrolling effect for one-page website
description: Every one-page website needs an animated smooth scrolling effect, and this script will rock your site.
createdAt: 2016-04-21T23:16:16+02:00
nextTitle: Backup your data automatically on Linux
nextUrl: backup-your-data-automatically-on-linux
prevTitle: Add or remove class with JQuery based on vertical scroll
prevUrl: add-or-remove-class-with-jquery-based-on-vertical-scroll
tags: tutorials, webdev, jquery
---

Every one-page website needs an animated smooth scrolling effect, and this script will rock your site. The script hijacks all # links and makes them scroll nicely to target id.

```JQuery
<script>
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &amp;&amp; location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
</script>
```

I didn't make this script, but I hope to keep it safe for me and all you.

### References

- [Improved Animated Scrolling Script for Same-Page Links](http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links)
- [Smooth Scrolling](https://css-tricks.com/snippets/jquery/smooth-scrolling/)
