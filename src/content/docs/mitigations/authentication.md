---
title: Client authentication
sidebar:
  order: 3
---

Authentication is the process of verifying the identity of a client.
In the context of DDoS mitigation,
authentication plays a crucial role in ensuring that users comply with policies such as [rate limits](./rate-limiting.md),
regardless of the network from which they are connecting.

Some [application layer proxies](./reverse-proxies.md#application-layer-proxy) offer the ability to authenticate users,
blocking anonymous traffic.

## Types

Authentication is often equated with user authentication,
but there are other types that are relevant to DDoS mitigation.

### User authentication

**User authentication verifies that the human or bot connecting to
the service is who they claim to be**.
It may involve a username and password,
or a federated identity provider such as Google or Facebook,
for example.

Upon successful authentication,
the incoming message (e.g. HTTP request) is associated with the user's email address or username.
Abusive users could be blocked by their identifiers.

### Cryptographic pseudonymous authentication

Privacy-preserving,
decentralised systems can assign cryptographically generated pseudonyms to users,
allowing them to maintain a consistent digital identity across sessions.
This strikes a balance between privacy and accountability.

This is typically implemented with long-term key pairs.
The user signs messages with their private key,
and the server/peer verifies the signature with the corresponding public key.
[Awala](https://awala.network/tech-overview#authentication-and-access-control) and [Ethereum](https://info.etherscan.com/what-is-an-ethereum-address/) are examples of systems
that use this type of authentication.

The user's identifier, or pseudonym, is derived from the public key (e.g. its SHA-256 digest).
Abusive users could be blocked by their pseudonyms.

### Server authentication

**Server authentication verifies that a server is who it claims to be**,
whilst acting as a client to another server.
The user identifier in this case is the domain name of the server acting as client.
This effectively makes it possible to authenticate organisations,
rather than individual users.

To the best of our knowledge,
[VeraId](https://veraid.net) is the only authentication protocol that supports this out-of-the-box.
[HTTP Message Signatures](https://justinsecurity.medium.com/signing-http-messages-962510d65895)
could be used as part of a broader protocol,
such as [that of ActivityPub](https://www.w3.org/wiki/SocialCG/ActivityPub/Authentication_Authorization#Server_to_Server).
[TLS client certificates](https://techcommunity.microsoft.com/t5/iis-support-blog/client-certificate-authentication-part-1/ba-p/324623)
wouldn't work because [certificate authorities](https://en.wikipedia.org/wiki/Certificate_authority) would have to
explicitly allow their use on the client side when issuing server certificates.

To deter abuse,
servers could be blocked by their domain name.
Additionally,
offending domain names could be reported to [Spamhaus](https://www.spamhaus.org/domain-reputation/)
or a dedicated registry to alert other services.

## See also

- [Abuse reporting](./abuse-reporting.md).
- [Client-based rate limiting](./rate-limiting.md).
- [Client reputation scoring](./client-reputation.md), which could use the user's historic activity across devices and IP addresses amongst its signals.
