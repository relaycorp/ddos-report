# The DDoS Report

## Tech stack

- Astro with the Starlight theme.
- Tailwind CSS with the DaisyUI plugin.

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

- Format: WebP.
- Zoom: 150%.
- Border width: 10.
- Appearance: Light.
- Shadow: No.
- Grid: No.

The illustrations in the diagrams where generated with Midjourney,
using prompts such as:

```
Child's crayon drawing of a single server, Ethernet cables, LEDs, plain background, minimalist --no photo, photorealistic, human --style raw --stylize 0
```
