---
title: Cryptographic challenges
sidebar:
  order: 4
  badge:
    text: Draft
    variant: caution
---

- PoW or PoS alone might not be enough if the adversary has devices that are more powerful than the average user's.
- CPU-, memory-, and storage-bound protocols are more resistant to ASICs and FPGAs.

Undoubtedly a major and [potentially unpopular](https://github.com/mastodon/mastodon/issues/29273#issuecomment-1954202970) undertaking if the protocol is already widely used, but [not impossible as the Tor project proved](https://blog.torproject.org/introducing-proof-of-work-defense-for-onion-services/).

## Recommended protocols

### Proof of Work

- [Equi-X](https://github.com/tevador/equix).

## Experimental protocols

### Verifiable Delay Functions (VDFs)

### Proof of Space (PoS)

### Proof of Spacetime (PoSt)

### Guided tour puzzle protocol

## Inadvisable protocols

- Hashcash. Uses SHA-1.
- Client Puzzle Protocol. Verification is expensive compared to other PoW protocols.

## Open questions

If you know the answer to any of these questions,
please let us know on [our forum](https://github.com/relaycorp/ddos-report/discussions).

- What percentage of bots (in botnets) are compromised IoT devices? Presumably, this will vary over time and by country.
- What are the different types of IoT devices that are used in DDoS attacks, and their respective share? Presumably, this will vary over time and by country.

Knowing the answers to the questions above would help us understand how to configure these challenges.
For example, we know that IoT devices are resource-constrained,
so we could leverage a Proof of Space protocol,
requiring an amount of storage that is feasible for a smartphone but not for an IoT device.
