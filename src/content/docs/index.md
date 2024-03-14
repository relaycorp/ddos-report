---
title: The DDoS Report
template: splash
hero:
  tagline: Everything app developers and operators need to know about Distributed Denial of Service (DDoS) attacks.
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

**Anyone with a web browser can launch a DDoS attack today**.
It's not even necessary to go to the _Dark Web_ —
a Google search will reveal services that allow clients to launch such attacks anonymously
for as little as $5,
with some even offering free trials.
Unsurprisingly,
[DDoS attacks are on the rise](https://www.cybersecuritydive.com/news/ddos-attacks-surge-cloudflare/704011/),
which may intensify as Internet connectivity and bandwidth increase,
and more vulnerable IoT devices come online.

Until now, the best [CAPTCHAs](./mitigations/captchas.md) have been relatively effective in deterring unwanted bots,
but [proprietary AI systems can already solve them](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/).
It might only be a matter of time before open source AI models can do the same on a larger scale,
without the guardrails implemented in their proprietary counterparts.

These attacks not only infringe on our freedom but also have a significant financial impact.
Anyone with an online presence,
from [hobbyists](https://news.ycombinator.com/item?id=39520776) to [Fortune 500 companies](https://blog.cloudflare.com/ransom-ddos-attacks-target-a-fortune-global-500-company),
can be a target.
Furthermore, they pose a threat to the decentralisation of the Internet,
as only well-resourced companies can afford to operate and protect
the [public goods](./systems/public-goods.md) on which we all depend.

Fortunately,
**although app developers and operators can't _avoid_ DDoS attacks,
they can _greatly minimise_ their impact**.
[Proxies](./mitigations/reverse-proxies.md) from the likes of Akamai and Cloudflare are a good starting point,
but they must be complimented with other [mitigation techniques](./mitigations)
depending on the [type of system](./systems).

## Help wanted

We'd very much appreciate any feedback from companies with vantage points on DDoS attacks,
as well as security researchers.
If we've misrepresented anything, or overlooked details relevant to app developers or operators,
please let us know on [our forum](https://github.com/relaycorp/ddos-report/discussions).
