---
title: How DDoS Attacks Work in 2024
description: "Overview of DDoS attacks and their impact on Internet-connected systems."
next:
  link: /systems
  label: Mitigations by system
---

This living document provides an overview of Distributed Denial of Service (DDoS) attacks,
and is intended for developers and operators of apps connected to the Internet.

## Introduction

A DDoS attack is a type of Denial of Service (DoS) attack.
Essentially, **a DoS attack is an attempt to exhaust the resources of a system, rendering it unavailable to its intended users**.
These resources can include network bandwidth, CPU cycles, memory, disc space, file descriptors, and even the system's budget.

A regular DoS attack originates from one or a handful of IP addresses,
so it's relatively easy to mitigate once detected.
A _distributed_ DoS attack, on the other hand, can originate from thousands of IP addresses,
complicating the process of distinguishing them from legitimate traffic surges and subsequently blocking them.

The ultimate goal of a DDoS attack may not necessarily be to disrupt the target system,
but to distract the operator from a more sinister attack (e.g. data extraction)
or to inflict distress.

In this document we refer to the implementer of a server-side app as the **app developer**,
and anyone that installs and maintains the app as the **operator**.

## Attack vectors

The literature on DDoS attacks typically categorises them by the following _vectors_:

1. **Volumetric attacks**: These involve overwhelming the bandwidth of the targeted server or network with a massive amount of traffic. Examples include [ping floods](https://www.cloudflare.com/en-gb/learning/ddos/ping-icmp-flood-ddos-attack/) and [DNS amplification attacks](https://www.cloudflare.com/en-gb/learning/ddos/dns-amplification-ddos-attack/). The intensity of these attacks is measured in _bits per second_.
2. **Protocol attacks**: These aim to exploit a weakness in the underlying protocol (e.g. IP, TCP). Protocol attacks include [SYN floods](https://www.cloudflare.com/en-gb/learning/ddos/syn-flood-ddos-attack/), [UDP floods](https://www.cloudflare.com/en-gb/learning/ddos/udp-flood-ddos-attack/), and more. Their intensity is measured in _packets per second_.
3. **Application attacks**: These are the most sophisticated type, targeting the server-side app itself. These attacks are executed by sending seemingly legitimate and innocuous data to the server. The intensity of application layer attacks is measured in _messages per second_, or _requests per second_ in the case of HTTP floods.

A **multi-vector attack** combines two or more of the attacks above, either simultaneously or sequentially,
to make detection and mitigation more difficult.

## Target layers

As an app developer or operator, the attack vectors may not provide the most helpful mental model.
Instead,
it may be more helpful to think about this in terms of the [OSI model](https://en.wikipedia.org/wiki/OSI_model) layers:

### Media layers

The bottom three layers (physical, data link, network) are the media layers,
and they handle the physical transmission of data packets across the network.

Whilst all three can be attacked,
only the network (layer 3) is relevant in the context of _Distributed_ DoS attacks,
as attacking the other two layers would require physical access to the network.
Network layer protocols include the Internet Protocol (IP).

The following diagram illustrates a DDoS attack on the network layer:

![Diagram of a Network Layer attack](../../assets/diagrams/modus-operandi/attacks-media-layer.webp)

**An attack on the network layer will seek to overwhelm the bandwidth of the victim's network**,
so only ISPs and hosting providers can protect this layer.
Some may offer firewalls for operators to block offending IP addresses.

### Host layers

The top four layers (transport, session, presentation, application) are the host layers,
and they focus on how applications on the host machines interact and exchange data.
The following diagram illustrates a DDoS attack on a host layer:

![Diagram of an attack on the host layers](../../assets/diagrams/modus-operandi/attacks-host-layers.webp)

Two of these layers are particularly relevant:

- Application layer (layer 7):
  Most developers only implement clients and/or servers on this layer via high-level libraries that abstract away the underlying protocol (e.g. HTTP).
  **An application layer attack will seek to overwhelm the app with a high volume of messages** (e.g. requests).
- Transport layer (layer 4):
  Developers can also work on this layer by creating TCP servers and clients, for example.
  **A transport layer attack will seek to overwhelm the device hosting the app with a high volume of packets**
(or _datagrams_ in the case of UDP).
  
  According to the [Microsoft Digital Defense Report 2023](https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report-2023),
  TCP was the dominant attack vector in 59% of all DDoS attacks.

App developers and operators share the responsibility of protecting the host layers,
and nearly all the [DDoS mitigations](./mitigations) are implemented at this level.

## Delivery methods

Attacks may use one or more of the methods bellow to deliver an attack:

### Reflection

In a reflection attack,
the attacker sends requests to third-party servers with the source IP address spoofed to match the victim's IP address,
causing the servers to send their responses to the victim.

![Diagram of a reflection attack](../../assets/diagrams/modus-operandi/attacks-reflection.webp)

These attacks typically target the network and transport layers,
but [they can also target the application layer](https://geneva.cs.umd.edu/posts/usenix21-weaponizing-censors/).

### Amplification

In an amplification attack,
the attacker sends a small amount of data,
and that causes the victim to send or receive a much larger amount of data.

![Diagram of an amplification attack](../../assets/diagrams/modus-operandi/attacks-amplification.webp)

These attacks typically leverage reflection.
For example, DNS amplification attacks involve sending an `ANY` query to an open DNS resolver,
which with the right domain can cause the server to send a large response to the victim.

### Botnets

A botnet is a network of devices used to carry out DDoS attacks from a broad range of IP addresses.
It usually consists of compromised IoT devices, home routers, and personal computers,
but can also involve virtual machines (VMs) from cloud providers.
Every botnet is managed through a _Command and Control_ (C&C) system.

Building a botnet requires significant time and effort.
Consequently, attackers often rent botnets for specific durations from third-party _booter_ or _stresser_ services.
Interestingly,
a quick search on [DuckDuckGo](https://duckduckgo.com/?q=best+booter&kp=-2) or [Google](https://www.google.com/search?q=best+booter) can unveil numerous such services,
including more elusive ones on the Dark Web.
These services typically accept cryptocurrency and maintain no logs to safeguard their customers.
Some even provide a free tier or trial, without requiring an account.

![Diagram of a botnet-based DDoS attack](../../assets/diagrams/modus-operandi/attacks-botnet.webp)

Botnets are a popular mechanism for delivering DDoS attacks.
The [Nokia Threat Intelligence Report 2023](https://www.nokia.com/networks/security-portfolio/threat-intelligence-report/) states:

> As of 2023, about 90% of all complex, multi-vector DDoS attacks are now based on botnets.
> In addition, we are seeing between 500,000 and 1,000,000 globally distributed, remotely controlled IoT hosts or cloud server instances active on a daily basis,
> generating more than 40% of all DDoS traffic.

Manufacturers and operators often overlook IoT device security, making them prime targets for attacks.
The [Microsoft Digital Defense Report 2023](https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report-2023) highlights:

> More than 50 percent of devices use firmware versions exposing them to more than 10 CVEs
> even though firmware significantly reducing exploitable CVEs has been available for more than 10 years.

Meanwhile,
VM-based botnets have been gaining popularity in recent years,
as they offer superior connectivity compared to devices on residential networks.
The [Cloudflare DDoS threat report for 2023 Q3](https://blog.cloudflare.com/ddos-threat-report-2023-q3) notes:

> As we’ve seen in this campaign and previous ones,
> botnets that leverage cloud computing platforms and exploit HTTP/2 are able to generate up to **x5,000** more force per botnet node.
> This allowed them to launch hyper-volumetric DDoS attacks with a small botnet ranging 5-20 thousand nodes alone.
> To put that into perspective, in the past,
> IoT based botnets consisted of fleets of millions of nodes and barely managed to reach a few million requests per second.

## Duration

DDoS attacks can range from a few seconds to several weeks, or more.
According to the [Cloudflare DDoS threat report for 2023 Q4](https://blog.cloudflare.com/ddos-threat-report-2023-q4),
91% of attacks ended within 10 minutes,
and 2% of network-layer DDoS attacks lasted more than an hour.
The Microsoft Azure team found that [26% of attacks lasted 1–2 minutes in 2022](https://www.microsoft.com/en-us/security/blog/2023/02/21/2022-in-review-ddos-attack-trends-and-insights/).

Whilst one minute may seem like a short time,
it can be enough to disrupt a service or cause financial damage,
especially when the victim relies on metered cloud resources.
For reference,
[US organisations lose an average of $6,130/minute of downtime caused by a DDoS attack](https://www.radware.com/multi-cloud-report-2023/).

## Emerging threats

The landscape of DDoS attacks is constantly evolving.
The following are the trends that deserve special attention:

### Improving Internet infrastructure

As [more people come online](https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx),
and residential and mobile networks get faster (e.g. 5G, fibre),
the potential for larger DDoS attacks increases.

### Increasing device resources

As devices, such as smartphones and laptops, get better CPUs and more storage,
they become more capable of reducing the effectiveness of certain DDoS mitigation mechanisms,
like [cryptographic challenges](./mitigations/crypto-challenges.md).

### Expanding IoT botnets

There are an estimated 15 billion IoT devices connected to the Internet in 2024,
with projections suggesting this number will double by 2030,
according to [Trending Topics](https://explodingtopics.com/blog/number-of-iot-devices).
This expansion raises significant security concerns,
considering the historically lax security of IoT devices.

However, there is cause for optimism.
Global legislative bodies have been increasingly focusing on IoT security,
enacting laws like California's SB-327 and the UK's Product Security and Telecommunications Infrastructure (PSTI) Bill.
These laws aim to hold manufacturers accountable for device security,
including measures as stringent as prohibiting default passwords.

### Artificial Intelligence

AI deserves attention for two reasons:

- Proprietary Large Language Models (LLMs) like GPT-4 have demonstrated the capability to solve CAPTCHAs,
  although this currently requires [jailbreaking](https://learnprompting.org/docs/prompt_hacking/jailbreaking).
  As open-source LLMs advance, attackers might leverage them to bypass CAPTCHAs on a large scale.
- Generative AI can produce botnet traffic devoid of identifiable patterns,
  challenging conventional mitigation techniques such as _fingerprinting_.
  This approach depends on analysing traffic to detect consistent patterns (e.g. HTTP headers, timing).

## Conclusion

DDoS attacks consistently threaten online systems, evolving with technology.
A continuous, layered defence is crucial for protecting applications and infrastructure.
Developers and operators must work together to fortify all network layers against these threats.

Whilst avoiding or stopping DDoS attacks may not be possible,
their impact can be greatly minimised.
Understanding attack vectors, delivery methods and new threats
helps in implementing preemptive [mitigation techniques](./mitigations) to reduce impact.

## Further reading

We recommend the following reports to anyone interested in learning more about DDoS attacks:

- [DDoS Threat Report for 2023 Q4](https://blog.cloudflare.com/ddos-threat-report-2023-q4) by Cloudflare.
- [DDoS Threat Landscape Report 2023](https://www.imperva.com/resources/resource-library/reports/ddos-threat-landscape-report-2023/) by Imperva.
- [Digital Defense Report 2023](https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report-2023) by Microsoft.
- [Threat Intelligence Report 2023](https://www.nokia.com/networks/security-portfolio/threat-intelligence-report/) by Nokia.

We also recommend the following dashboards for understanding the current state of DDoS attacks:

- [Security and Attacks](https://radar.cloudflare.com/security-and-attacks) on the Cloudflare Radar.
- [Reputation Statistics](https://www.spamhaus.org/reputation-statistics/countries/exploit/) by the Spamhaus Project.
