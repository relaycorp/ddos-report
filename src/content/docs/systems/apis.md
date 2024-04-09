---
title: Protect API servers from DDoS attacks
sidebar:
  label: API servers
  order: 2
---

For the purposes of this document,
an _API server_ is a server that provides an interface for human and/or bot users to interact with a system.
It includes, but isn't limited to, Web-based APIs.

## Protocol-level mitigations

Adoption of the following mitigations will typically involve breaking changes to the protocol:

- [Client authentication](../mitigations/authentication.md).
- [Cryptographic challenges](../mitigations/crypto-challenges.md).
- [Client-based rate limiting](../mitigations/rate-limiting.md).
- [App attestation](../mitigations/app-attestation.md).
- [Humanity verification](../mitigations/humanity-verification.md).
- [Client reputation scoring](../mitigations/client-reputation.md).

## Mitigations available to operators

The following can be adopted without breaking changes to the protocol:

- [Reverse proxy](../mitigations/reverse-proxies.md). If the system is Web-based and aimed at humans, consider a proxy that enforces [cryptographic challenges](../mitigations/crypto-challenges.md) and [CAPTCHAs](../mitigations/humanity-verification.md) for the most suspicious clients; for example, [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](../mitigations/resource-limits.md).
- [Attack detection](../mitigations/detection.md).
- [Abuse reporting](../mitigations/abuse-reporting.md).

## See also

- [Public goods](public-goods.md), for APIs available to anonymous or pseudonymous users.
- [Static websites](static-websites.md).
