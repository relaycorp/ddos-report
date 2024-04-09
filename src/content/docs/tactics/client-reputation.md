---
title: Client reputation scoring
sidebar:
  order: 10
---

**Servers can use signals such as historic activity about an [authenticated client](./authentication.md)
to calculate the client's reputation score**,
which estimates how likely it is to be malicious.
This can determine which other [mitigations](./index.md) to apply
(e.g. [cryptographic challenges](./crypto-challenges.md)) and how.

Client reputation scoring can complement IP-based reputation systems,
used in [reverse proxies](./reverse-proxies.md)
like [Akamai](https://techdocs.akamai.com/identity-cloud/docs/client-reputation-1) and [Cloudflare](https://developers.cloudflare.com/waf/custom-rules/use-cases/block-ip-reputation/),
by considering signals about the client across devices and IP addresses.

The signals that can be used to calculate the score include:

- The age of the account.
- Usage patterns.
- Whether the client runs on a [trusted app](./app-attestation.md).
- Whether the client has passed any [humanity verification test](./humanity-verification.md), if applicable.

## Private State Tokens

[Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens)
is a privacy-preserving protocol proposed by Google that allows users to demonstrate their
trustworthiness on one website by sharing that they are trusted on another.
As an experimental protocol designed to work in browsers and supported solely by Chrome,
its applications may be limited for the time being.

## See also

- [Client-based rate limiting](rate-limiting.md).
