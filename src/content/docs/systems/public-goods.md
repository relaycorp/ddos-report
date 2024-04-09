---
title: Protect public goods from DDoS attacks
sidebar:
  label: Public goods
  order: 3
---

We refer to _public goods_ as servers accessible to any device on the Internet without requiring users to create an account.
These servers are essential in virtually all decentralised systems,
ensuring that users aren't priced out or forced to provide personally identifiable information (e.g. email address, phone number).
Examples include:

- DNS resolvers, like Cloudflare's `1.1.1.1` or Google's `8.8.8.8`.
- STUN servers, like `stun.cloudflare.com:3478` or `stun.l.google.com:19305`.
- Public time servers, like `time.cloudflare.com` or `time.google.com`.
- Gateways used by Blockchain thin clients, like Cloudflare's Ethereum endpoint `https://cloudflare-eth.com`.
- BitTorrent trackers, like `tracker.opentrackr.org`.
- PGP key servers, like `pgp.mit.edu`.
- Guard relays in Tor.
- Free geolocation APIs, like `https://ipinfo.io/geo`.

## Protocol-level mitigations

Adoption of the following mitigations will typically involve breaking changes to the protocol:

- [Cryptographic pseudonymous authentication](../mitigations/authentication.md#cryptographic-pseudonymous-authentication).
- [Cryptographic challenges](../mitigations/crypto-challenges.md).
- [Client-based rate limiting](../mitigations/rate-limiting.md).
- [App attestation](../mitigations/app-attestation.md).
- [Humanity verification](../mitigations/humanity-verification.md).
- [Client reputation scoring](../mitigations/client-reputation.md).

## Mitigations available to operators

The following can be adopted without breaking changes to the protocol:

- [Reverse proxy](../mitigations/reverse-proxies.md).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](../mitigations/resource-limits.md).
- [Attack detection](../mitigations/detection.md).
- [Abuse reporting](../mitigations/abuse-reporting.md).

## See also

- [API servers](apis.md), for servers that require users to log in.
