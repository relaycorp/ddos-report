---
title: Cryptographic challenges
sidebar:
  order: 4
---

**Cryptographic challenges increase the cost of [application attacks](../overview.md#application-attacks) and slow them down**.
For efficiency and user experience reasons,
the difficulty level of the challenge should vary based on the system load and [client's reputation](./client-reputation.md).

## Proof of Work

A Proof of Work (PoW) protocol requires a client to
complete a series of cryptographic operations to perform a task.
**PoW effectively slows down bots**,
including those that change IP addresses as they get blocked,
with minimal or no impact on legitimate users in most cases.

Turnkey PoW solutions include [ALTCHA](https://altcha.org) and [mCaptcha](https://mcaptcha.org)—both of which offer widgets for websites.
Some [humanity verification services](./humanity-verification.md) integrate PoW challenges as well.

In advanced scenarios where more control over the PoW protocol is needed,
algorithms like [Equi-X](https://github.com/tevador/equix)
([used by Tor](https://blog.torproject.org/introducing-proof-of-work-defense-for-onion-services/)) and
[RandomX](https://www.getmonero.org/resources/moneropedia/randomx.html)
can be integrated.
Additionally,
[HashX](https://github.com/tevador/hashx),
the underlying hashing algorithm in Equi-X,
[can be used to implement a protocol without server-provided challenges](https://github.com/tevador/hashx?tab=readme-ov-file#non-interactive-proof-of-work)
(publicly available data, such as [Drand](https://drand.love/) random numbers, could be used instead).

## Guided Tour Puzzle

The [**Guided Tour Puzzle (GTP) protocol**](https://en.wikipedia.org/wiki/Guided_tour_puzzle_protocol)
leverages PoW to force a client to solve a sequence of challenges iteratively over the network.
This makes the network connection the bottleneck,
which can be more effective in a threat model where the attacker has better hardware than legitimate users.

Currently, the GTP remains theoretical without available implementations or documented deployments
to the best of our knowledge.

## Proof of Space

A Proof of Space (PoS) protocol requires a client to prove that it allocated a certain amount of storage space to perform a task.
By making a client retain a distinct data set for as long as it uses the service,
**PoS can be used in DDoS mitigation to raise the cost to attackers proportionate to the quantity of storage required**.

A sufficiently large storage requirement can prevent compromised IoT devices,
which typically have limited storage,
from storing the necessary data.
This would in turn force the attacker to host the data on their own infrastructure,
thus making the connection a bottleneck in a manner similar to the GTP's approach.

The use of PoS for DDoS mitigation remains largely theoretical,
as there are no readily available implementations besides
[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/),
which only works with Web browsers and whose implementation details are not public.

## Other considerations

- Cryptographic challenges have environmental costs, so they should be used judiciously.
- There can be opposition to challenges like PoW [due to their association with Blockchain technologies](https://github.com/mastodon/mastodon/issues/29273#issuecomment-1954202970).

## See also

- [Client-based rate limiting](rate-limiting.md).
