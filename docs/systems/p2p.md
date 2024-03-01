---
title: Peer-to-peer networks
sidebar_position: 4
---

# Protect peer-to-peer networks from DDoS attacks

A network is _peer-to-peer_ (P2P) when nodes (or peers) directly share resources and communicate with each other, without central servers.
In practice, however, they still depend on [public goods](./public-goods.md) (e.g. DNS resolvers, STUN servers), at least for bootstrapping and initial communication.
Examples include BitTorrent and (P2P)SIP.

## Protocol-level mitigations

As the designer of a protocol that powers P2P networks, you should consider the following mitigations:

- [Authentication](../mitigations/authentication). Consider using long-term identity keys if pseudonymity is needed, or [VeraId](https://veraid.net) when the identity of the user is relevant.
- [Cryptographic challenges](../mitigations/crypto-challenges.md). Proof of Space(time) in particular is worth considering, as IoT devices (a large source of DDoS attacks) tend to have limited storage capacity.
- [Client-aware rate limiting](../mitigations/rate-limiting.md).
- [Threat scoring](../mitigations/threat-scoring.md).

You should also consider how the generic mitigations above can help address attack vectors specific to your P2P network. For example, in a network susceptible to Sybil attacks, both authentication and cryptographic challenges can play an important role in mitigating the issue.
