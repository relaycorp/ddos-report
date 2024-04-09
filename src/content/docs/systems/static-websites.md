---
title: Protect static websites from DDoS attacks
sidebar:
  label: Static websites
  order: 1
---

The following mitigations should prove very effective against DDoS attacks on static websites that don't require [authentication](../mitigations/authentication.md):

- [Reverse proxy](../mitigations/reverse-proxies.md). Make sure to host the static content on a service like Amazon S3 or GitHub Pages, and enable caching in your reverse proxy.
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md).
- [Cloud resource limits](../mitigations/resource-limits.md). [Static websites are very much susceptible to DoW attacks](https://news.ycombinator.com/item?id=39520776).
- [Attack detection](../mitigations/detection.md).

## See also

- [API servers](apis.md).
