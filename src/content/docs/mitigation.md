---
title: Mitigate DDoS attacks
description: How to protect static websites, APIs, peer-to-peer systems and other servers from DDoS attacks.
next: "All mitigation tactics"
---

The specifics of successfully mitigating DDoS attacks vary greatly depending on your resources,
threat model, and the type of systems you are defending;
nevertheless,
in general,
we advise that developers and operators use the following five-step process to mitigate attacks:

1. [Learn how DDoS attacks work](#learn-how-ddos-attacks-work).
2. [Define your threat model](#define-your-threat-model).
3. [Assess your organisation's preparedness](#assess-your-organisations-preparedness).
4. [Adopt the appropriate mitigation tactics](#adopt-the-appropriate-mitigation-tactics).
5. [Define your response plan](#define-your-response-plan).

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers and mesh networks are outside the scope of this document.

## Learn how DDoS attacks work

You can only protect yourself from DDoS attacks if you understand how they work,
so if you aren't already familiar with the topic,
[read our explanation](./overview.md).

## Define your threat model

DDoS mitigation,
like any security improvement initiative,
should start with a
[threat model](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
to make sure that the actions taken are suitable for the risks involved.
Said model should include the assets you need to protect,
the adversaries you want to defend against,
and what they're capable of.

If you're the developer of a white-labelled app,
consider the threat model of the individuals and organisations that you're targeting.

## Assess your organisation's preparedness

Operators should assess their organisation's preparedness against their own threat model
using the [DDoS Resiliency Score (DRS)](https://www.ddosresiliencyscore.org/securitymanagers/).

Note that elements of the DRS appear to assume that the server is a website accessed from a browser,
but the underlying principles are more broadly applicable.
For example,
it defines "HTTP Flood JavaScript Support" as an attack vector that can circumvent
[cryptographic challenges](./tactics/crypto-challenges.md),
but the principle applies to any malicious client that supports the challenge.

As part of this exercise,
operators should stress-test their systems to ensure that they can handle the expected load.

## Adopt the appropriate mitigation tactics

**Adopting the appropriate tactics is the joint responsibility of developers and operators**.
We group the tactics below by system type because they differ widely depending on the system.
Each system should fit within one or more categories, such as:

- An open DNS resolver (e.g. Google's `8.8.8.8`) would just be classified as a [public good](#public-goods).
- A CMS like WordPress comprises [static assets](#static-websites) (e.g. CSS, JS) and an [API](#api-servers-and-dynamic-websites) (e.g. website rendering, admin portal).
- BitTorrent comprises components that fall under [public goods](#public-goods) (i.e. trackers) and [peer-to-peer](#peer-to-peer-networks) (i.e. clients).

We aim to provide a comprehensive list of tactics,
so some may be excessive for your specific threat model or not applicable to your system.

### Static websites

The following mitigations should prove very effective against DDoS attacks on static websites that don't require [authentication](tactics/authentication.md):

- [Reverse proxy](tactics/reverse-proxies.md). Make sure to host the static content on a service like Amazon S3 or GitHub Pages, and enable caching in your reverse proxy.
- [Unmetered DNS lookups](tactics/unmetered-dns.md).
- [Cloud resource limits](tactics/resource-limits.md). [Static websites are also susceptible to _Denial of Wallet_ attacks](https://news.ycombinator.com/item?id=39520776).
- [Monitoring and alerting](tactics/detection.md#monitoring-and-alerting).

### API servers and dynamic websites

These are servers that provide an interface with which human and/or bot users interact.
It includes, but isn't limited to, Web-based APIs and websites with server-side rendering.

Developers should consider the following mitigations,
most of which may involve breaking changes to the protocol:

- [Client authentication](tactics/authentication.md).
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [App attestation](tactics/app-attestation.md).
- [Humanity verification](tactics/humanity-verification.md).
- [Client reputation scoring](tactics/client-reputation.md).
- [Instrumentation](tactics/detection.md#instrumentation).

On the other hand,
operators can adopt the following mitigations:

- [Reverse proxy](tactics/reverse-proxies.md). If the system is Web-based and aimed at humans, consider a proxy that enforces [cryptographic challenges](tactics/crypto-challenges.md) and [CAPTCHAs](tactics/humanity-verification.md) for the most suspicious clients; for example, [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
- [Unmetered DNS lookups](tactics/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](tactics/resource-limits.md).
- [Attack detection](tactics/detection.md).
- [Monitoring and alerting](tactics/detection.md#monitoring-and-alerting).
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

Developers should consider the following mitigations,
most of which may require breaking changes to the protocol:

- [Cryptographic pseudonymous authentication](tactics/authentication.md#cryptographic-pseudonymous-authentication).
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [App attestation](tactics/app-attestation.md).
- [Humanity verification](tactics/humanity-verification.md).
- [Client reputation scoring](tactics/client-reputation.md).
- [Instrumentation](tactics/detection.md#instrumentation).

Operators, on the other hand, can use the following mitigations:

- [Reverse proxy](tactics/reverse-proxies.md).
- [Unmetered DNS lookups](tactics/unmetered-dns.md), if the protocol uses DNS.
- [Cloud resource limits](tactics/resource-limits.md).
- [Attack detection](tactics/detection.md).
- [Monitoring and alerting](tactics/detection.md#monitoring-and-alerting).
- [Abuse reporting](tactics/abuse-reporting.md).

### Peer-to-peer networks

A network is _peer-to-peer_ (P2P) when nodes (or peers) directly share resources and communicate with each other,
without central servers.
In practice,
however,
they still depend on public goods (e.g. DNS resolvers, STUN servers),
at least for bootstrapping and initial communication.
Examples include BitTorrent and (P2P)SIP.

As the developer of a P2P protocol, you should consider the following mitigations:

- [Authentication](tactics/authentication.md).
  Consider using long-term identity keys if pseudonymity is needed, or [VeraId](https://veraid.net) when the identity of the user is relevant.
- [Cryptographic challenges](tactics/crypto-challenges.md).
- [Client-based rate limiting](tactics/rate-limiting.md).
- [Client reputation scoring](tactics/client-reputation.md).
- Where possible, a centralised [attack detection system](tactics/detection.md).

The mitigations above work on the application layer,
but since you can't place [proxies](tactics/reverse-proxies.md) between peers,
the P2P application itself should also be able to mitigate attacks on the
[transport layer](https://en.wikipedia.org/wiki/Transport_layer) (e.g. TCP),
such as [SYN floods](https://en.wikipedia.org/wiki/SYN_flood).
In lieu of a reverse proxy,
you should consider using a P2P library that offers some DDoS defence,
like [libp2p](https://docs.libp2p.io/concepts/security/dos-mitigation/).

Lastly,
consider how the mitigations above can help address non-DDoS attacks specific to your P2P network.
For example,
in a network susceptible to [Sybil attacks](https://www.imperva.com/learn/application-security/sybil-attack/),
both authentication and cryptographic challenges can play an important role in mitigating such attacks.

## Define your response plan

With the help of mitigation tactics implemented by developers,
operators should create a response plan outlining how they will detect, respond to, and recover from DDoS attacks.

The [NETSCOUT DDoS Response Playbook](https://www.netscout.com/resources/other-documents/effective-ddos-response-doesn-t-happen-by-accident)
is a good starting point for this exercise.

## Conclusion

Successfully mitigating DDoS attacks requires a multi-layered approach and ongoing adaptation.
Whilst no single tactic provides complete protection,
the combination of thoughtful design, responsible development practices,
and vigilant operations can dramatically enhance the resilience of your systems.

This document serves as a guide to inform your approach,
but it's vital to remember that the threat landscape is ever-evolving.
Stay informed about new mitigation strategies,
and regularly evaluate your chosen tactics to ensure they remain effective.
