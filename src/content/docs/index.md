---
title: The DDoS Report
template: splash
hero:
  tagline: The complete guide to Distributed Denial of Service (DDoS) attacks for developers and operators.
  image:
    light: ../../assets/hero-light.png
    dark: ../../assets/hero-dark.png
  actions:
    - text: Learn how DDoS attacks work
      link: /overview
      icon: right-arrow
      variant: primary
    - text: Mitigate DDoS attacks
      link: /systems
      icon: right-arrow
      variant: secondary
---

## DDoS attacks deserve more attention

**Anyone with a browser can launch a DDoS attack today**.
A quick Google search will reveal services that allow anyone to launch such attacks anonymously.
Small-scale attacks start from $5, and free trials are often available.
Unsurprisingly,
[DDoS attacks are on the rise](https://www.cybersecuritydive.com/news/ddos-attacks-surge-cloudflare/704011/),
which may intensify as Internet connectivity improves worldwide,
and more vulnerable IoT devices come online.

These attacks not only infringe on our freedom but also have a significant financial impact.
Anyone with an online presence,
from [hobbyists](https://news.ycombinator.com/item?id=39520776) to [Fortune 500 companies](https://blog.cloudflare.com/ransom-ddos-attacks-target-a-fortune-global-500-company),
can be a target.
Furthermore, they pose a threat to the decentralisation of the Internet,
as only well-resourced companies can afford to operate and protect
the [public goods](./systems/public-goods.md) on which we all depend.

Fortunately,
**although developers and operators can't _avoid_ DDoS attacks,
they can _greatly minimise_ the impact of such attacks**.
[Reverse proxies](./mitigations/reverse-proxies.md) (aka _CDNs_) are a great starting point,
but they must be complemented with other [mitigations](./mitigations/index.md)
depending on the [system type](./systems/index.md).

## Help wanted

We'd very much appreciate any feedback from companies with vantage points on DDoS attacks,
as well as security researchers.
If we've misrepresented anything, or overlooked details relevant to app developers or operators,
please let us know on [our forum](https://github.com/relaycorp/ddos-report/discussions).
