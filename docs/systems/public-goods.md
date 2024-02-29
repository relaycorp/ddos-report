---
title: Public goods
sidebar_position: 5
---

# Protect _public goods_ from DDoS attacks

We refer to _public goods_ as servers accessible to any device on the Internet without requiring users to log in. These servers are essential in all decentralised systems, ensuring that users aren't priced out or forced to provide personally identifiable information. Examples include:

- DNS resolvers, like Cloudflare's `1.1.1.1` or Google's `8.8.8.8`.
- STUN servers, like Cloudflare's `stun.cloudflare.com:3478` or Google's `stun.l.google.com:19305`.
- Public time servers, like Cloudflare's `time.cloudflare.com` or Google's `time.google.com`.
- Bittorrent trackers, like `tracker.opentrackr.org`.
- _Guard relays_ in Tor.
- Gateways used by Blockchain thin clients, like Cloudflare's Ethereum endpoint `https://cloudflare-eth.com`.
- PGP key servers, like `pgp.mit.edu`.
- Awala Internet Gateways, like Relaycorp's `belgium.relaycorp.services`.
- Specialised utilities, including geolocation APIs like `https://ipinfo.io/geo`.

DDoS attacks not only affect availability but also threaten decentralisation. It's usually the companies with a vested interest in the ecosystem that have the financial and organisational capacity to prepare for and deal with these attacks, unlike volunteers.

## Deterrents available to operators

As an operator of public goods, you should consider the following deterrents, which don't require changes to the protocol:

- [Reverse proxy](../deterrents/reverse-proxies.md). Preferably a Layer 7 proxy if the protocol (e.g., HTTP) is supported.
- [Unmetered DNS lookups](../deterrents/unmetered-dns.md), if the protocol uses DNS.

Unfortunately, these deterrents alone may not be enough to protect against well-resourced attackers without further changes to the protocol itself.

## Protocol-level deterrents

As the designer of a protocol that powers public goods, you should consider the following deterrents:

- [Cryptographic challenges](../deterrents/crypto-challenges.md).
- [Client-aware rate limiting](../deterrents/rate-limiting.md).
- [Client integrity verification](../deterrents/client-integrity.md).
- [CAPTCHAs](../deterrents/captchas.md), if the user is supposed to be human.
- [Threat scoring](../deterrents/threat-scoring.md).
- [Abuse reporting](../deterrents/abuse-reporting.md).
