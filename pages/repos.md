---
layout: default
title: GitHub Repos
excerpt: "Seeing what happens when I try to output my GitHub repos"
permalink: /repos/
---

# Repos

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}
