# Operational Resolution Core

> An experimental research repository for resolving heterogeneous assertions, evidence, entities, relations and context into traceable operational states.

## Thesis

Operational systems often receive multiple representations of the same real-world object or operation: documents, sensors, scanners, cameras, human declarations, ERP records and model outputs.

These representations can arrive at different times, refer to different identifiers, carry different provenance, and disagree.

The central hypothesis is that this problem deserves an explicit computational layer:

**Operational Resolution**

This layer should preserve underlying assertions and evidence, represent their relationships and context, detect conflicts and uncertainty, and produce a traceable operational representation that downstream systems can act upon.

```
REAL WORLD
    |
    v
HETEROGENEOUS SOURCES
    |
    v
ASSERTIONS
    |
    +---- EVIDENCE
    +---- ENTITIES / RELATIONS
    +---- CONTEXT
    |
    v
RESOLUTION
    |
    +---- RESOLVED
    +---- CONFLICT
    +---- UNCERTAIN
    |
    v
OPERATIONAL STATE
    |
    +---- ERP
    +---- AUTOMATION
    +---- ATTESTATION
    +---- INTELLIGENCE
```

## What this repository is

This is initially a **research and specification laboratory**.

It is not yet:

- a finished protocol;
- an SDK;
- a blockchain system;
- a replacement for an ERP;
- a claim of novelty.

The repository exists to test whether the proposed layer is necessary, what its minimum semantics are, and how it relates to existing approaches.

## Initial primitives under investigation

- **Entity** — an identifiable object, actor, document, device or other operational subject.
- **Relation** — a relationship between entities.
- **Assertion** — a claim about an entity, relation, state or expected state.
- **Evidence** — material supporting an assertion.
- **Context** — temporal, spatial, operational and policy information relevant to interpretation.
- **Resolution** — the process of combining assertions, evidence, entities, relations and context into an operational representation.

These are hypotheses, not final protocol primitives.

## First case

**CASE-001 — Goods Receiving**

A single receiving operation may contain:

- an invoice/XML declaring an expected quantity;
- product identifiers from different systems;
- scanner observations;
- camera observations;
- operator declarations;
- physical measurements;
- ERP records.

The first objective is to determine exactly what information is lost when these representations are forced directly into a conventional operational state.

## Research direction

```
REAL OPERATION
    ->
CASE
    ->
OBSERVATIONS
    ->
ASSERTIONS
    ->
EVIDENCE
    ->
CONTEXT
    ->
RESOLUTION
    ->
OPERATIONAL STATE
    ->
DOWNSTREAM SYSTEMS
    ->
SPECIFICATION
```

Only after the cases are sufficiently understood should implementation or protocol design begin.

## Related work

The investigation will explicitly compare itself with:

- entity resolution;
- temporal data and temporal reasoning;
- provenance;
- event processing;
- knowledge graphs;
- evidence and uncertainty models;
- truth maintenance;
- belief revision;
- supply-chain event standards;
- ERP integration patterns.

The goal is not to rename an existing field, but to determine whether a distinct operational composition layer is justified.

## Status

**Research / hypothesis validation**

No claim of novelty is made at this stage.
