---
title: Federated systems
sidebar_position: 3
---

# Protect federated systems from DDoS attacks

A system is _federated_ when each user connects through a specific server,
and users from different servers can interact with each other through these servers.
Examples include SMTP and _fediverse_ social networks like Mastodon.

Naturally, each server offers two interfaces: one for users and one for other servers.
**This document only considers the server-to-server interface**.
For the user-to-server interface,
see [authenticated servers](./authenticated) or [public goods](./public-goods.md),
depending on whether users should be authenticated.

## Deterrents available to operators

As an operator of public goods, you should consider the following deterrents, which don't require changes to the protocol:

- [Reverse proxy](../deterrents/reverse-proxies.md).
- [Unmetered DNS lookups](../deterrents/unmetered-dns.md), if the protocol uses DNS.
- [Abuse reporting](../deterrents/abuse-reporting.md).

Unfortunately, these deterrents alone may not be enough to protect against well-resourced attackers without further changes to the protocol itself.

## Protocol-level deterrents

As the designer of a protocol that powers public goods, you should consider the following deterrents:

- [User authentication](../deterrents/auth.md). If you're leveraging a protocol that has built-in authentication, such as [ActivityPub](https://www.w3.org/wiki/SocialCG/ActivityPub/Authentication_Authorization#Server_to_Server), you should probably use it. Otherwise, consider using [VeraId](https://veraid.net).
- [Cryptographic challenges](../deterrents/crypto-challenges.md). Proof of Space(time) in particular is worth considering, as IoT devices (a large source of DDoS attacks) tend to have limited storage capacity.
- [Client-aware rate limiting](../deterrents/rate-limiting.md).
- [Threat scoring](../deterrents/threat-scoring.md).
