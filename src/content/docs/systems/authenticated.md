---
title: Protect authenticated systems from DDoS attacks
sidebar:
  label: Authenticated systems
  order: 2
---

For the purposes of this document, an _authenticated system_ is one where the server requires users (humans and/or bots) to [authenticate](../mitigations/authentication.md);
examples include APIs and VPN servers.
We consider [server-to-server interfaces in federated systems](federated.md) and [public goods](public-goods.md) separately.

## Mitigations available to operators

- [Reverse proxy](../mitigations/reverse-proxies.md). If the system is web-based and aimed at humans, consider a proxy that enforces [cryptographic challenges](../mitigations/crypto-challenges.md) and [CAPTCHAs](../mitigations/humanity-verification.md) for the most suspicious clients; for example, [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](../mitigations/resource-limits.md).
- [Attack detection](../mitigations/detection.md).
- [Abuse reporting](../mitigations/abuse-reporting.md).

## Protocol-level mitigations

- [Cryptographic challenges](../mitigations/crypto-challenges.md).
- [Client-based rate limiting](../mitigations/rate-limiting.md).
- [App attestation](../mitigations/app-attestation.md).
- [Humanity verification](../mitigations/humanity-verification.md).
- [Client reputation scoring](../mitigations/client-reputation.md).
