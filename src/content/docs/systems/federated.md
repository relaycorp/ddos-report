---
title: Protect federated systems from DDoS attacks
sidebar:
  label: Federated systems
  order: 3
---

A system is _federated_ when each user connects through a specific server,
and users from different servers can interact with each other through these servers.
Examples include SMTP and _fediverse_ social networks like Mastodon.

Naturally, each server offers two interfaces: one for users and one for other servers.
**This document only considers the server-to-server interface**.
For the user-to-server interface,
see [authenticated systems](./authenticated) or [public goods](public-goods.md),
depending on whether users should be authenticated.

## Mitigations available to operators

- [Reverse proxy](../mitigations/reverse-proxies.md).
- [Unmetered DNS lookups](../mitigations/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](../mitigations/resource-limits.md).
- [Attack detection](../mitigations/detection.md).
- [Abuse reporting](../mitigations/abuse-reporting.md).

Unfortunately, these mitigations alone may not be enough to protect against well-resourced attackers without further changes to the protocol itself.

## Protocol-level mitigations

- [Authentication](../mitigations/authentication.md). If you're leveraging a protocol that has built-in authentication, such as [ActivityPub](https://www.w3.org/wiki/SocialCG/ActivityPub/Authentication_Authorization#Server_to_Server), you should probably use it — otherwise, consider using [VeraId](https://veraid.net) to identify the domain name of the server. You may not want to allow anonymity or pseudonymity (e.g. long-term identity keys), as it'd make it difficult to block abusive servers.
- [Cryptographic challenges](../mitigations/crypto-challenges.md). Proof of Space(time) in particular is worth considering, as IoT devices (a large source of DDoS attacks) tend to have limited storage capacity and there's probably no legitimate use for them as servers in a federation.
- [Client-based rate limiting](../mitigations/rate-limiting.md).
- [Client reputation scoring](../mitigations/client-reputation.md).
