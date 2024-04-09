---
title: Mitigate DDoS attacks
description: How to protect static websites, APIs, peer-to-peer systems and other servers from DDoS attacks.
next: false
---

**DDoS mitigation,
like any security improvement initiative,
should start with a threat model to make sure that the actions taken are suitable for the risks involved**.
Once a threat model is established,
we recommend assessing your organisation's preparedness against it using the
[DDoS Resiliency Score](https://www.ddosresiliencyscore.org/securitymanagers/).

## Mitigations by system type

This section organises the DDoS mitigations by system type
because the appropriate mitigations for each type vary.
We aim to provide a comprehensive list of mitigations,
but some may be excessive for your specific threat model.

Each system should fit into one or more categories; for example:

- An open DNS resolver (e.g. Google's `8.8.8.8`) would just be classified as a [public good](#public-goods).
- A CMS like WordPress comprises [static assets](#static-websites) (e.g. CSS, JS) and an [API](#api-servers) (e.g. website rendering, admin portal).
- BitTorrent comprises components that fall under [public goods](#public-goods) (i.e. trackers) and [peer-to-peer](#peer-to-peer-networks) (i.e. clients).

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers and mesh networks are outside the scope of this document.

### Static websites

The following mitigations should prove very effective against DDoS attacks on static websites that don't require [authentication](tactics/authentication.md):

- [Reverse proxy](tactics/reverse-proxies.md). Make sure to host the static content on a service like Amazon S3 or GitHub Pages, and enable caching in your reverse proxy.
- [Unmetered DNS lookups](tactics/unmetered-dns.md).
- [Cloud resource limits](tactics/resource-limits.md). [Static websites are very much susceptible to DoW attacks](https://news.ycombinator.com/item?id=39520776).
- [Attack detection](tactics/detection.md).

### API servers

For the purposes of this document,
an _API server_ is a server that provides an interface for human and/or bot users to interact with a system.
It includes, but isn't limited to, Web-based APIs.

#### Protocol-level mitigations

Adoption of the following mitigations will typically involve breaking changes to the protocol:

- [Client authentication](tactics/authentication.md).
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [App attestation](tactics/app-attestation.md).
- [Humanity verification](tactics/humanity-verification.md).
- [Client reputation scoring](tactics/client-reputation.md).

#### Mitigations available to operators

The following can be adopted without breaking changes to the protocol:

- [Reverse proxy](tactics/reverse-proxies.md). If the system is Web-based and aimed at humans, consider a proxy that enforces [cryptographic challenges](tactics/crypto-challenges.md) and [CAPTCHAs](tactics/humanity-verification.md) for the most suspicious clients; for example, [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
- [Unmetered DNS lookups](tactics/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](tactics/resource-limits.md).
- [Attack detection](tactics/detection.md).
- [Abuse reporting](tactics/abuse-reporting.md).

### Public goods

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

#### Protocol-level mitigations

Adoption of the following mitigations will typically involve breaking changes to the protocol:

- [Cryptographic pseudonymous authentication](tactics/authentication.md#cryptographic-pseudonymous-authentication).
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [App attestation](tactics/app-attestation.md).
- [Humanity verification](tactics/humanity-verification.md).
- [Client reputation scoring](tactics/client-reputation.md).

#### Mitigations available to operators

The following can be adopted without breaking changes to the protocol:

- [Reverse proxy](tactics/reverse-proxies.md).
- [Unmetered DNS lookups](tactics/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](tactics/resource-limits.md).
- [Attack detection](tactics/detection.md).
- [Abuse reporting](tactics/abuse-reporting.md).

### Peer-to-peer networks

A network is _peer-to-peer_ (P2P) when nodes (or peers) directly share resources and communicate with each other, without central servers.
In practice, however, they still depend on [public goods](#public-goods) (e.g. DNS resolvers, STUN servers), at least for bootstrapping and initial communication.
Examples include BitTorrent and (P2P)SIP.

As the developer of a P2P protocol, you should consider the following mitigations:

- [Authentication](tactics/authentication.md). Consider using long-term identity keys if pseudonymity is needed, or [VeraId](https://veraid.net) when the identity of the user is relevant.
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [Client reputation scoring](tactics/client-reputation.md).

The mitigations above work on the application layer,
but since you can't place [proxies](tactics/reverse-proxies.md) between peers,
the P2P application itself should also be able to mitigate attacks on the [transport layer](https://en.wikipedia.org/wiki/Transport_layer) (e.g. TCP),
such as [SYN floods](https://en.wikipedia.org/wiki/SYN_flood).
In lieu of a reverse proxy, you should consider using a P2P library that offers some DDoS defence, like [libp2p](https://docs.libp2p.io/concepts/security/dos-mitigation/).

Lastly,
consider how the mitigations above can help address non-DDoS attack specific to your P2P network.
For example,
in a network susceptible to Sybil attacks,
both authentication and cryptographic challenges can play an important role in mitigating such attacks.
