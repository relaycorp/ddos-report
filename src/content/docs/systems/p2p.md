---
title: Protect peer-to-peer networks from DDoS attacks
sidebar:
  label: Peer-to-peer networks
  order: 4
---

A network is _peer-to-peer_ (P2P) when nodes (or peers) directly share resources and communicate with each other, without central servers.
In practice, however, they still depend on [public goods](public-goods.md) (e.g. DNS resolvers, STUN servers), at least for bootstrapping and initial communication.
Examples include BitTorrent and (P2P)SIP.

As the developer of a P2P protocol, you should consider the following mitigations:

- [Authentication](../mitigations/authentication.md). Consider using long-term identity keys if pseudonymity is needed, or [VeraId](https://veraid.net) when the identity of the user is relevant.
- [Cryptographic challenges](../mitigations/crypto-challenges.md). Proof of Space(time) in particular is worth considering, as IoT devices (a large source of DDoS attacks) tend to have limited storage capacity.
- [Client-based rate limiting](../mitigations/rate-limiting.md).
- [Client reputation scoring](../mitigations/client-reputation.md).

The mitigations above work on the application layer,
but since you can't place [proxies](../mitigations/reverse-proxies.md) between peers,
the P2P application itself should also be able to mitigate attacks on the [transport layer](https://en.wikipedia.org/wiki/Transport_layer) (e.g. TCP),
such as [SYN floods](https://en.wikipedia.org/wiki/SYN_flood).
In lieu of a reverse proxy, you should consider using a P2P library that offers some DDoS defence, like [libp2p](https://docs.libp2p.io/concepts/security/dos-mitigation/).

Lastly, you should consider how the generic mitigations above can help address attack vectors specific to your P2P network. For example, in a network susceptible to Sybil attacks, both authentication and cryptographic challenges can play an important role in mitigating the issue.
