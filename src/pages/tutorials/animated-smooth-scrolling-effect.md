---
title: Animated smooth scrolling effect for one-page website
pub:
- 21
- Apr
published: 2016-04-21T23:16:16+03:00
modified: 2016-04-21T23:16:16+03:00
summary: Every one-page website needs an animated smooth scrolling effect, and this script will rock your site.
layout: tutorial
---

Every one-page website needs an animated smooth scrolling effect, and this script will rock your site. The script hijacks all # links and makes them scroll nicely to target id.

```JQuery
&lt;script&gt;
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
&lt;/script&gt;
```

I didn't make this script, but I hope to keep it safe for me and all you.

### References

- <a href="http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links" rel="noopener" target="_blank">Improved Animated Scrolling Script for Same-Page Links</a>
- <a href="https://css-tricks.com/snippets/jquery/smooth-scrolling/" rel="noopener" target="_blank">Smooth Scrolling</a>