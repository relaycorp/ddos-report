---
title: Humanity verification
sidebar:
  order: 9
  badge:
    text: Draft
    variant: caution
---

Note that [we advise against Proof of Personhood protocols](inadvisable.md#proof-of-personhood).

## CAPTCHAs

**A CAPTCHA is a challenge-response test to determine whether a user is human**.
Although not as effective as they once were at mitigating [application layer attacks](../overview.md#application-attacks) by [botnets](../overview.md#botnets),
CAPTCHAs can still make such attacks more challenging and expensive to the attacker.

Attackers can build the capability to solve CAPTCHAs in-house or use [third-party services](https://www.google.com/search?q=CAPTCHA+solving+service).
Either way,
this is possible with the use of Machine Learning and/or low-paid workers.
[Large Language Models (LLMs)](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/) can solve CAPTCHAs too,
but not at scale yet.

Because they still pose a barrier to attackers,
CAPTCHAs may still be worth using when the [threat score](./client-reputation) of a client is deemed high.

### Other considerations

- Accessibility.
- https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens

### Turnkey solutions

- [Arkose MatchKey](https://www.arkoselabs.com/arkose-matchkey/).
- [hCaptcha](https://www.hcaptcha.com/).

### Alternatives

- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).

## Behaviour analysis

- [Google reCAPTCHA](https://www.google.com/recaptcha/about/).
  - [Poor privacy](https://www.fastcompany.com/90369697/googles-new-recaptcha-has-a-dark-side), depending on the provider.

## Device attestation

TPM attestation theoretically possible, but very challenging to do in practice.

https://developer.apple.com/documentation/devicecheck

### Private Access Tokens (PATs)

HTTP only.

- https://developer.apple.com/news/?id=huqjyh7k
- https://developer.apple.com/videos/play/wwdc2022/10077/
- https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens
- Concerns:
  - https://educatedguesswork.org/posts/private-access-tokens/

## Hardware attestation

- https://developers.cloudflare.com/fundamentals/reference/cryptographic-personhood/
- https://blog.cloudflare.com/cap-expands-support/

## Other considerations

- Risks of attestation
  - https://httptoolkit.com/blog/apple-private-access-tokens-attestation/
  - https://gabrielsieben.tech/2022/07/29/remote-assertion-is-coming-back-how-much-freedom-will-it-take/
  - https://arstechnica.com/gadgets/2023/07/googles-web-integrity-api-sounds-like-drm-for-the-web/

## See also

- [Cryptographic challenges](./crypto-challenges.md).
