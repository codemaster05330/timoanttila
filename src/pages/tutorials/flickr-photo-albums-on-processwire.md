---
title: How to embed Flickr photo albums on ProcessWire
pub:
- 11
- Nov
published: 2016-11-10T05:35:53+02:00
modified: 2016-11-10T05:35:53+02:00
summary: A tutorial on how to set up Flickr photo galleries on ProcessWire. I modified Sergio's photo downloading script and made a Photobox effect for galleries.
layout: tutorial
---

Some of our clients have been using two <a href="https://www.flickr.com/" rel="noopener" target="_blank">Flickr</a> modules on <a href="https://www.drupal.org/" rel="noopener" target="_blank">Drupal</a> to get their photos from Flickr to the website, but now they were moving from Drupal to <a href="https://processwire.com/" rel="noopener" target="_blank">ProcessWire</a>. Flickr was important to them, so I had to figure out how to make those photo galleries on ProcessWire.

Luckily <a href="https://processwire.com/talk/profile/367-sergio/" rel="noopener" target="_blank">Sérgio</a> from ProcessWire forum had made a script that, given an album ID, download its data using cURL and save the photos to a temp dir. After that, add them to a new page. But I didn't want to download photos to our server, I just wanted to fetch all photo urls. So I modified his code to suit my needs.

First, you need to download Sérgio's script from <a href="https://github.com/sjardim/processwire-simple-flickr-album" rel="noopener" target="_blank">GitHub</a>. You need to add lib folder somewhere where ProcessWire's template can access it. Those files do not need to be public. Then make a new template for photo galleries and make template file for it.

I made a new template 'kuvat' (means photos) with fields for Flickr album id and image field for listing and the meta/OG tags. Only bad thing is that users have to add each gallery separately. But the script works pretty well and galleries urls are way better than what we had on Drupal.

If you want to use a Photobox effect for galleries instead of Lightbox, use the same photo url for a link and thumbnail. If using Lightbox, you can use smaller thumbnails for faster loading.

Add following PHP code to the new template file.

```PHP
&lt;?php
include "../lib/curl.class.php";
include "../lib/flickr_album_utils.php";
$album = fa_get_album($page-&gt;flickrid);
$images = array();
foreach($album["all_images"] as $f) {    
$photo = 'https://farm'.$f["farm"].'.staticflickr.com/'.$f["server"].'/'.$f["id"].'_'.$f["secret"].'_b.jpg';
$thumb = 'https://farm'.$f["farm"].'.staticflickr.com/'.$f["server"].'/'.$f["id"].'_'.$f["secret"].'_q.jpg';
echo "&lt;a href='$photo'&gt;&lt;?img src='$thumb' alt=''/&gt;
```

Remember to change paths for lib files. Next edit flickr_album_utils.php and put your Flickr's secret key to its place.

You should now see photos from the album you chose. However, loading all photos from an external server on every page load is not the best idea.

## Flickr photo sizes

- s: 75 x 75
- q: 150 x 150
- t: 100 x 75
- m: 240 x 180
- n: 320 x 320
- z: 640 x 640
- c: 800 x 600
- b: 1024 x 768
- o: 2400 x 1800

## References

- <a href="https://processwire.com/talk/topic/10145-how-to-get-and-save-flickr-albums-to-a-page-via-api/" rel="noopener" target="_blank">How to get and save Flickr albums to a page via API</a>
- <a href="https://github.com/sjardim/processwire-simple-flickr-album" rel="noopener" target="_blank">Processwire Simple Flickr Album</a>