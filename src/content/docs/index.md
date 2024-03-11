---
title: The DDoS Report
template: splash
hero:
  tagline: Everything app developers and operators need to know about Distributed Denial of Service (DDoS) attacks.
  image:
    dark: "../../assets/icon-dark.png"
    light: "../../assets/icon-light.png"
  actions:
    - text: Learn how DDoS attacks work
      link: /modus-operandi
      icon: right-arrow
      variant: primary
    - text: Mitigate DDoS attacks
      link: /systems
      icon: right-arrow
      variant: secondary
---

## We're overlooking a major threat

**Anyone with a computer connected to the Internet can launch a DDoS attack today**.
There are many services that allow clients to launch such attacks anonymously for a small fee,
with some even offering free trials.
A quick Google search will reveal a plethora of these services,
so there's no need to go to the _Dark Web_ to find them.

Unsurprisingly,
[**DDoS attacks are on the rise at an alarming rate**](https://www.cybersecuritydive.com/news/ddos-attacks-surge-cloudflare/704011/),
a trend that is expected to worsen with the increase in online populations, global bandwidth, and the proliferation of vulnerable IoT devices.
Soon we won't even be able to distinguish between humans and bots on the Internet,
[thanks to advances in AI](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/).

These attacks not only infringe on our freedom but also have a significant economic impact.
In the United States alone,
[companies suffer an average loss of $6,130 per minute](https://www.securitymagazine.com/articles/100123-downtime-cost-of-an-application-ddos-attack-averages-6130-per-minute)
due to outages caused by these attacks.
Furthermore, they pose a threat to the decentralisation of the Internet,
as only well-resourced companies can afford to operate the [public goods](./systems/public-goods.md) on which we all depend.

We launched The DDoS Report to raise awareness amongst app developers and operators that
[reverse proxies](./mitigations/reverse-proxies.md) from the likes of Akamai and Cloudflare are not the panacea our industry makes them out to be.
Whilst they should certainly be part of our defence strategy,
they should be complimented with other [mitigation techniques](./mitigations) depending on the [type of system](./systems).
