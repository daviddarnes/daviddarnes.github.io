---
title: 'GitHub Pages & Custom Domains'
layout: article
category: article
excerpt: "So you want to use GitHub Pages to host a website…"
---

# So you want to use GitHub Pages to host a website...

I love GitHub Pages. So much so that I've created several websites using it. This site runs on it, and a few others. What I don't love is setting up domain records. It's up there with setting up email accounts and doing the dishes.

The issue I have with domain records and GitHub Pages is the documentation for it, it's not very clear to the average front-end developer like myself (it might just be me though). Also setting up domain records isn't a regular thing for me, it's normally done at the start or end of a project that's taken a few weeks to put together. So it doesn't stay fresh in my mind.

### If you're using `name.github.io`:

- **Custom subdomain:**

  Create the record
  
  ```
  subdomain.website.com. CNAME name.github.io.
  ```

  It will use the `master` branch

  Create a `CNAME` file containing `subdomain.website.com`

- **Custom naked domain:**

  Create the records
  
  ```
  website.com. A 192.30.252.153
  website.com. A 192.30.252.154
  ```

  It will use the `master` branch

  Create a `CNAME` file containing `website.com`

### If you're using a normal repo, e.g. `project-repo`:

- **Custom subdomain:**

  Create the record
  
  ```
  subdomain.website.com. CNAME name.github.io.
  ```

  Create a `gh-pages` branch

  Create a `CNAME` file containing `subdomain.website.com`

- **Custom naked domain:**

  Create the records
  
  ```
  website.com. A 192.30.252.153
  website.com. A 192.30.252.154
  ```

  Create a `gh-pages` branch

  Create a `CNAME` file containing `website.com`

- **Custom subdirectory:**

  Create the records
  
  ```
  website.com. A 192.30.252.153
  website.com. A 192.30.252.154
  ```

  Create a `gh-pages` branch

  It will appear at `website.com/project-repo`

- **Custom subdomain and subdirectory:**

  Create the record
  
  ```
  subdomain.website.com. CNAME name.github.io.
  ```

  Create a `gh-pages` branch

  It will appear at `subdomain.website.com/project-repo`
