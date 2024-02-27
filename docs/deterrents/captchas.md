---
title: CAPTCHAs
sidebar_position: 9
---

# CAPTCHAs

## Advantages

- Expensive for attackers to abuse at scale.

## Disadvantages

- [Proprietary LLMs can already solve CAPTCHAs](https://arstechnica.com/information-technology/2023/10/sob-story-about-dead-grandma-tricks-microsoft-ai-into-solving-captcha/), but [jailbreaking](https://learnprompting.org/docs/prompt_hacking/jailbreaking) is currently necessary. It's probably a matter of time until open LLMs catch up and attackers remove the guardrails. [AI-resistant CAPTCHAs do not exist](https://twitter.com/gustavonarea/status/1762464826754757008).
- Accessibility issues.

## Recommendations

- Only force clients to solve CAPTCHAs when their [threat score](./threat-scoring.md) is high.

## Turnkey solutions

- [reCAPTCHA](https://www.google.com/recaptcha/about/)
- [hCaptcha](https://www.hcaptcha.com/)
