---
title: Reverse proxies
description: How to use reverse proxies, also known as CDNs and load balancers, to mitigate DDoS attacks.
sidebar:
  order: 1
---

**A reverse proxy is a server that sits between an _origin server_ and its clients**,
to protect the origin server and improve performance,
amongst other reasons.
They're more commonly known as _Content Delivery Networks_ (CDNs) or _Load Balancers_ (LBs) but,
in the context of DDoS mitigation,
we're specifically interested in their capacity as reverse proxies.

![Diagram of a reverse proxy](../../../assets/diagrams/attacks-reverse-proxy.svg)

Reverse proxies are essential, but not sufficient, to mitigate DDoS attacks.
All server-side apps,
except for [peer-to-peer](../mitigation.md#peer-to-peer-networks) ones,
can benefit from such proxies.

It's crucial to make the origin server inaccessible from the Internet to prevent attackers from bypassing the proxy.
In case this isn't possible,
protect the origin server with a firewall that only allows proxy traffic and set the origin server's URL to be difficult to guess.

## Types

Reverse proxies are mainly classified by the highest layer that they protect.
**The more layers it covers,
the more effective the proxy can be at mitigating DDoS attacks**.

As a reminder,
the following diagram shows the different layers of the Internet Protocol (IP) model using HTTP as an example:

![The IP model layers, using HTTP as an example](../../../assets/diagrams/attacks-ip-model-layers.svg)

### Internet layer proxy

**These proxies protect the internet layer from [volumetric attacks](../overview.md#volumetric-attacks)**,
primarily by absorbing the attack traffic.
They achieve this by overprovisioning bandwidth and employing
[anycast IP routing](https://geekflare.com/anycast-routing-ddos-attacks/) and [BGP Flowspec](https://www.noction.com/blog/ddos-scrubbing),
amongst other techniques and technologies.
The malicious traffic never reaches the origin server.

Internet layer proxies are typically called _network layer proxies_,
_layer 3 proxies_ or _L3 proxies_, in reference to the OSI model.

When shopping for an internet layer proxy,
it's important to ensure that it offers unmetered inbound traffic.

**We strongly recommend cloud-based internet layer proxies**,
as they're specifically designed to absorb large DDoS attacks,
unlike a comparable service from ISPs
(typically called [_clean pipe_](https://www.radware.com/security/ddos-knowledge-center/ddospedia/clean-pipe/)).
Cloud-based internet layer proxies tend to be bundled with transport layer proxies.

### Transport layer proxy

**These proxies protect the transport layer from [protocol attacks](../overview.md#protocol-attacks)**
by filtering traffic based on the transport layer protocol.
Like internet layer proxies,
they shield the origin server from the attack traffic.

Transport layer proxies are often called _layer 4 proxies_ or _L4 proxies_,
in reference to the OSI model.

These proxies can offer the following DDoS-related features:

- **Firewall** to block traffic based on the client's IP address or other properties derived from it (e.g. its country, whether it's a known Tor node).
- **IP reputation** to block traffic from known bad IP addresses, or to [verify that a suspicious user is human](./humanity-verification.md). See also [client reputation scoring](./client-reputation.md).
- **IP-based rate limiting** to throttle TCP connections or UDP datagrams from IP addresses that exceed a certain threshold. See also [client-based rate limiting](./rate-limiting.md).
- **[TLS termination](https://en.wikipedia.org/wiki/TLS_termination_proxy)** to shield the origin server from [exhaustion attacks](https://www.akamai.com/glossary/what-is-an-ssl-tls-exhaustion-attack), such as [D(HE)at](https://dheatattack.gitlab.io/summary/).

### Application layer proxy

**These extend transport layer proxies to also protect the application layer
from [application attacks](../overview.md#application-attacks)**,
by filtering traffic based on the application layer protocol.

Application layer proxies are often called _layer 7 proxies_ or _L7 proxies_,
in reference to the OSI model.
[API gateways](https://www.nginx.com/resources/glossary/api-gateway/) can be considered a sophisticated form of application layer proxy.

Virtually all such proxies are HTTP proxies,
and they can offer the following DDoS-related features:

- **Web Application Firewall (WAF)** to block malicious traffic based on the content of the HTTP request (e.g. user agent), and/or transport layer information (e.g. IP address).
  WAF policies can also be based on [attack signatures](https://www.red-button.net/ddos-glossary/signatures/),
  which can come from a database of attack patterns known to the provider,
  or identified with Machine Learning (ML) based on traffic analysis for each origin server.
- **IP-based rate limiting** to throttle HTTP requests or WebSockets messages from IP addresses that exceed a certain threshold. See also [client-based rate limiting](./rate-limiting.md).
- **[HTTP caching](https://http.dev/caching)** to reduce the load on the origin server.
- **Authentication** to block anonymous traffic by verifying `Bearer` tokens in the `Authorization` header, for example. This feature is more commonly offered by API gateways.
- **Programmatic access control** to implement more sophisticated access control policies, which are typically enforced at the [edge](https://www.cloudflare.com/en-gb/learning/cdn/glossary/edge-server/).

## Self-hosted proxies

Self-hosted proxies can be viable alternatives to cloud-based solutions, but they require substantially more resources to set up and maintain.

Self-hosted transport layer proxies include:

- [HAProxy](https://www.haproxy.org).
- [IPVS](https://en.wikipedia.org/wiki/IP_Virtual_Server).

Self-hosted application layer proxies include:

- [Caddy](https://caddyserver.com/).
- [Nginx](https://nginx.org).
- [Traefik](https://traefik.io/traefik/).

When implementing self-hosted proxies, it's crucial to implement distributed rate limiting mechanisms, to coordinate across multiple proxy instances.

## Cloud-based proxies

As mentioned above,
cloud-based proxies are the most effective at mitigating DDoS attacks.
The following are the most popular providers of internet/transport and application layer proxies:

- [Akamai](https://www.akamai.com/).
- AWS: [API Gateway](https://aws.amazon.com/api-gateway/), [CloudFront](https://aws.amazon.com/cloudfront/) (HTTP proxy), and [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/). See also their best practices for [DDoS mitigation](https://docs.aws.amazon.com/whitepapers/latest/aws-best-practices-ddos-resiliency/best-practices-for-ddos-mitigation.html) and [load balancing](https://aws.github.io/aws-elb-best-practices/security/infrastructure_protection/).
- [Azure Load Balancer](https://azure.microsoft.com/solutions/load-balancing-with-azure/). See also [Azure DDoS Protection documentation](https://learn.microsoft.com/en-us/azure/ddos-protection/).
- [Cloudflare](https://www.cloudflare.com/).
- [Deflect](https://deflect.ca/).
- [Fastly](https://www.fastly.com/).
- [Google Cloud Load Balancing](https://cloud.google.com/load-balancing/). See also [Google Cloud Armor](https://cloud.google.com/security/products/armor), and [its best practices](https://cloud.google.com/armor/docs/best-practices).
- [Incapsula](https://www.incapsula.com/).
- [Netscout Arbor](https://www.netscout.com/arbor).

Vulnerable groups, such as journalists and human rights organisations,
can apply for free services from
[Cloudflare](https://www.cloudflare.com/galileo/),
[eQualitie](https://deflect.ca/non-profits/) and
[Google](https://projectshield.withgoogle.com/),
for example.
