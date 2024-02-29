---
title: Cryptographic challenges
sidebar_position: 4
---

# Cryptographic challenges

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
