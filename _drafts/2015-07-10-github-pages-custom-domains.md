---
title: 'GitHub Pages & Custom Domains'
layout: article
category: article
excerpt: "So you want to use GitHub Pages to host a website…"
---

## So you want to use GitHub Pages to host a website…

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
