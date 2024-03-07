---
sidebar_position: 0
---

# DDoS mitigations by system type

Every system should fall into at least one of these categories. For example, an IMAP server would only fall into the [authenticated server](./authenticated) category, but Awala would fall into the [federated](./federated.md) and [public goods](./public-goods.md) categories.

Apart from the mitigations listed in this section, operators should have appropriate monitoring and alerting in place to detect surges in resource utilisation, error rates and hosting costs. These can also help identify legitimate traffic blocked by the mitigations.

Because we're only interested in DDoS attacks over the Internet, systems like intranet servers (running behind a firewall or VPC) and mesh networks are outside the scope of this document.
