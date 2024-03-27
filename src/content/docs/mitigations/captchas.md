---
title: CAPTCHAs
sidebar:
  order: 9
  badge:
    text: Draft
    variant: caution
---

**A CAPTCHA is a challenge-response test to determine whether a user is human**.
Although not as effective as they once were at mitigating [application layer attacks](../overview.md#application-attacks) by [botnets](../overview.md#botnets),
CAPTCHAs can still make such attacks more challenging and expensive to the attacker.

Attackers can build the capability to solve CAPTCHAs in-house or use [third-party services](https://www.google.com/search?q=CAPTCHA+solving+service).
Either way,
this is possible with the use of Machine Learning and/or low-paid workers.
[Large Language Models (LLMs)](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/) can solve CAPTCHAs too,
but not at scale yet.

Because they still pose a barrier to attackers,
CAPTCHAs may still be worth using when the [threat score](./threat-scoring.md) of a client is deemed high.
[Cloudflare Turnstile uses this approach](https://developers.cloudflare.com/turnstile/).

## Turnkey solutions

- [hCaptcha](https://www.hcaptcha.com/).
- [reCAPTCHA](https://www.google.com/recaptcha/about/).

## See also

- [Cryptographic challenges](./crypto-challenges.md).
