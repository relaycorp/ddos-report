---
title: Reverse proxies
sidebar_position: 0
---

# Reverse proxies

- L3/L4 at least. Preferably a Layer 7 proxy if the protocol (e.g., HTTP) is supported.
- AKA: Load balancers, CDNs.

## Features

- Unmetered inbound traffic.
- DDoS protection.
- Firewalls, including Web Application Firewalls (WAFs). Some support managed rulesets.
  - Consider Google's BeyondCorp model.
- Caching.
- TSL termination.
- Behaviour analysis.
  - Disadvantages: [Poor privacy](https://www.fastcompany.com/90369697/googles-new-recaptcha-has-a-dark-side), depending on the provider.
- Authentication (e.g., JWKS verification).
- Programmatic access control (e.g., Cloudflare Pages Functions).
- Throttling. To avoid overloading the origin server.
- Rate limiting. Per-IP address, for example.

## Advantages

## Disadvantages

## Turnkey solutions

- [Akamai](https://www.akamai.com/).
- [Amazon CloudFront](https://aws.amazon.com/cloudfront/).
- [Cloudflare](https://www.cloudflare.com/).
- [Fastly](https://www.fastly.com/).
- [Google Cloud Load Balancing](https://cloud.google.com/load-balancing/).
- [Incapsula](https://www.incapsula.com/).
- [Microsoft Azure Load Balancer](https://learn.microsoft.com/en-us/azure/load-balancer/).
