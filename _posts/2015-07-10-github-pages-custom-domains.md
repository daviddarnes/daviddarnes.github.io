---
title: "GitHub Pages & Custom Domains"
layout: article
category: tutorial
icon: tutorial
colour: "#222222"
excerpt: "So you want to use GitHub Pages to host a website..."
---

# GitHub Pages & Custom Domains

I love [GitHub Pages](https://pages.github.com/). So much so that I've created several websites using it. This site runs on it, [and](http://docs.basekit.com/) a [few](http://emaildebtforgiveness.me/) [others](http://jessgurr.com). What I don't love is setting up domain records. It's up there with setting up email accounts and doing the dishes.

## The problem

The issue I have with domain records and GitHub Pages is [the documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/), it's not very clear to the average front-end developer like myself (it might just be me though). Also setting up domain records isn't a regular thing for me, it's normally done at the start or end of a project that's taken a few weeks to put together. So it doesn't stay fresh in my mind.

So to solve this issue once and for all I've created a list of **all** the ways you can use GitHub Pages and a custom domain.

## So you want to use GitHub Pages to host a website...

### If you're using a `name.github.io` repo

- #### Using a custom subdomain, e.g. `subdomain.website.com`:

  1. Create the record
    ```
    subdomain.website.com. CNAME name.github.io.
    ```

  2. It will use the `master` branch

  3. Create a `CNAME` file containing `subdomain.website.com`

- #### Using a Custom naked domain, e.g. `website.com`:

  1. Create the records
  
    ```
    website.com. A 192.30.252.153
    website.com. A 192.30.252.154
    ```

  2. It will use the `master` branch

  3. Create a `CNAME` file containing `website.com`

---

### If you're using a normal repo, e.g. `project-repo`

- #### Custom subdomain, e.g. `subdomain.website.com`:

  1. Create the record
    ```
    subdomain.website.com. CNAME name.github.io.
    ```

  2. Create a `gh-pages` branch

  3. Create a `CNAME` file containing `subdomain.website.com`

- #### Custom naked domain, e.g. `website.com`:

  1. Create the records
    ```
    website.com. A 192.30.252.153
    website.com. A 192.30.252.154
    ```

  2. Create a `gh-pages` branch

  3. Create a `CNAME` file containing `website.com`

- #### Custom subdirectory, e.g. `website.com/poject-repo`:

  1. Create the records
    ```
    website.com. A 192.30.252.153
    website.com. A 192.30.252.154
    ```

  2. Create a `gh-pages` branch

  3. It will appear at `website.com/project-repo`

- #### Custom subdomain and subdirectory, e.g. `subdomain.website.com/poject-repo`:

  1. Create the record
    ```
    subdomain.website.com. CNAME name.github.io.
    ```

  2. Create a `gh-pages` branch

  3. It will appear at `subdomain.website.com/project-repo`

---

Now that I've have this clearly documented I won't have to guess records every time I come to setting up GitHub Pages :+1:. Hopefully this will help you as well. If you know a better way, just [submit a pull request to this article](https://github.com/daviddarnes/daviddarnes.github.io).

Cheers, Dave
