---
published: false
---

# New Site Structure Plans

I'm currently in the process of shifting things over from old to new with regards to my personal site. As many others, I also suffer from "leaving personal work until last". [In my last article related to this](https://github.com/daviddarnes/daviddarnes.github.io/blob/master/_posts/2015-03-24-hello-github.md) I said I'd be switching my WordPress content over from it to this site. Currently I've only transferred the articles and they are sitting in drafts. This is mainly because I've yet to style some elements on this site, such as images in articles. Plus I'm avoiding the dreaded domain transfer process, which shouldn't be hard now [I've documented it](http://daviddarnes.github.io/articles/github-pages-custom-domains/).

## The structure

Recently I've thought about structure. It is only thoughts though. So in the spirit of being open with code and ideas, I thought I'd share these thoughts.

## david.darn.es

My main website sits on [david.darn.es](http://david.darn.es) (that's the WordPress one). This is actually a subdomain of [darn.es](http://darn.es). Subdomains are actually quite good for custom domains with github.io sites. So when I've transferred all the content, fixed any presentation of posts, and redirected all the old urls correctly I can then shut down the WordPress site.

## darn.es

My naked domain [darn.es](http://darn.es) just redirects to my WordPress site. I want to change this. I want it to be a single page providing just the essentials about myself, including links to the things I mainly work on. A bit like an online business card. Which means I can use GitHub Pages for this site as well. The only thing I can't do on GitHub Pages is my custom background.

If you hadn't noticed, on [my current main site](http://darn.es) the background is actually a blurred image of my latest [Instagram photo](http://instagram.com/daviddarnes). I **really** like it, @createdbypete and @studioromeo helped me create it a few years ago. It's just a super basic WordPress plugin, which means it runs on PHP.

So what I'm hoping to do is to pull out that PHP and run it as a standalone file on another server. That means extracting the code from WordPress, something I need to research into as my PHP skills aren't that great. If I get it setup right I could hotlink to the image from my main static site.

## Structure

Here's a sitemap-esque list:
- [darn.es](http://darn.es): Online card
  - [david.darn.es](http://david.darn.es): Blog & portfolio
  - [david.darn.es/experiment-name/](david.darn.es/experiment-name/): Personal experiments url

## And that's it

Simple enough right? Ha, you joker. At least my design skills can focus on my "calling card" site rather than this site. This subdomain site will probably focus on personal articles, a full portfolio of projects and experiments, who I am and a way to get in touch. Thanks for reading, especially if you got this far. Hopefully I'll actually complete what I've mentioned above, time is truly my only challenge.

Cheers, Dave