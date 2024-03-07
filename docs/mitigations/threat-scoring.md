---
sidebar_position: 10
---

# Threat scoring

Client-aware behaviour analysis to control other mitigations (e.g., [rate limiting](./rate-limiting.md), [crypto challenges](./crypto-challenges.md)) per user and/or tenant.

- Global: the load of the overall system and/or how likely it is to be under attack.
- Reputation system: how likely the client is to be malicious.
  - Factors (examples):
    - Rate of requests from the same client, if authenticated.
    - Rate of requests from the same IP address, regardless of clients.
    - Rate of invalid requests from the same client and/or IP address.
    - The reputation of the client's IP address: https://www.spamhaus.org/ip-reputation/
    - The reputation of the client's ASN: https://www.spamhaus.org/reputation-statistics/networks/exploit/
    - The type of ISP the client is using (e.g., residential, cloud provider).
