---
title: App attestation
sidebar:
  order: 7
---

**App attestation is used to verify that a client app is genuine and hasn't been tampered with**.
For example,
Google can certify that a user is running an unmodified version of an Android app installed
from the Google Play Store.

This form of attestation can be a signal in [client reputation scoring](client-reputation.md).
In particular, it can be used to tell whether a new client,
for which there is no reputation data,
is likely to comply with rate limits.

App attestation is only supported on [Android](https://developer.android.com/google/play/integrity/overview) and [Apple](https://developer.apple.com/documentation/devicecheck/establishing-your-app-s-integrity) devices,
but not all devices support it.

## See also

- [Device attestation](./humanity-verification.md#device-attestation).
- [Privacy Access Tokens](./humanity-verification.md#private-access-tokens).
