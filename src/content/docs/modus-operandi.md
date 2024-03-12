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

In this document we refer to the implementer of a server-side app as the **app developer**,
and anyone that installs and maintains the app as the **operator**.

## Attack vectors

The literature on DDoS attacks typically categorises them by the following _vectors_:

1. **Volumetric attacks**: These involve overwhelming the bandwidth of the targeted server or network with a massive amount of traffic. Examples include [ping floods](https://www.cloudflare.com/en-gb/learning/ddos/ping-icmp-flood-ddos-attack/) and [DNS amplification attacks](https://www.cloudflare.com/en-gb/learning/ddos/dns-amplification-ddos-attack/). The intensity of these attacks is measured in bits per second (bps).
2. **Protocol attacks**: These aim to exploit a weakness in the underlying protocol (e.g. IP, TCP). Protocol attacks include [SYN floods](https://www.cloudflare.com/en-gb/learning/ddos/syn-flood-ddos-attack/), [UDP floods](https://www.cloudflare.com/en-gb/learning/ddos/udp-flood-ddos-attack/), and more. Their intensity is measured in packets per second (pps).
3. **Application attacks**: These are the most sophisticated type, targeting the server-side app itself. These attacks are executed by sending seemingly legitimate and innocuous data to the server. The intensity of application layer attacks is measured in requests per second (rps) in the case of HTTP floods.

A **multi-vector attack** combines two or more of the attacks above, either simultaneously or sequentially,
to make detection and mitigation more difficult.

## Attacks by OSI layer

As an app developer or operator, the categorisation above may not provide the most helpful mental model.
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

![Diagram of a Network Layer attack](../../assets/diagrams/modus-operandi/attack-layers-media.svg)

**An attack on the network layer will seek to overwhelm the bandwidth of the victim's network**,
so only ISPs and hosting providers can protect this layer.
Some may offer firewalls for operators to block offending IP addresses.

### Host layers

The top four layers (transport, session, presentation, application) are the host layers,
and they focus on how applications on the host machines interact and exchange data.
The following diagram illustrates a DDoS attack on a host layer:

![Diagram of an attack on the host layers](../../assets/diagrams/modus-operandi/attack-layers-host.svg)

Two of these layers are particularly relevant:

- Layer 7: Most developers only implement clients and/or servers for the **application layer**
via high-level libraries that abstract away the underlying protocol (e.g. HTTP).
**An application layer attack will seek to overwhelm the app with a high volume of messages** (e.g. requests).
- Layer 4: Developers can also work on the **transport layer** (layer 4) by creating TCP servers and clients, for example.
**A transport layer attack will seek to overwhelm the device hosting the app with a high volume of packets**
(or _datagrams_ in the case of UDP).

App developers and operators share the responsibility of protecting the host layers,
and nearly all the [DDoS mitigations](./mitigations) are implemented at this level.
For this reason, we're primarily interested in the host layers.

## Attack delivery methods

### Reflection

In a reflection attack,
the attacker sends a request to third-party servers with the source IP address spoofed to match the victim's IP address,
causing the servers to send their responses to the victim.

![reflection-attack.svg](../../assets/diagrams/modus-operandi/reflection-attack.svg)

These attacks typically target the network and transport layers,
but [they can also target the application layer](https://geneva.cs.umd.edu/posts/usenix21-weaponizing-censors/).

### Amplification

In an amplification attack,
the attacker sends a small amount of data,
and that causes the victim to send or receive a much larger amount of data.

These attacks often leverage reflection as described above.
For example, DNS amplification attacks involve sending an `ANY` query to an open DNS resolver,
which with the right domain can cause the server to send a large response to the victim.

### Botnets

Botnet attacks are the most versatile,
as the attacker can launch any of the attacks above.

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

## Mitigations

Unfortunately, there's no definitive way to _avoid_ DDoS attacks,
but there are many ways to [mitigate](mitigationsndex.md) their impact [depending on the nature of the target system](systemsndex.md).

Foo [^1].

## Emerging threats

### Expanding IoT Botnets

More compromised devices than ever

### Artificial Intelligence

- LLMs able to solve CAPTCHAS
- AI-generated strategies to bypass DDoS mitigations, roughly comparable to https://geneva.cs.umd.edu/.

### Increasing bandwidth

### Increasing device resources

CPU, memory, storage, etc.

### Increasing Internet adoption

### Further reading

- [DDoS Threat Landscape Report 2023](https://www.imperva.com/resources/resource-library/reports/ddos-threat-landscape-report-2023/) by Imperva.

[^1]: Microsoft Digital Defense Report 2023
