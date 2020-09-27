---
title: How to parse Flickr's XML feed with PHP
pub:
- 24
- Oct
published: 2015-10-24T04:58:10+03:00
modified: 2015-10-24T04:58:10+03:00
summary: This simple XML Flickr feed parser fetch newest photos and show them with links and thumbnails.
layout: tutorial
---

I love taking pictures and I want to show my newest pictures on my website. However, there was no easy way to embed pictures from Flickr to the website if you don't want to use slideshow and iframe. I searched and found a simple PHP script made by Mr. Haddad. He did a great job but it gave only large images as text so I had to tweak it a little bit.

Nowadays, it's all about loading time and speed so I wanted to use small thumbnails. All images used _b.jpg and smaller size images had their own ending so getting the right size was very easy; search _b and replace it with whatever you want. You can use the Fancybox effect to make it look nicer.

```PHP
<?php
/* Author: Samuel Haddad (2010), edited by Timo Anttila (2015)
 * SimpleXML Flickr Feed Parser
 */

// Feed URL in RSS Format
$url ="https://api.flickr.com/services/feeds/photos_public.gne?id=136453500@N06&amp;lang=en-us&amp;format=rss_200";

//Use simple XML to parse the feed
$xml = simplexml_load_file($url);
$items = $xml->xpath('/rss/channel/item');
echo "<div class='gallery'>"; // Wrapper

foreach($items as $item){
    $nsmedia = $item->children('http://search.yahoo.com/mrss/');
    $img = $nsmedia->content->attributes(); // Image URL (b)
    $thumb = strtr($img, array ('_b.jpg' => '_t.jpg')); // Thumb
    echo "<a href='$img'><img src='$thumb' alt=''></a>"; // Combine them all
}
echo "</div>";
?>
```

## Flickr Thumb Sizes

- s: 75 x 75
- q: 150 x 150
- t: 100 x 75
- m: 240 x 180
- n: 320 x 320
- z: 640 x 640
- c: 800 x 600
- b: 1024 x 768
- o: 2400 x 1800

## CSS

Everything is working just fine but for better overview little bit of CSS is needed.

```PHP
.gallery a {
    display: inline-block;
    vertical-align: top;
    padding: 5px;
    border: 1px solid #ccc;
    margin: 0 5px 5px 0;
}

.gallery a:nth-child(4n+0){
    margin-right: 0;
}
```

I like to use inline-block over float because inline-block does not need to be clear before .gallery's closing tag. Works better most of the time. I also like to make small padding with a border around images because it makes images look better. I don't know, maybe it's just me.

For the best performance you should use. gallery a: nth-child(4n+0) where the number 4 should be the last image from the first row. So if you have three pictures in a row, then the number should be three (3). The first number represents a cycle size, and is a counter (starts at 0), and last zero (0) is an offset value.

### Source

- <a href="http://samuelhaddad.com/2010/10/21/simple-xml-parse-flickr-feed/" rel="noopener" target="_blank" title="Samuel Haddad: Simple XML Parse Flickr Feed">samuelhaddad.com</a>
- <a href="https://www.flickr.com/services/api/flickr.photos.getSizes.html" rel="noopener" target="_blank">Flickr</a>