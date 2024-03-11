---
title: How DDoS Attacks Work in 2024
description: "Overview of DDoS attacks and their impact on Internet-connected systems."
next:
  link: /systems
  label: Mitigations by system
---

_**Distributed Denial of Service (DDoS) attacks can disrupt the target systems and are notoriously difficult to mitigate**.
This living document provides an overview of DDoS attacks,
and is intended for developers and operators of apps connected to the Internet._

## Introduction

A DDoS attack is a type of Denial of Service (DoS) attack.
Essentially, **a DoS attack is an attempt to exhaust the resources of a system, rendering it unavailable to its intended users**.
These resources can include network bandwidth, CPU cycles, memory, disc space, file descriptors, and even the system's budget.

A regular DoS attack originates from one or a handful of IP addresses,
so it's relatively easy to mitigate once detected.
A _distributed_ DoS attack, on the other hand, can originate from thousands of IP addresses,
complicating the process of distinguishing them from legitimate traffic surges and subsequently blocking them.

The ultimate goal of a DDoS attack may not necessarily be to disrupt the target system,
but to distract the operator from a more sinister attack or to inflict distress.

## Types of DDoS attacks

Attacks are typically categorised as one of the following types:

1. **Volumetric attacks**: These involve overwhelming the bandwidth of the targeted server or network with a massive amount of traffic. Examples include [ping floods](https://www.cloudflare.com/en-gb/learning/ddos/ping-icmp-flood-ddos-attack/) and [DNS amplification attacks](https://www.cloudflare.com/en-gb/learning/ddos/dns-amplification-ddos-attack/). The intensity of these attacks is measured in bits per second (bps).
2. **Protocol attacks**: These aim to exploit a weakness in the underlying protocol (e.g. IP, TCP). Protocol attacks include [SYN floods](https://www.cloudflare.com/en-gb/learning/ddos/syn-flood-ddos-attack/), [UDP floods](https://www.cloudflare.com/en-gb/learning/ddos/udp-flood-ddos-attack/), and more. Their intensity is measured in packets per second (pps).
3. **Application attacks**: These are the most sophisticated type, targeting the server-side app itself. These attacks are executed by sending seemingly legitimate and innocuous data to the server. The intensity of application layer attacks is measured in requests per second (rps) in the case of HTTP floods.

A **multi-vector attack** combines two or more of the attacks above, either simultaneously or sequentially,
to make detection and mitigation more difficult.

If the attack exploits a weakness in a protocol to trick legitimate third-party services into participating,
it can be further categorised into two types:
**reflection attack**, when a response from the third party is redirected to the intended victim, or an **amplification attack**, characterized by a significant increase in the volume of data directed towards the victim.

NEED A BETTER SWEGWAY INTO THE NEXT SECTION

## How DDoS attacks are launched

The attacker bootstraps the network of devices that will be used to launch the attack,
which typically involves compromising IoT devices, home routers, and personal computers,
but can also involve hiring virtual machines from cloud providers.
In DDoS parlance, such networks are called _botnets_ and the devices that make up the botnet are called _bots_.
Having established the botnet, the attacker uses a _Command and Control_ (C&C) system to orchestrate it.

Given the time and effort it takes to build a botnet,
the attacker may use a third-party _booter_ or _stresser_ service to rent a botnet for a period of time.
Perhaps surprisingly,
a simple [DuckDuckGo](https://duckduckgo.com/?q=best+booter&kp=-2) or [Google search](https://www.google.com/search?q=best+booter) will reveal many such services,
with more available on the Dark Web.
Many accept cryptocurrency payments and won't keep any logs to protect their clients.
Some offer a free tier, and even a free trial without creating an account.

## Denial of Wallet

Static websites: https://news.ycombinator.com/item?id=39520776

## How DDoS attacks can be mitigated

Unfortunately, there's no definitive way to _avoid_ DDoS attacks,
but there are many ways to [mitigate](mitigationsndex.md) their impact [depending on the nature of the target system](systemsndex.md).

Foo [^1].

## Emerging threats

- Expanding IoT Botnets: More compromised devices than ever
- AI solving CAPTCHAs: Bypassing human verification systems
- Increased bandwidth and increased Internet user base worldwide.

## Further reading

- [DDoS Threat Landscape Report 2023](https://www.imperva.com/resources/resource-library/reports/ddos-threat-landscape-report-2023/) by Imperva.

[^1]: Microsoft Digital Defense Report 2023
