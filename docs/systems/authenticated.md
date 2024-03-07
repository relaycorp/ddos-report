---
title: Authenticated systems
sidebar_position: 2
---

# Protect authenticated systems from DDoS attacks

For the purposes of this document, an _authenticated system_ is one where the server requires users (humans and/or bots) to [authenticate](../mitigations/authentication);
examples include APIs and VPN protocols.
We consider [server-to-server interfaces in federated systems](./federated.md) and [public goods](./public-goods.md) separately.

## Mitigations available to operators

- [Reverse proxy](../mitigations/reverse-proxies.md). If the system is web-based and aimed at humans, consider a proxy that enforces [cryptographic challenges](../mitigations/crypto-challenges.md) and [CAPTCHAs](../mitigations/captchas.md) for the most suspicious clients; for example, [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](../mitigations/resource-limits.md).
- [Abuse reporting](../mitigations/abuse-reporting.md).

## Protocol-level mitigations

- [Cryptographic challenges](../mitigations/crypto-challenges.md).
- [Client-aware rate limiting](../mitigations/rate-limiting.md).
- [Client integrity verification](../mitigations/client-integrity.md), if the client should be a trusted app.
- [CAPTCHAs](../mitigations/captchas.md), if the user must be human.
- [Threat scoring](../mitigations/threat-scoring.md).
