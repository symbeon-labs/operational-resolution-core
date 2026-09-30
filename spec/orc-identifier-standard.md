# ORC Identifier Standard — Draft

Status: **research draft**

## 1. Core principle

> **A QR code is an Identity Reference, not the identity itself.**

The persistent identity belongs to the ORC Entity. A physical marker is one interface through which a device can retrieve or resolve that identity.

## 2. QR payload

The QR should contain a stable, compact reference and should not contain mutable operational state.

Avoid embedding price, current stock, supplier, fiscal state, credentials, personal information, large descriptions or mutable business rules.

Working payload:

~~~text
ORC-P-01JX4RT7K8M2Q9Z6A3F5
~~~

The exact syntax is intentionally not final.

## 3. Human-readable fallback

The label may include a short human-readable identifier:

~~~text
ORC·P·000042
~~~

This is a usability reference and does not need to be the canonical internal entity identifier.

## 4. Label design

Initial visual hypothesis:

~~~text
+----------------------+
|                      |
|         QR           |
|                      |
|     ORC·P·000042     |
|                      |
+----------------------+
~~~

Goals:

- black and white;
- high contrast;
- minimal information;
- no gradients;
- no decorative elements that interfere with the QR;
- sufficient quiet zone;
- thermal-printer compatibility;
- small physical footprint.

## 5. Physical size

No minimum size is established yet.

Initial experimental range:

| Profile | Approximate size | Purpose |
|---|---:|---|
| Micro | 15 × 15 mm | experimental lower bound |
| Mini | 20 × 20 mm | small products |
| Compact | 25 × 25 mm | candidate general-purpose size |
| Standard | 30 × 30 mm | higher reading tolerance |

The actual minimum depends on QR payload length, QR version, error correction, printer resolution, thermal media, print quality, camera, lighting, distance, quiet zone, surface curvature and wear.

The objective is:

> **Minimize physical label size and material waste while preserving reliable machine readability.**

These dimensions are hypotheses, not a finalized standard.

## 6. Material efficiency

The label generator should support configurable width and height, compact payloads, batch printing, reprinting without creating a new identity, templates for different roll widths and printer calibration.

A reprint references the same entity.

## 7. No-label mode

ORC must remain usable without generated labels.

~~~text
IMAGE
  |
OCR / VISION
  |
OBSERVATION
  |
RESOLUTION
  |
PRODUCT ENTITY
~~~

Generated QR labels improve deterministic identification but are optional.

Deployment modes:

**Marker-assisted**

~~~text
QR / EAN / NFC → existing entity → operation
~~~

**Markerless**

~~~text
Image / OCR / vision → candidate entities → resolution → operation
~~~

Both are first-class research paths.

## 8. QR + vision

When both are available, they remain separate inputs.

~~~text
QR
 |
 +---- Identity Reference → candidate entity

IMAGE
 |
 +---- OCR
 +---- visual recognition
 +---- visible identifiers
        |
        v
    Observations
        |
        v
      ORC
        |
        v
cross-check / resolution
~~~

A vision model must not overwrite the QR identity merely because its confidence is high. Conversely, a QR read must not prevent contradictory visual evidence from being recorded.

## 9. Research experiments

The identifier standard should eventually test:

1. smallest reliably readable QR;
2. reading distance;
3. camera angle;
4. low-light conditions;
5. thermal print degradation;
6. curved packaging;
7. dirty/damaged labels;
8. repeated scanning;
9. different Android cameras;
10. different thermal printers and media;
11. batch-print material efficiency;
12. QR + vision contradiction handling.

Until these experiments are complete, dimensions and payload syntax remain provisional.
