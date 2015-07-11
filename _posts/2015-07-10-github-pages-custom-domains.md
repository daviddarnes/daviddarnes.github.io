---
title: "GitHub Pages & Custom Domains"
layout: article
category: tutorial
icon: tutorial
colour: "#222222"
excerpt: So you want to use GitHub Pages to host a website...
---

# GitHub Pages & Custom Domains

I love [GitHub Pages](https://pages.github.com/). So much so that I've created several websites using it. This site runs on it, [and](http://docs.basekit.com/) a [few](http://emaildebtforgiveness.me/) [others](http://jessgurr.com). What I don't love is setting up domain records. It's up there with setting up email accounts and doing the dishes.

## The problem

The issue I have with domain records and GitHub Pages is [the documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/), it's not very clear to the average front-end developer like myself (it might just be me though). Also setting up domain records isn't a regular thing for me, it's normally done at the start or end of a project that's taken a few weeks to put together. Which means it doesn't stay fresh in my mind. So to solve this issue once and for all I've created a list of **all** the ways you can use GitHub Pages and a custom domain.

## The options

- **Using a `name.github.io` repo with a custom subdomain, e.g. `subdomain.website.com`:**

  1. Create the record

     `subdomain 10800 IN CNAME name.github.io.`

  2. It will use the `master` branch

  3. Create a `CNAME` file containing `subdomain.website.com`

- **Using a `name.github.io` repo with a custom naked domain, e.g. `website.com`:**

  1. Create the records

     `@ 10800 IN A 192.30.252.153`

     `@ 10800 IN A 192.30.252.154`

  2. It will use the `master` branch

  3. Create a `CNAME` file containing `website.com`

- **Using a regular repo with a custom subdomain, e.g. `subdomain.website.com`:**

  1. Create the record

     `subdomain 10800 IN CNAME name.github.io.`

  2. Create a `gh-pages` branch

  3. Create a `CNAME` file containing `subdomain.website.com`

- **Using a regular repo with a custom naked domain, e.g. `website.com`:**

  1. Create the records

     `@ 10800 IN A 192.30.252.153`

     `@ 10800 IN A 192.30.252.154`

  2. Create a `gh-pages` branch

  3. Create a `CNAME` file containing `website.com`

- **Using a regular repo with a custom subdirectory, e.g. `website.com/repo-name`:**

  1. Create the records

     `@ 10800 IN A 192.30.252.153`

     `@ 10800 IN A 192.30.252.154`

  2. Create a `gh-pages` branch

- **Using a regular repo with a custom subdomain and subdirectory, e.g. `subdomain.website.com/repo-name`:**

  1. Create the record

     `subdomain 10800 IN CNAME name.github.io.`

  2. Create a `gh-pages` branch

## Additional notes

It might be worth checking out this article on [understanding DNS](http://blog.wikidot.com/blog:understanding-dns), it does quite a nice job of explaining the difference between a `CNAME` and an `A` record.

## The conclusion

Now that I've have this clearly documented I won't have to guess records every time I come to setting up GitHub Pages :+1:. Hopefully this will help you as well. If you know a better way, just [submit a pull request to this article](https://github.com/daviddarnes/daviddarnes.github.io/blob/master/_posts/2015-07-10-github-pages-custom-domains.md). Thanks to @createdbypete and @jdennes for help on getting these right, plus @hdv and @BenjaminReid for proof reading :star:.

Cheers, Dave
