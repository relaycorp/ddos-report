---
title: Protect public, static websites from DDoS attacks
sidebar:
  label: Public, static websites
  order: 1
---

The following mitigations should prove very effective against DDoS attacks on public, static websites:

- [Reverse proxy](../mitigations/reverse-proxies.md). Make sure to host the static content on a service like Amazon S3 or GitHub Pages, and enable caching in your reverse proxy.
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md).
- [Cloud resource limits](../mitigations/resource-limits.md). [Static websites are very much susceptible to DoW attacks](https://news.ycombinator.com/item?id=39520776).

To protect any dynamic or sensitive content, such as APIs,
consider the mitigations in [authenticated systems](authenticated.md).
