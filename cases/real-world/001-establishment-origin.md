# Real-World Origin Artifact — Establishment Mapping

## Status

**Artifact type:** field-origin sketch  
**Context:** first operational mapping of the establishment  
**Role in the research:** observational artifact, not a specification  
**Date recorded:** 2026-09-30

## Why this artifact is preserved

This sketch records the problem as it was initially perceived from the establishment's operational context, before the concepts of Entity, Assertion, Evidence, Context and Resolution were explicitly separated.

The purpose of preserving it is to maintain the genealogy of the investigation:

```
REAL-WORLD OPERATION
        ↓
INITIAL OBSERVATION
        ↓
PROBLEM MAPPING
        ↓
CONCEPTUAL DECOMPOSITION
        ↓
EXPERIMENTS
        ↓
RESOLUTION HYPOTHESIS
```

The sketch should therefore be read as **evidence of the problem discovery process**, not as the final architecture.

## Original observations captured in the sketch

The handwritten map identifies:

- Apollo as the current operational system.
- People, contacts and business entities as connected domains.
- Products/items as a central operational object.
- Notes/invoices, items, payments and suppliers as important data inputs.
- Cash closing and stock control as operational outputs/processes.
- Flexible reports and traceability as desired capabilities.
- Manual work as a significant operational cost.
- Multiple identification mechanisms:
  - ICM/internal code;
  - manufacturer code;
  - own code;
  - third-party code;
  - barcode;
  - QR Code;
  - NFC;
  - seal/tag;
  - vision/computer vision.
- An application concept combining vision and data.
- A desire to eliminate manual registration and standardize traceability.

## Initial interpretation

At the time of the sketch, these elements could be understood as a conventional automation problem:

```
physical product
      ↓
identification
      ↓
Apollo
      ↓
stock / sales / finance / reports
```

The subsequent investigation exposed a deeper problem:

```
multiple representations
        ↓
multiple identifiers
        ↓
multiple observations
        ↓
different sources
        ↓
possible conflicts
        ↓
need for persistent identity
        ↓
need for contextual resolution
```

## Key conceptual transition

The initial idea was approximately:

> eliminate manual work by reading products and registering them in Apollo.

The current research hypothesis is more precise:

> **create and maintain persistent operational identities for physical products by resolving heterogeneous identifiers, observations and evidence, then expose the resulting operational representation to systems such as Apollo.**

This distinction is important.

The system is not merely:

```
IMAGE → DESCRIPTION → ERP
```

It is closer to:

```
IMAGE / EAN / QR / NFC / DOCUMENT / ERP
                  ↓
             ASSERTIONS
                  ↓
              EVIDENCE
                  ↓
        ENTITY / RELATION CONTEXT
                  ↓
             RESOLUTION
                  ↓
          PRODUCT ENTITY
                  ↓
               APOLLO
```

## The missing layer identified later

The original sketch connects identification mechanisms directly to Apollo.

The current model inserts an explicit resolution layer:

```
EAN
SKU
ICM
manufacturer code
third-party code
QR
NFC
image
OCR
document
   │
   ↓
┌───────────────────────────┐
│    OPERATIONAL RESOLUTION │
├───────────────────────────┤
│ Entity                    │
│ Relation                  │
│ Assertion                 │
│ Evidence                  │
│ Context                   │
│ Resolution                │
└──────────────┬────────────┘
               ↓
        PRODUCT ENTITY
               ↓
             APOLLO
```

This layer is still a research hypothesis and must be tested against the real establishment workflow.

## Emerging product hypothesis

The establishment case suggests a potential first field application:

### Product Identity Intake

First encounter:

```
PRODUCT
  ↓
mobile camera / scanner
  ↓
OCR + barcode + visual evidence
  ↓
identity resolution
  ↓
operator confirmation
  ↓
persistent product identity
  ↓
QR label
  ↓
Apollo
```

Subsequent encounters:

```
QR / barcode / NFC
        ↓
existing product identity
        ↓
new observation / assertion
        ↓
operational action
        ↓
Apollo
```

The important transition is:

> **The first encounter creates the identity; later encounters resolve to the existing identity instead of reconstructing the product from scratch.**

## Research implications

This artifact motivates several experiments:

1. Can a product identity be created from heterogeneous evidence?
2. Can a visual representation be associated with an existing product entity?
3. Can deterministic identifiers and probabilistic visual evidence be combined safely?
4. Can the system detect conflicting identifiers rather than silently merging them?
5. How much manual work is eliminated during first registration?
6. How much faster are subsequent identifications?
7. Can the same identity support receiving, inventory, sale, return and adjustment workflows?
8. What information must remain in the resolution layer versus Apollo?
9. Which identifiers should be primary, secondary or contextual?
10. When is a generated QR useful, and when is an existing identifier sufficient?

## Important limitation

This artifact does **not** demonstrate that the proposed architecture is correct.

It establishes only that the real-world problem was observed before the current conceptual model was formalized.

The next step is field validation against the actual establishment workflow.

## Source artifact

Original handwritten sketch supplied during the investigation:

```
establishment-origin-sketch
```

The original image is intentionally treated as a primary research artifact; this document provides its structured transcription and the later conceptual interpretation.
