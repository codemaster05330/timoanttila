---
title: Embed Flickr photo albums on ProcessWire
createdAt: 2016-11-10T05:35:53.000Z
description: A tutorial on how to set up Flickr photo galleries on ProcessWire. I modified Sergio's photo downloading script and made a Photobox effect for galleries.
tags: tutorials, processwire, flickr, php
---

Some of our clients have been using two [Flickr](https://www.flickr.com/) modules on [Drupal 7](https://www.drupal.org/) to get their photos from Flickr to the website, but now they were moving from Drupal to [ProcessWire](https://processwire.com/). Flickr was important to them, so I had to figure out how to make those photo galleries on ProcessWire.

Luckily [Sérgio](https://processwire.com/talk/profile/367-sergio/) from ProcessWire forum had made a script that, given an album ID, download its data using cURL and save the photos to a temp dir. After that, add them to a new page. But I didn't want to download photos to our server, I just wanted to fetch all photo urls. So I modified his code to suit my needs.

First, you need to download Sérgio's script from [Github](https://github.com/sjardim/processwire-simple-flickr-album). You need to add lib folder somewhere where ProcessWire's template can access it. Those files do not need to be public. Then make a new template for photo galleries and make template file for it.

I made a new template 'kuvat' (means photos) with fields for Flickr album id and image field for listing and the meta/OG tags. Only bad thing is that users have to add each gallery separately. But the script works pretty well and galleries urls are way better than what we had on Drupal.

If you want to use a Photobox effect for galleries instead of Lightbox, use the same photo url for a link and thumbnail. If using Lightbox, you can use smaller thumbnails for faster loading.

Add following PHP code to the new template file.

```PHP
<?php
include "../lib/curl.class.php";
include "../lib/flickr_album_utils.php";
$album = fa_get_album($page->flickrid);
$images = array();
foreach($album["all_images"] as $f) {    
	$photo = 'https://farm'.$f["farm"].'.staticflickr.com/'.$f["server"].'/'.$f["id"].'_'.$f["secret"].'_b.jpg';
	$thumb = 'https://farm'.$f["farm"].'.staticflickr.com/'.$f["server"].'/'.$f["id"].'_'.$f["secret"].'_q.jpg';
	echo "<a href='$photo'><?img src='$thumb' alt=''/>
}
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

- [How to get and save Flickr albums to a page via API](https://processwire.com/talk/topic/10145-how-to-get-and-save-flickr-albums-to-a-page-via-api/)
- [Processwire Simple Flickr Album](https://github.com/sjardim/processwire-simple-flickr-album)