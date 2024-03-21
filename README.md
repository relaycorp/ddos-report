# The DDoS Report

This is the Web site for the DDoS Report,
a guide to DDoS mitigation for app developers and operators.

## Tech stack

- Astro with the Starlight theme.
- Tailwind CSS with the DaisyUI plugin.

## Conventions

- British English, excluding Oxford spelling (e.g. "organize"), for consistency. Oxford comma preferred.
- "Internet" is capitalised when referring to the global network of networks. Otherwise, it's lowercase (e.g. "the internet layer").

## AI prompts

### Proofreading by LLMs

```
Analyse the attached document, and then do the following:

1. Fact check it, flagging inaccuracies and ambiguities. Don't report anything you consider accurate, unless you think additional information is needed.
2. Identify important points I missed, that are relevant to app developers and operators.
3. Assess how easy/difficult the document is to follow, assuming the readers are average developers and operators, with no advanced networking background.
```

## Diagrams for the overview document

The [Draw.io](https://www.drawio.com/) file [`attacks.drawio`](./src/assets/diagrams/attacks.drawio) contains all the diagrams.

The diagram pages should be exported as follows:

- Format: SVG.
- Zoom: 100%.
- Border width: 10.
- Size: Diagram.
- Transparent background: No.
- Appearance: Light.
- Shadow: No.
- Include a copy of my diagram: No.
- Embed images: Yes.
- Embed fonts: Yes.

The illustrations in the diagrams where generated with Midjourney,
using prompts such as:

```
Child's crayon drawing of a single server, Ethernet cables, LEDs, plain background, minimalist --no photo, photorealistic, human --style raw --stylize 0
```
