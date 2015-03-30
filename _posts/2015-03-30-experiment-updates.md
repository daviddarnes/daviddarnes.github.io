---
title: Experiment & Project Updates
layout: article
category: article
excerpt: Updates to my experiments and personal projects
---

# Experiment & Project Updates

I've been working on a few of my personal projects and experiments this weekend and thought it might be worth rounding them up in a short-ish article. That way I can show new features or changes, plus give you a chance to check out some of my older stuff.

## Bit Podcast

[Bit Podcast](http://bitpodcast.com/) is an ongoing podcast series featuring myself and @BenjaminReid. We've recently been having trouble figuring out the best way to host the audio files and provide an easy way to subscribe to the podcast.

We tried to use [SoundCloud's podcast feature](http://help.soundcloud.com/customer/portal/articles/1209292-can-i-podcast-with-soundcloud-), which is currently in beta, but after episode 20 we hit the upload limit. So we reverted back to regular file uploading to an Amazon S3 account.

Initially we used an XML file to provide a podcast feed, I think this was more suitable for iTunes at the time. It now seems that iTunes prefers RSS. Due to this I spent some of this weekend reworking the feed for RSS and getting it up to spec. I used the [W3C Feed Validation Service](http://validator.w3.org/feed/) along with this lengthy page called ['Making a Podcast'](https://www.apple.com/uk/itunes/podcasts/specs.html) on the Apple website.

You can check out the new [RSS feed file I created on GitHub](https://github.com/nouveller/bitpodcast.com/blob/gh-pages/podcast.rss). It's using the liquid templating language just like the rest of the site is. Also, if you're interested in listening to the show you can [subscribe using this link](https://bitpodcast.com/podcast.rss).

## Flynn

[Flynn](http://daviddarnes.github.io/flynn/) is a CSS grid structure I created quite a few years ago. I wanted something that had the ease of use of [Bootstrap](http://getbootstrap.com/) but the file size of the [1KB CSS Grid](http://heygrady.com/blog/2011/02/17/using-sass-with-the-1kb-grid-system/). I decided to use [less](http://lesscss.org/) to create the Flynn grid, using the calculating features to calculate the widths of the columns and gutters.

My recent update has allowed me to create a crude [port for SCSS](https://github.com/daviddarnes/flynn/blob/master/grid/grid.scss), as well as good clean up of the repo. I've switched the demo over from my site [to gh-pages](http://daviddarnes.github.io/flynn/). [Flynn is available to download](https://github.com/daviddarnes/flynn) but also can be imported into your project [using bower](https://github.com/daviddarnes/flynn#usage). I'd like to submit it to the bower directory just to try it out, but I don't want people to take the project too seriously as it's more for personal use.

## Some Fun Stuff

[CSS Buttons](http://daviddarnes.github.io/css-buttons/) and the [CSS App Mask](https://github.com/daviddarnes/css-app-mask) were a couple of projects I put together when I first got into playing around with CSS. They're just some fun I wanted to have that had a certain element of learning behind them. I've also switched the demos over to gh-pages, along with updating the documentation for anyone who might actually be using them (I don't know who would though).

So yea, those are the things I sorted out this weekend. The transfer from WordPress to GitHub Pages is going nicely. I just need to start transferring posts and making canonical urls so any projects I've linked to will redirect properly. Hopefully they will be quite painless.

Cheers, Dave
