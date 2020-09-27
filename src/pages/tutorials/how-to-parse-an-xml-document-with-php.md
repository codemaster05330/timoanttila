---
title: Parse an XML document with PHP
pub:
- 1
- Oct
published: 2015-10-01T20:57:18.000Z
modified: 2015-10-01T20:57:18.000Z
summary: A simple PHP script which can store an XML document as a file to the server and use it for the website. Replaces file older than 24 hours.
layout: tutorial
---

Hey there. This time I'll teach you how to fetch an XML feed / document, store it to the server and parse it to the website. You can also use SQL database for storing all the information from the feed, but my way does not need a database and its universal so you can use it on any platform which supports PHP.

This example can be used for any XML document but I made this for those who use <a href="https://www.meltwater.com/" rel="noopener" target="_blank">Meltwater News</a>, which is an online media intelligence service which searches news sources for keywords of relevance to its business customers.

The first problem is that we do not want to fetch the XML feed many times per day because it takes more time to load a webpage, and requests can be perceived as spam. Feed providers can even block the website which spams it all the time. So I had to figure out how to store the information from the XML feed somewhere.

I created a simple PHP script which creates a file from the feed and every time when the page is loaded the script checks how old the file is. If the file is older than `$time` then delete the old one and fetch a new one. `$time` uses seconds, so in this example 86400 is 24 hours.

So let's get started. I use four variables for the important parts and `$path` to combine server directory and filename. Everything is very self explained. `$dir` is a local directory where you want to save the fetched file.

```PHP
$url = "https://timoanttila.com/sitemap.xml";
$dir = "/tmp/";
$file = "sitemap.xml";
$time = 86400;
$path = $dir.$file;
```

Then part of the code which checks how old the file is and if the file is too old, replace it with a new one.

```PHP
if (filemtime($file) < time() - $time) {
    unlink($file);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($ch);
    curl_close($ch);
    file_put_contents($path, $data);
}
```

Last part of the code is for parsing it to the website.

`$xml` is loading the xml file from `$path`. Then, we must know what kind of data there is. Use `var_dump($xml)` to see what's inside. Meltwater uses objects and arrays, so the right path is sometime like `$xml->feed->documents->document->the_item_you_looking_for`.

When we know what we want to fetch from the file, then we can run foreach for every line under it. After that it's just how you want to show the data on your website.

```PHP
$xml = simplexml_load_file($path) or die("There is a problem with the feed.");
foreach ($xml->feed->documents->document as $item) {
    $title = $item->title;
    $date = $item->createDate_day2 . "." . $item->createDate_mon . "." . $item->createDate_year;
    echo "<div class='views-row'>
    <div class='views-field-created'>
        $date - $item->sourcename
    </div><div class='views-field-title'>
        <a href='$item->url' title='$title ($item->sourcename - $date)'>$title</a>
    </div></div>";
}
```

There you go. *Simple PHP XML document script* which can store information for a day and fetch more tomorrow.