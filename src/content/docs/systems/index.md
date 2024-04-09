---
title: DDoS mitigations by system type
sidebar:
  label: Overview
  order: 0
---

**DDoS mitigation,
like any security improvement initiative,
should start with a threat model to make sure that the actions taken are suitable for the risks involved**.
Once a threat model is established,
we recommend assessing your organisation's preparedness against it using the
[DDoS Resiliency Score](https://www.ddosresiliencyscore.org/securitymanagers/).

This section organises the [DDoS mitigations](../mitigations/index.md) by system type
because the appropriate mitigations for each type vary.
We aim to provide a comprehensive list of mitigations,
but some may be excessive for your specific threat model.

Each system should fit into one or more categories; for example:

- An open DNS resolver (e.g. Google's `8.8.8.8`) would just be classified as a [public good](public-goods.md).
- A CMS like WordPress comprises [static assets](./static-websites.md) (e.g. CSS, JS) and an [API](./apis.md) (e.g. website rendering, admin portal).
- BitTorrent comprises components that fall under [public goods](public-goods.md) (i.e. trackers) and [peer-to-peer](./p2p.md) (i.e. clients).

Because we're only interested in DDoS attacks over the Internet,
systems like intranet servers and mesh networks are outside the scope of this document.
