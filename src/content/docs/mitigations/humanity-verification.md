---
title: Humanity verification
sidebar:
  order: 9
  badge:
    text: Draft
    variant: caution
---

**Apps designed for human users can protect against [application attacks](../overview.md#application-attacks)
by verifying the likelihood of a user being human**.
This verification can occur early in the user journey or be delayed
until the user attempts an action that is costly to process or sensitive in nature.

Telling humans and bots apart is a difficult problem that requires balancing security, privacy, usability, and accessibility.
No method is 100% accurate, but,
**depending on your threat model,
the following tests can be sufficiently difficult and expensive
to be effective indicators of a user's likelihood of being human**.

## CAPTCHAs

**A CAPTCHA is a challenge-response test to determine whether a user is human**.
Although not as effective as they once were,
and despite the accessibility and usability issues they pose,
CAPTCHAs still make such attacks more challenging and expensive for the attacker.

Attackers can build the capability to solve CAPTCHAs in-house
or use a [CAPTCHA solving service](https://www.google.com/search?q=CAPTCHA+solving+service).
Either way,
this is possible with the use of Machine Learning and/or low-paid workers.
[Large Language Models (LLMs) can solve CAPTCHAs](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/) too,
but not at scale yet.

Turnkey solutions include:

- [Arkose MatchKey](https://www.arkoselabs.com/arkose-matchkey/).
- [Google reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display).
- [GeeTest Adaptive CAPTCHA](https://www.geetest.com/en/adaptive-captcha).
- [hCaptcha](https://www.hcaptcha.com/).

Pricing provided by CAPTCHA solving services is a reliable indicator of the solution's efficacy;
the more costly the solution, the more effective the CAPTCHA.

## Environment and behaviour analysis

Some solutions use a combination of signals to determine whether a user is human without any user interaction,
except in the most suspicious cases where the user may be asked to click or tap a checkbox.
These signals include [IP reputation](./client-reputation.md),
operating system or browser fingerprinting,
and the user's interaction with the app.
The output of the test is a score that indicates the likelihood of the user being human and not malicious.

Turnkey solutions include:

- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/), which requires the [application layer proxy](./reverse-proxies.md#application-layer-proxy) from Cloudflare and therefore only works in Web browsers. It also uses [Private Access Tokens](#private-access-tokens) and [cryptographic challenges](./crypto-challenges.md).
- [GeeTest OneTap](https://www.geetest.com/en/geetest-onetap), which also uses [cryptographic challenges](./crypto-challenges.md).
- [Google reCAPTCHA v3](https://www.google.com/recaptcha/about/), which poses [significant privacy concerns](https://www.fastcompany.com/90369697/googles-new-recaptcha-has-a-dark-side).

Like CAPTCHAs,
these too can be defeated by CAPTCHA solving services.

## Device attestation

Device attestation is a process by which a device cryptographically
proves its identity, hardware configuration, software integrity, and security posture,
to a remote verifier.
**In DDoS mitigation,
it can be used to verify that the client is running on a legitimate device designed for humans** (e.g. laptop, smartphone),
as opposed to a headless computer (e.g. server, router, IoT device).

This process leverages embedded Hardware Security Modules (HSMs) like the
[Trusted Platform Module (TPM)](https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/) or
[Apple's Secure Enclave](https://support.apple.com/en-gb/guide/security/sec59b0b31ff/web).
The availability of this technology varies by system:

- Apple devices offer the [DeviceCheck interface](https://developer.apple.com/documentation/devicecheck).
- Android devices offer the [Play Integrity API](https://developer.android.com/google/play/integrity/overview).
- No other mainstream system offers a turnkey solution, but partial solutions could potentially be built using [TPM attestation](https://community.infineon.com/t5/Blogs/TPM-remote-attestation-How-can-I-trust-you/ba-p/452729) directly.

It should be noted that
[the use of remote attestation is controversial](https://gabrielsieben.tech/2022/07/29/remote-assertion-is-coming-back-how-much-freedom-will-it-take/),
as it has the potential to degrade the user experience of those using incompatible systems
(e.g. Linux).

### Private Access Tokens

**Private Access Tokens (PATs) is a privacy-preserving protocol for device attestation on the Web**.
It's based on Privacy Pass,
a more generic protocol for replacing CAPTCHAs on the Internet (not just the Web).

PATs are only [supported by recent Apple devices](https://developer.apple.com/news/?id=huqjyh7k);
neither Google nor Microsoft have publicly expressed any interest in the protocol as of this writing.
They're also supported by [reverse proxies](./reverse-proxies.md)
(i.e. [Cloudflare](https://blog.cloudflare.com/eliminating-captchas-on-iphones-and-macs-using-new-standard) and
[Fastly](https://www.fastly.com/blog/private-access-tokens-stepping-into-the-privacy-respecting-captcha-less)),
and [hCaptcha](https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens).

Like remote attestation in general,
[PATs has been criticised for its potential to degrade the user experience of those
using incompatible systems](https://educatedguesswork.org/posts/private-access-tokens/).

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

## See also

- [Cryptographic challenges](./crypto-challenges.md).
- [Client reputation scoring](./client-reputation.md), which could take the signals from humanity verification as input.
- [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) by the W3C.
