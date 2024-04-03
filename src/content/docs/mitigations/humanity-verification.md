---
title: Humanity verification
sidebar:
  order: 9
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

Turnkey CAPTCHA products include:

- [Arkose MatchKey](https://www.arkoselabs.com/arkose-matchkey/).
- [Google reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display).
- [GeeTest Adaptive CAPTCHA](https://www.geetest.com/en/adaptive-captcha).
- [hCaptcha](https://www.hcaptcha.com/).

Pricing provided by CAPTCHA solving services is a reliable indicator of the CAPTCHA's efficacy;
the more it costs to solve, the more effective the CAPTCHA is likely to be.

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

## Remote attestation

This is a process by which a device cryptographically
proves its identity, hardware configuration, software integrity, and security posture,
to a remote verifier.
Remote attestation leverages embedded Hardware Security Modules (HSMs) like the
[Trusted Platform Module (TPM)](https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/) or
[Apple's Secure Enclave](https://support.apple.com/en-gb/guide/security/sec59b0b31ff/web),
and its availability varies by system:

- Android: [Play Integrity API](https://developer.android.com/google/play/integrity/overview).
- Apple: [DeviceCheck services](https://developer.apple.com/documentation/devicecheck).
- No other mainstream system offers a turnkey solution, but partial solutions could potentially be built using [TPM attestation](https://community.infineon.com/t5/Blogs/TPM-remote-attestation-How-can-I-trust-you/ba-p/452729) directly.

**Remote attestation can be used to verify that the client is running on a genuine device designed for humans**
(e.g. laptop, smartphone),
as opposed to a headless computer (e.g. server, router),
which can be a proxy for the user being human.

It should be noted that
[the use of remote attestation is controversial](https://gabrielsieben.tech/2022/07/29/remote-assertion-is-coming-back-how-much-freedom-will-it-take/),
as it has the potential to limit competition and innovation,
and degrade the user experience of those using incompatible systems (e.g. Linux).

See also [app attestation](./app-attestation.md).

### Private Access Tokens

**Private Access Tokens (PATs) is a privacy-preserving protocol for remote attestation on the Web**.
It's based on Privacy Pass,
a more generic protocol for replacing CAPTCHAs on the Internet (not just the Web).

PATs are only [supported by recent Apple devices](https://developer.apple.com/news/?id=huqjyh7k);
neither Google nor Microsoft have publicly expressed any interest in the protocol as of early 2024.
They're also supported by [reverse proxies](./reverse-proxies.md)
(i.e. [Cloudflare](https://blog.cloudflare.com/eliminating-captchas-on-iphones-and-macs-using-new-standard) and
[Fastly](https://www.fastly.com/blog/private-access-tokens-stepping-into-the-privacy-respecting-captcha-less)),
and [hCaptcha](https://www.hcaptcha.com/post/announcing-support-for-private-access-tokens).

Like remote attestation in general,
[PATs has been criticised](https://educatedguesswork.org/posts/private-access-tokens/)
for its potential to limit competition and innovation,
and degrade the user experience of those using incompatible systems.

## User presence tests

**User presence tests are challenges that require the user to demonstrate their presence**
by physically interacting with a secure hardware device,
such as a Yubikey or the fingerprint reader on a smartphone.
This may be as close as we can get to verifying that a human is performing a particular action.

To defeat these tests,
an attacker would need to operate a
[click farm](https://edition.cnn.com/style/vietnam-farms-jack-latham-beggars-honey/index.html)
with many such devices,
and automate their use through low-paid workers or robots.
This is expensive and difficult to scale;
especially when the number of operations performed in a given time frame is limited.

### Cryptographic Attestation of Personhood

The [Cryptographic Attestation of Personhood (CAP)](https://research.cloudflare.com/projects/application-privacy/cap/)
is a novel, privacy-preserving, user presence test,
and the only such protocol to be operational as of this writing.
It leverages the [WebAuthn standard](https://webauthn.guide/),
so it's only available in Web browsers.

CAP is currently only supported by [Cloudflare](https://blog.cloudflare.com/cap-expands-support/),
but they've made the core of the protocol available as
[an open source library](https://github.com/cloudflare/zkp-ecdsa).

A proof of concept of
[a click farm to defeat CAP](https://betterappsec.com/building-a-webauthn-click-farm-are-captchas-obsolete-bfab07bb798c)
has been documented,
highlighting the difficulty of scaling such an operation.

### User presence tests in native apps

There's currently no turnkey solution for user presence tests in native apps.
However,
it should be possible to create a version of [CAP](#cryptographic-attestation-of-personhood)
that doesn't use WebAuthn.

## Proof of Personhood

Proof of Personhood (PoP) is, in theory, the ultimate form of humanity verification.
In practice,
the reliability of each solution is determined by the quality of the signals used
(e.g. biometrics, government-issued id documents, social connections).

PoP is simply mentioned here for completeness,
but **we strongly advise against using any PoP solution to mitigate DDoS attacks**.
Whilst promising,
this field isn't mature enough,
lacks any meaningful adoption,
and [its flagship solution poses significant privacy concerns](https://techcrunch.com/2024/03/11/worldcoin-fails-to-get-injunction-against-spains-privacy-suspension/).

## See also

- [Cryptographic challenges](./crypto-challenges.md).
- [Client reputation scoring](./client-reputation.md), which could take the signals from humanity verification as input.
- [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) by the W3C.
