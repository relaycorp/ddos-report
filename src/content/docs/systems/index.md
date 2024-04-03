---
title: DDoS mitigations by system type
sidebar:
  label: Overview
  order: 0
---

This section organises the DDoS mitigations by system type
because the appropriate mitigations for each type of system vary.
Each system should fit into one or more of these categories.
For instance,
BitTorrent would be classified as a [public good](public-goods.md) and a [peer-to-peer](./p2p.md),
but an ownCloud server would only be classified as an [authenticated server](./authenticated).

We strongly recommend developers and operators to take a holistic approach to DDoS mitigation,
and consider the mitigations recommended here in the context of their specific
[DDoS Resiliency Score](https://www.ddosresiliencyscore.org/).

Operators should also have the appropriate monitoring and alerting in place to detect surges in resource utilisation, error rates and hosting costs.
These can also help identify legitimate traffic blocked by the mitigations.

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers (running behind a firewall or VPC)
and mesh networks are outside the scope of this document.
