---
title: Threat scoring
---

# Threat scoring

- Global: the load of the overall system and/or how likely it is to be under attack.
- Client: how likely the client is to be malicious.
  - Factors (examples):
    - Rate of requests from the same client, if authenticated.
    - Rate of requests from the same IP address, regardless of clients.
    - Rate of invalid requests from the same client and/or IP address.
