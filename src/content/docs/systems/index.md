---
title: DDoS mitigations by system type
sidebar:
  label: Overview
  order: 0
---

Every system should fall into at least one of these categories.
For example, an IMAP server would only fall into the [authenticated server](./authenticated) category,
but BitTorrent would fall into the [peer-to-peer](./p2p.md) and [public goods](public-goods.md) categories.

Apart from the mitigations listed in this section,
operators should have the appropriate monitoring and alerting in place to detect surges in resource utilisation, error rates and hosting costs.
These can also help identify legitimate traffic blocked by the mitigations.

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers (running behind a firewall or VPC)
and mesh networks are outside the scope of this document.
