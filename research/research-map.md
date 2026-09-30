# Research Map

This map records the investigation as questions and evidence, not as a finished architecture.

## 1 — Representation problem

```
REAL WORLD
  ↓
MULTIPLE REPRESENTATIONS
  ↓
POTENTIAL DISAGREEMENT
```

Question: what is lost when heterogeneous representations are collapsed directly into operational records?

## 2 — Conceptual decomposition

```
ENTITY / RELATION / ASSERTION / EVIDENCE / CONTEXT
```

Question: are these sufficient to represent the information involved before resolution?

## 3 — Resolution

```
ASSERTIONS + EVIDENCE + ENTITIES + RELATIONS + CONTEXT + RULES
                         ↓
                     RESOLUTION
                         ↓
              OPERATIONAL REPRESENTATION
```

Question: what exactly does resolution mean, and what outcomes can it produce?

## 4 — Conflict

Question: is disagreement an error to eliminate or information to preserve?

Current hypothesis: conflict is a first-class operational condition.

## 5 — Time

Question: how can observation, validity and recording time be represented without overwriting history?

Current hypothesis: multiple temporal dimensions may be required.

## 6 — Intelligence boundary

Question: where does inference end and resolution begin?

Current hypothesis: inference may produce assertions; resolution determines how they participate in an operational conclusion.

See [Intelligence Boundary](intelligence-boundary.md).

## 7 — Evidence and attestation boundary

Question: where does evidence/provenance attestation end and resolution begin?

Current hypothesis: attestation can support a resolution but is not equivalent to resolution.

See [Attestation Boundary](attestation-boundary.md).

## 8 — Existing approaches

Question: is this already adequately solved?

Comparison targets include entity resolution, temporal reasoning, W3C PROV, evidence theory, truth maintenance, belief revision, complex event processing, knowledge graphs, digital twins, event sourcing and EPCIS.

Status: open.

See [Comparative Matrix](comparison-matrix.md).

## 9 — Real-world validation

Primary case: goods receiving.

The next evidence must come from an actual operational workflow.

## 10 — Domain generalization

Product data, sale, return, inventory, transfer and other workflows test whether the model survives without ad-hoc primitives.

## 11 — Specification

```
CASES
  ↓
EXPERIMENTS
  ↓
COMPARISON
  ↓
SEMANTICS
  ↓
CANDIDATE SPECIFICATION
  ↓
REFERENCE IMPLEMENTATION
```

The ordering is intentional.

## Current research rule

Do not promote a concept to the normative core merely because it is useful in the product. It must survive the research tests first.
