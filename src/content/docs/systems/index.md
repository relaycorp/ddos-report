---
title: DDoS mitigations by system type
sidebar:
  label: Overview
  order: 0
---

Since the DDoS mitigations to adopt in every system depend on the system's type,
this section groups the mitigations by system type.
Every system should fall into at least one of these categories.
For example,
an ownCloud server would only fall into the [authenticated server](./authenticated) category,
but BitTorrent would fall into the [peer-to-peer](./p2p.md) and [public goods](public-goods.md) categories.

We strongly recommend developers and operators to take a holistic approach to DDoS mitigation,
and consider the mitigations recommended here in the context of their specific
[DDoS Resiliency Score](https://www.ddosresiliencyscore.org/).

Operators should have the appropriate monitoring and alerting in place to detect surges in resource utilisation, error rates and hosting costs.
These can also help identify legitimate traffic blocked by the mitigations.

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers (running behind a firewall or VPC)
and mesh networks are outside the scope of this document.
