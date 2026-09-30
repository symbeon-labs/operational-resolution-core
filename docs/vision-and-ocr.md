# Vision and OCR

Vision and OCR are observation producers inside ORC.

They are **not the resolution layer** and are not the source of truth.

## Position in the architecture

```
PHYSICAL PRODUCT
      ↓
IMAGE / CAMERA
      ↓
VISION / OCR / BARCODE
      ↓
OBSERVATION
      ↓
ORC RESOLUTION
      ↓
PRODUCT ENTITY
```

## Provider-neutral contract

A vision observation may contain:

- reference to the captured image;
- source information;
- model information, when applicable;
- detected objects;
- extracted text;
- observed identifiers;
- observed attributes;
- operational context.

The contract intentionally does not require a specific model provider.

## Example

A model may observe:

```
image
  ↓
Product X
500 ml
EAN 789000000001
```

The ORC records these as observations.

It does not automatically conclude:

> This image is Product Entity 001.

That conclusion belongs to resolution.

## Confidence

Vision-derived confidence is preserved as metadata on the observation.

It is not treated as an ORC truth score.

A confidence value from a model answers a model-specific question such as:

> How confident was this model in this detection?

It does not automatically answer:

> How certain is ORC that this is the correct entity?

Those are different semantics.

## Deterministic priority

The intended first-pass pipeline is:

```
QR / EAN / barcode
        ↓
OCR
        ↓
visual recognition
        ↓
resolution
```

The exact ordering remains experimental.

## Model independence

ORC should work without a vision model.

Different vision/OCR systems should be replaceable if they produce compatible observations.

This keeps intelligence pluggable and prevents the semantic core from becoming dependent on one model, vendor or inference strategy.
