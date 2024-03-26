---
title: App attestation
sidebar:
  order: 7
---

App attestation is a technique to verify that a client app is genuine and hasn't been tampered with.
It's particularly useful when you get the first ever message from a client,
as you can't anticipate how it's going to behave.

Unfortunately,
app attestation is only supported by many, but not all,
[Android](https://developer.android.com/google/play/integrity/overview)
and [Apple](https://developer.apple.com/documentation/devicecheck/establishing-your-app-s-integrity) devices.
Nevertheless,
when available,
it could be used as one of the factors in [threat scoring](./threat-scoring.md).
