# Operational Resolution Core

> An experimental research repository for resolving heterogeneous assertions, evidence, entities, relations and context into traceable operational representations.

## Thesis

Operational systems often receive multiple representations of the same real-world object or operation: documents, sensors, scanners, cameras, human declarations, ERP records and model outputs.

These representations can arrive at different times, refer to different identifiers, carry different provenance, and disagree.

The central hypothesis is that this problem deserves an explicit computational layer:

**Operational Resolution**

The layer should preserve underlying assertions and evidence, represent identity and relations, contextualize information, detect conflicts and uncertainty, and produce a traceable operational representation for a specific operational question.

```
REAL WORLD
    |
    v
HETEROGENEOUS SOURCES
    |
    v
OBSERVATIONS / ASSERTIONS / EVIDENCE
    |
    v
ENTITY + RELATION + CONTEXT
    |
    v
RESOLUTION
    |
    +---- RESOLVED
    +---- CONFLICT
    +---- UNCERTAIN
    +---- INCOMPLETE
    +---- REQUIRES_VERIFICATION
    |
    v
OPERATIONAL REPRESENTATION
```

## What this repository is

This is a **research, semantic validation and reference-implementation laboratory**.

It is not yet:

- a finished protocol;
- a public standard;
- a general-purpose SDK;
- a blockchain system;
- an ERP replacement;
- a commercial product;
- a claim of novelty.

The repository exists to determine whether the proposed layer is necessary, what its minimum defensible semantics are, whether existing approaches already provide an equivalent composition, and whether the model survives real operational cases.

## Research program

```
PROBLEM
  ↓
EXPERIMENTS
  ↓
FALSIFICATION
  ↓
REAL-WORLD VALIDATION
  ↓
SEMANTICS
  ↓
REFERENCE IMPLEMENTATION
  ↓
INTEGRATION
  ↓
PRODUCT BOUNDARY
```

## Repository structure

```
cases/
  real operational problems and validation cases

docs/
  thesis, methodology, conceptual model, architecture and semantic status

research/
  experiments, comparisons, domain validation and system boundaries

spec/
  candidate specifications and identity-reference research

reference-implementation/
  minimal executable implementation of the current semantics
```

## Candidate semantic kernel

```
ENTITY
RELATION
ASSERTION
EVIDENCE
CONTEXT
RESOLUTION
```

These remain hypotheses until they survive empirical, comparative and implementation tests.

See:

- [Conceptual Model](docs/conceptual-model.md)
- [Semantic Status](docs/semantic-status.md)
- [Reference Architecture](docs/architecture.md)
- [Research Methodology](docs/research-methodology.md)

## Core research principles

1. Preserve before resolving.
2. Evidence is not assertion.
3. Identity is not relation.
4. Observation is not expectation.
5. Conflict is information.
6. Resolution is contextual.
7. Intelligence does not become fact automatically.
8. Consequence requires traceability.
9. Determinism where possible, intelligence where necessary.
10. Falsification before implementation.

## Primary case

**CASE-001 — Goods Receiving**

The receiving case combines fiscal documents, identifiers, camera/scanner observations, operator declarations and ERP records. It is the main real-world validation path.

The current synthetic case does not require a scale. The next evidence required is the mapping of the actual workflow, source systems, identifiers, timestamps, manual interventions and operational decisions.

See [CASE-001](cases/001-goods-receiving.md).

## Reference implementation

The current implementation deliberately proves only a small semantic loop:

```
Entity
  ↓
Identifier
  ↓
Observation
  ↓
Deterministic Resolution
  ↓
Existing Entity / Uncertain / Conflict
```

It must not be allowed to silently define semantics that the research has not established.

## Boundaries

ORC is designed to sit between heterogeneous representations and downstream operational systems.

It does not own:

- physical observation mechanisms;
- AI inference providers;
- attestation systems;
- ERP execution;
- workflow engines.

See [Reference Architecture](docs/architecture.md), [Intelligence Boundary](research/intelligence-boundary.md) and [Attestation Boundary](research/attestation-boundary.md).

## Product separation

The product emerging from the research is maintained separately in **3L0 Vision**.

The ORC repository remains focused on:

- research;
- semantics;
- falsification;
- operational cases;
- architecture boundaries;
- candidate specifications;
- reference implementation.

3L0 Vision owns the product experience, interface, vision workflow, gamification, brand system and operational application.

## Status

**Research / hypothesis validation**

No novelty conclusion has been established.
