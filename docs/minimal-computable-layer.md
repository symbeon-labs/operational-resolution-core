# Minimal Computable Layer

## Research question

> What is the minimum persistent representation required for a system to recognize a physical entity, associate new evidence with it, and operate on it without reconstructing its identity from scratch?

We provisionally call this the **minimal computable layer**.

This is a research concept, not a new standard.

## Three levels

### 1. Physical entity

The real-world object.

### 2. Minimal computable layer

The persistent digital representation that allows a system to:

- recognize or reference the physical entity;
- associate multiple identifiers;
- attach observations and evidence;
- preserve assertions and provenance;
- track changes and relations;
- resolve future observations against the same entity;
- expose the entity to downstream operational systems.

The minimum is therefore not a product description. It is the minimum **operationally persistent identity representation**.

### 3. Operational representation

A contextual projection of the entity for a specific operation.

Examples:

- available stock;
- goods received;
- product sold;
- item returned;
- asset transferred;
- item requiring verification.

The operational representation may change while the underlying entity persists.

## Identity is not the identifier

A QR code, NFC tag, EAN, SKU, manufacturer code or internal code is an identifier or access mechanism. It is not necessarily the entity itself.

A generated QR should therefore be treated as an **Identity Reference**, not as the entity.

```
ENTITY
  ├── EAN
  ├── SKU
  ├── manufacturer code
  ├── internal code
  ├── QR / identity reference
  ├── NFC / identity reference
  └── other identifiers
```

Identifiers can coexist, change, be duplicated, become unreadable, belong to different systems or provide different levels of determinism.

## Physical labels are optional

ORC must not depend on a printed label.

```
                    ORC
                     |
          +----------+----------+
          |          |          |
         QR         EAN        NFC
          |          |          |
          +----------+----------+
                     |
              identity reference
                     |
                    ENTITY
```

Markerless resolution remains first-class:

```
image / document / context
          |
       OCR / vision
          |
     observations
          |
      resolution
          |
        ENTITY
```

Labels may improve deterministic identification and operational speed, but they are not a prerequisite for the core.

## Evidence is not identity

A camera image, OCR result, barcode scan, NFC read, document or operator declaration can provide evidence about an entity.

They should remain distinguishable from the persistent entity itself.

```
physical entity
      |
      +---- observation
      +---- evidence
      +---- assertion
      |
      v
   resolution
      |
      v
 persistent entity representation
```

## Created once, resolved many times

A provisional principle from the field case is:

> **A physical entity can be created once and resolved many times.**

The first encounter with an unknown entity may require multimodal interpretation.

```
image + OCR + EAN + context + operator
                    |
                    v
                RESOLUTION
                    |
                    v
                  ENTITY
```

Subsequent encounters should preferentially use established identity:

```
known identifier
      |
      v
existing entity
      |
      v
new observation
      |
      v
operational action
```

This suggests an asymmetry:

> **The first encounter is intelligence-heavy. Subsequent encounters should become identity-heavy.**

This remains a hypothesis to test.

## Candidate representation

A future reference model may need some or all of:

```
entity_id
identifiers
attributes
relations
evidence
observations
assertions
resolution_history
downstream_mappings
```

No field is final.

The semantic requirement is that enough information persists to avoid reconstructing identity from scratch during every subsequent operation.

## Research boundary

This model does not establish:

- a canonical product schema;
- a universal physical identity standard;
- that QR or NFC should always be used;
- that visual recognition is sufficiently reliable;
- that every physical object needs a generated identifier;
- that ORC must become a commercial product;
- that the abstraction is novel.

The next tests must determine whether the minimal computable layer is useful and defensible across real operational cases.
