---
title: Client-based rate limiting
sidebar:
  order: 5
---

Rate limiting is a strategy to control the number of messages (e.g. HTTP requests) that a client can send to a server in a given time period.
For example, you could specify that a client can send up to 100 messages per minute.

[Application layer reverse proxies](./reverse-proxies.md#application-layer-proxy)
often support this based solely on the client's IP address.
We recommend combining that IP address-based rate limiting with one based on the client identifier
(e.g. email address, username),
for the following reasons:

- Multiple users could share the same IP address.
- Malicious users could use [residential proxies](https://nordvpn.com/blog/residential-proxies/) to switch IP addresses easily.

Many [API gateways](https://www.nginx.com/resources/glossary/api-gateway/) support this kind of rate limiting out-of-the-box and can enforce it after authentication,
but it can also be implemented in the application itself
by integrating third party libraries
(e.g. [`rate-limiter-flexible`](https://www.npmjs.com/package/rate-limiter-flexible) in Node.js).

## See also

- [Cryptographic challenges](./crypto-challenges.md).
- [Cloud resource limits](./resource-limits.md).
