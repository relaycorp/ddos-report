---
title: Public goods
sidebar_position: 5
---

# Protect public goods from DDoS attacks

We refer to _public goods_ as servers accessible to any device on the Internet without requiring users to log in.
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
- Awala Internet Gateways, like Relaycorp's `belgium.relaycorp.services`.
- Free geolocation APIs, like `https://ipinfo.io/geo`.

**DDoS attacks not only affect availability but also threaten decentralisation**.
Typically, it's only the well-resourced organisations with a vested interest in the ecosystem, such as Cloudflare and Google,
that have the financial and organisational capacity to prepare for and deal with these attacks.

## Mitigations available to operators

As an operator of public goods, you should consider the following mitigations, which don't require changes to the protocol:

- [Reverse proxy](../mitigations/reverse-proxies.md).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Abuse reporting](../mitigations/abuse-reporting.md).

Unfortunately, these mitigations alone may not be enough to protect against well-resourced attackers without further changes to the protocol itself.

## Protocol-level mitigations

As the designer of a protocol that powers public goods, you should consider the following mitigations:

- [Authentication](../mitigations/authentication). Use long-term identity keys to achieve pseudonymity and thus enforce other mitigations more effectively.
- [Cryptographic challenges](../mitigations/crypto-challenges.md).
- [Client-aware rate limiting](../mitigations/rate-limiting.md).
- [Client integrity verification](../mitigations/client-integrity.md), when the client is a trusted app.
- [CAPTCHAs](../mitigations/captchas.md), if the user must be human.
- [Threat scoring](../mitigations/threat-scoring.md).
