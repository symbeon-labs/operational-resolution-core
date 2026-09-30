# Conceptual Model

The current investigation uses six working concepts.

## Entity

An identifiable operational subject: product, person, device, document, location, transaction or other object.

## Relation

A relationship between entities, such as located_at, transported_by, contained_in or associated_with.

## Assertion

A claim about an entity, relation, state or expected state.

## Evidence

A source or artifact that supports an assertion: document, image, sensor reading, scan, signature, log or other verifiable material.

## Context

Information required to interpret an assertion or resolution: time, location, operation, policy, source characteristics and applicable rules.

## Resolution

A contextual process that combines available assertions, evidence, entities, relations and rules to produce an operational representation.

The concepts remain provisional and are subject to falsification.

---

# Product Identity and the Minimal Computable Layer

The establishment case introduced a more specific question:

> What is the minimum persistent representation required for a system to recognize a physical product, associate new evidence with it, and operate on it without reconstructing its identity from scratch?

We provisionally call this the **minimal computable layer of a product**.

This is a research concept, not a claim of a new standard.

## Three levels

### 1. Physical product

The real-world object.

### 2. Minimal computable layer

The persistent digital representation that allows the system to recognize or reference the physical entity, associate multiple identifiers, attach observations and evidence, preserve assertions and provenance, track changes and relations, resolve future observations against the same entity, and expose the entity to operational systems.

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

The operational representation may change while the underlying product entity persists.

---

# Identity is not the identifier

A QR code, NFC tag, EAN, SKU, manufacturer code or internal code is not necessarily the product identity itself.

They are identifiers or access mechanisms that can be associated with the same persistent entity.

~~~
PRODUCT ENTITY
    ├── EAN
    ├── SKU
    ├── manufacturer code
    ├── internal code
    ├── QR
    ├── NFC
    └── other identifiers
~~~

Identifiers can change, coexist, be duplicated, be missing, become unreadable, belong to different systems, or provide different levels of determinism.

The system should therefore attempt to resolve an incoming identifier or observation against an existing entity before creating a new one.

---

# Evidence is not identity

A camera image, OCR result, barcode scan, NFC read, document or operator declaration can provide evidence about an entity.

They should not automatically become the identity of that entity.

~~~
physical product
      |
      +---- observation
      |       |
      |       +---- image
      |       +---- OCR
      |       +---- barcode
      |       +---- NFC
      |       +---- sensor
      |       +---- document
      |       +---- operator
      |
      v
   assertions
      |
      v
   resolution
      |
      v
 persistent product entity
~~~

This preserves the distinction between what was observed, what was asserted, and what the system resolved.

---

# Created once, resolved many times

A provisional principle emerging from the field case is:

> **A physical product entity can be created once and resolved many times.**

The first encounter with an unknown product may require multimodal interpretation.

~~~
image + OCR + EAN + context + operator
                    |
                    v
                RESOLUTION
                    |
                    v
             PRODUCT ENTITY
~~~

Subsequent encounters should preferentially use the established identity.

~~~
QR / NFC / EAN / known identifier
              |
              v
       EXISTING ENTITY
              |
              v
       new observation
              |
              v
       operational action
~~~

This suggests a potentially important asymmetry:

> **The first encounter is intelligence-heavy. Subsequent encounters should become identity-heavy.**

This is a hypothesis to test, not an implementation requirement.

---

# Candidate product entity representation

A future reference model may need some or all of:

~~~
entity_id
identifiers
attributes
relations
evidence
observations
assertions
resolution_history
erp_mappings
~~~

No field is final at this stage.

The key requirement is semantic: the representation must persist enough information to avoid reconstructing identity from scratch during every subsequent operation.

---

# Interface versus core

The field application should not be confused with the underlying product.

A candidate architecture is:

~~~
                    ORC
                     |
          +----------+----------+
          |          |          |
        Mobile      API        SDK
          |
          v
   Camera / Scanner
      QR / NFC
          |
          v
   Product Entity
          |
          v
  Operational Systems
     (ERP / Apollo)
~~~

The mobile application is therefore a **field interface / terminal** for the resolution infrastructure.

The core research question remains the resolution layer, not the app.

---

# Research boundary

This model does not yet establish:

- a canonical product schema;
- a universal physical identity standard;
- that QR or NFC should always be used;
- that visual recognition is sufficiently reliable;
- that every physical object needs a generated identifier;
- that ORC must become a commercial product;
- that the proposed model is novel.

The immediate objective is to determine whether the minimal computable layer is a useful and defensible abstraction for the real operational cases under investigation.
