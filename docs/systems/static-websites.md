---
title: Public, static websites
sidebar_position: 1
---

# Protect public, static websites from DDoS attacks

The following mitigations should prove very effective against DDoS attacks on public, static websites:

- [Reverse proxy](../mitigations/reverse-proxies.md). Make sure to host the static content on a service like Amazon S3 or GitHub Pages, and enable caching in your reverse proxy.
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md).

To protect any dynamic or sensitive content, such as APIs, consider the mitigations in [authenticated systems](../systems/authenticated.md).
