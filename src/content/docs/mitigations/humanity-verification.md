---
title: Humanity verification
sidebar:
  order: 9
  badge:
    text: Draft
    variant: caution
---

**Apps for human users should mitigate [application layer attacks](../overview.md#application-attacks)
by verifying whether a user is likely to be human**.
Such tests can be run early on in the user journey,
or deferred until the user performs an action that would be expensive or risky to process.

Telling humans and bots apart is a difficult problem that involves trade-offs
between security, privacy, usability, and accessibility,
so no method is 100% accurate as a result.
Nonetheless,
tests such as the ones below are challenging and costly to defeat at scale,
and can therefore serve as proxies for how likely a user is to be human.

## CAPTCHAs

**A CAPTCHA is a challenge-response test to determine whether a user is human**.
Although not as effective as they once were,
and despite the accessibility and usability issues they pose,
CAPTCHAs still make such attacks more challenging and expensive to the attacker.

Attackers can build the capability to solve CAPTCHAs in-house or use [third-party services](https://www.google.com/search?q=CAPTCHA+solving+service).
Either way,
this is possible with the use of Machine Learning and/or low-paid workers.
[Large Language Models (LLMs)](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/) can solve CAPTCHAs too,
but not at scale yet.

Turnkey solutions include:

- [Arkose MatchKey](https://www.arkoselabs.com/arkose-matchkey/).
- [Google reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display).
- [GeeTest Adaptive CAPTCHA](https://www.geetest.com/en/adaptive-captcha).
- [hCaptcha](https://www.hcaptcha.com/).

A good indicator of the effectiveness of solution is the pricing quoted by CAPTCHA solving services --
the more expensive it is, the more effective the CAPTCHA is.

## Environment and behaviour analysis

Some solutions use a combination of signals to determine whether a user is human without any user interaction,
except in the most suspicious cases where the user may be asked to click or tap a checkbox.
These signals include [IP reputation](./client-reputation.md),
operating system or browser fingerprinting,
and the user's interaction with the app.
The output of the test is a score that indicates the likelihood of the user being human and not malicious.

Turnkey solutions include:

- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/), which only works on the Web and also uses [cryptographic challenges](./crypto-challenges.md).
- [GeeTest OneTap](https://www.geetest.com/en/geetest-onetap), which also uses [cryptographic challenges](./crypto-challenges.md).
- [Google reCAPTCHA v3](https://www.google.com/recaptcha/about/), which poses [significant privacy concerns](https://www.fastcompany.com/90369697/googles-new-recaptcha-has-a-dark-side).

Like CAPTCHAs,
these too can be defeated by CAPTCHA solving services.

## Device attestation

TPM attestation theoretically possible, but very challenging to do in practice.

https://developer.apple.com/documentation/devicecheck

### Private Access Tokens (PATs)

HTTP only.

- https://developer.apple.com/news/?id=huqjyh7k
- https://developer.apple.com/videos/play/wwdc2022/10077/
- https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens
- https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens
- Concerns:
  - https://educatedguesswork.org/posts/private-access-tokens/

## User presence tests

Also, something custom with app attestation, device attestation and biometrics APIs (e.g. on Android)

https://betterappsec.com/building-a-webauthn-click-farm-are-captchas-obsolete-bfab07bb798c

### Cryptographic Attestation of Personhood (CAP)

- https://developers.cloudflare.com/fundamentals/reference/cryptographic-personhood/
- https://blog.cloudflare.com/cap-expands-support/

## Proof of Personhood

The emerging field of **Proof of Personhood** aims to improve
accuracy whilst introducing unacceptable compromises.

The field is promising, but plagued by dodgy Blockchain projects.
OK for use in smart contracts.

- [BrightID](https://www.brightid.org/).
- [Civic Pass](https://www.civic.com/).
- [Proof of Humanity](https://www.proofofhumanity.id/).
- [World Id](https://worldcoin.org/world-id) (Worldcoin).

No need for Blockchain, no need for token. Alternatives: PKI with certificate transparency, or at least solve the DDoS problem with low-tech solutions like better KYC from ISPs and cybersecurity regulations.

## Other considerations

- Risks of attestation
  - https://httptoolkit.com/blog/apple-private-access-tokens-attestation/
  - https://gabrielsieben.tech/2022/07/29/remote-assertion-is-coming-back-how-much-freedom-will-it-take/
  - https://arstechnica.com/gadgets/2023/07/googles-web-integrity-api-sounds-like-drm-for-the-web/

## See also

- [Cryptographic challenges](./crypto-challenges.md).
- [Client reputation scoring](./client-reputation.md), which could take the signals from humanity verification as input.
- [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) by the W3C.
