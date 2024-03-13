---
title: Threat scoring
sidebar:
  order: 10
  badge:
    text: Draft
    variant: caution
---

Client-aware behaviour analysis to control other mitigations (e.g., [rate limiting](rate-limiting.md), [crypto challenges](crypto-challenges.md)) per user and/or tenant.

- Global: the load of the overall system and/or how likely it is to be under attack.
- Reputation system: how likely the client is to be malicious.
  - Factors (examples):
    - Rate of requests from the same client, if authenticated.
    - Rate of requests from the same IP address, regardless of clients.
    - Rate of invalid requests from the same client and/or IP address.
    - The reputation of the client's IP address: https://www.spamhaus.org/ip-reputation/
    - The reputation of the client's ASN: https://www.spamhaus.org/reputation-statistics/networks/exploit/
    - The type of ISP the client is using (e.g., residential, cloud provider).

To account for the Slashdot effect,
read the HTTP `Referer` header and check if the client is coming from a high-traffic website.
If so, check that the landing page is indeed linked to from that high-traffic website.
