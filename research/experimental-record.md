# Experimental Record

This document records the principal conceptual tests performed during the initial investigation of Operational Resolution.

The purpose is to preserve the reasoning path, including hypotheses that were weakened or rejected.

## 001 — Occurrence is not necessarily an event

### Question

Should a physical occurrence correspond to one canonical event?

### Test

Consider a product receiving operation observed by:

- a camera;
- a scanner;
- an operator;
- an ERP;
- a fiscal document.

### Observation

The same real-world occurrence can generate multiple representations with different timing, provenance and semantic roles.

### Result

The investigation does not equate occurrence with event.

An event may be a useful representation, but it should not be assumed to be the primitive from which all other information must derive.

---

## 002 — Identity is not relation

### Question

Can an entity and its operational relationships be represented independently?

### Test

```
Product X
Product X located_at Dock 2
Product X transported_by Vehicle V1
```

### Observation

The first statement concerns the entity. The other statements concern relationships involving that entity.

### Result

Identity and relation remain separate candidate concepts.

---

## 003 — Contradictory assertions

### Question

Should conflicting values be collapsed into one value?

### Test

```
NF-e       = 100
scale      = 97
operator   = 100
ERP        = 97
```

### Observation

Selecting one value destroys information about the disagreement.

### Result

Conflict is itself operational information and should be representable.

---

## 004 — Observation time versus state time

### Question

Can one timestamp adequately represent operational truth?

### Test

```
10:01 -> Product X observed at Dock 2
10:03 -> Product X moved to Dock 1
10:05 -> ERP records Product X at Dock 1
```

### Observation

The later state does not erase the historical observation.

### Result

Observation time, validity time and recording time may require separate semantics.

---

## 005 — Expectation versus observation

### Question

Should expected state and observed state be represented identically?

### Test

```
NF-e  -> expected quantity = 100
scale -> observed quantity = 97
```

### Observation

The document expresses an expectation or declaration. The scale expresses a measurement.

### Result

Expectation and observation should remain distinguishable.

---

## 006 — Observation versus assertion

### Question

Is an observation itself equivalent to a fact?

### Test

Compare:

```
scale    -> measured 97
operator -> declared 100
```

### Observation

Both can be represented as assertions, but their source, mode and epistemic role differ.

### Result

The working model treats an assertion as a representation of a claim rather than an automatic declaration of truth.

---

## 007 — Inference versus fact

### Question

Should an intelligent model's output automatically become operational fact?

### Test

A model infers that two identifiers refer to the same product.

### Observation

The inference may be useful and highly confident while still being an inference with provenance.

### Result

Inference can produce an assertion. It should not silently erase its epistemic origin.

---

## 008 — Multiple identifiers for one entity

### Question

Can one operational entity have multiple representations?

### Test

```
EAN       -> 789000...
ERP SKU   -> P-042
Internal  -> 42
Supplier  -> SUP-X-42
```

### Observation

These identifiers can refer to the same operational entity while retaining their original meanings.

### Result

Identity resolution should associate representations without destroying source identifiers.

---

## 009 — Multiple entities and simultaneous operations

### Question

Does the model break when several entities and operations coexist?

### Test

A scenario contains:

```
NF-e 123 -> 100 units of X -> Stock A
NF-e 124 -> 50 units of Y  -> Stock B

Camera -> Vehicle V1 -> Dock 2
Camera -> Vehicle V2 -> Dock 1

Scanner -> X -> Dock 2
Scanner -> Y -> Dock 1

Operator -> moved X -> Dock 1

Scale -> X = 97
Operator -> X = 100
ERP -> NF123 received = 97
```

### Observation

The model can represent multiple entities, relations, assertions, movement, expectations and contradictions without creating a new primitive for every operational concept.

### Result

The candidate primitive set remains viable.

---

## 010 — Out-of-order observations

### Question

Must observations arrive in chronological order?

### Test

Receive an ERP record before a camera observation, followed by a later operator declaration.

### Observation

Operational systems may receive representations asynchronously.

### Result

The model must not depend on ingestion order being identical to occurrence order.

---

## 011 — State versus assertion

### Question

Should state be a primitive or a derived representation?

### Test

Consider:

```
Product X at Dock 2
Product X moved to Dock 1
```

### Observation

A current state can be projected from temporally contextualized assertions and relations.

### Result

State can be treated as a derived operational representation rather than necessarily a fundamental primitive.

---

## 012 — Event versus assertion

### Question

Does every operational event need to be a primitive?

### Test

Represent a receiving operation using document, scanner, camera, operator and ERP assertions.

### Observation

The operation can be reconstructed or represented through contextualized assertions and relations.

### Result

Event remains a useful derived or domain-level concept, but the investigation did not require it as a minimum primitive.

---

## 013 — Process as primitive

### Question

Does a process require its own primitive?

### Test

Represent:

```
expected -> observed -> verified -> received -> stocked
```

### Observation

The sequence can be represented through assertions, relations, context and temporal ordering.

### Result

Process is currently treated as a higher-level composition rather than a minimum primitive.

---

## 014 — Consequence as primitive

### Question

Does consequence require a distinct primitive?

### Test

A resolved quantity conflict causes:

```
receipt confirmation = blocked
verification = required
```

### Observation

The operational consequence can itself be represented as an assertion or state transition with provenance.

### Result

No additional primitive was required in the tested scenarios.

---

## 015 — Attestation versus resolution

### Question

Is cryptographic attestation equivalent to operational resolution?

### Test

Consider an externally verifiable attestation that an assertion was produced or witnessed.

### Observation

Attestation can establish provenance or verifiability of a claim, but does not by itself answer the operational question of how several claims should be combined.

### Result

Attestation and resolution remain conceptually distinct.

---

## 016 — Inference versus resolution

### Question

Is AI inference equivalent to resolution?

### Test

A model predicts that two product identifiers refer to the same entity.

### Observation

Inference produces an interpretation. Resolution must determine how that interpretation interacts with documents, measurements, policies and other assertions.

### Result

Inference can participate in resolution without being equivalent to it.

---

## 017 — Event-driven architecture as sufficient model

### Question

Can a conventional event-driven model fully represent the problem?

### Test

Represent the receiving case as a stream of events and attempt to preserve:

- contradictory measurements;
- expected versus observed quantities;
- multiple identities;
- provenance;
- temporal validity;
- contextual operational decisions.

### Observation

A simple event stream does not by itself define how conflicting claims are retained and resolved for an operational question.

### Result

The working hypothesis became:

> The infrastructure may need to be assertion-driven and resolution-driven, not merely event-driven.

This is a research conclusion, not a universal architectural claim.

---

## 018 — Minimal primitive reduction

### Question

What is the smallest useful conceptual kernel?

### Candidates tested

```
ENTITY
RELATION
ASSERTION
EVIDENCE
RESOLUTION
```

Later, context was made explicit because resolution depends on temporal, spatial, operational and policy conditions.

### Observation

The tested scenarios could be represented without making observation, event, state, process, inference or consequence independent primitives.

### Result

Current working model:

```
ENTITY
RELATION
ASSERTION
EVIDENCE
CONTEXT
RESOLUTION
```

This is the strongest conceptual hypothesis produced so far.

---

## 019 — Resolution does not mean choosing a winner

### Question

Does resolution necessarily select one source as correct?

### Test

```
Expected = 100
Measured = 97
Declared = 100
Recorded = 97
```

### Observation

The correct operational result may be:

```
identity = resolved
quantity = conflicting
action = verification required
```

### Result

Resolution can produce a structured operational conclusion without claiming that one assertion is universally true.

---

## 020 — Operational question matters

### Question

Can the same knowledge produce different useful resolutions depending on the operational question?

### Test

Ask:

```
"Can this receipt be automatically confirmed?"
```

versus:

```
"What quantity did the scale measure?"
```

### Observation

The available assertions may be sufficient for one question but insufficient for another.

### Result

Resolution is contextual and query-dependent.

---

## 021 — Falsification test against existing fields

### Question

Is the proposed layer simply an existing field under a new name?

### Areas identified for comparison

- entity resolution;
- temporal databases and temporal reasoning;
- provenance;
- W3C PROV;
- evidence theory and uncertainty models;
- truth maintenance systems / ATMS;
- belief revision;
- complex event processing;
- knowledge graphs;
- digital twins;
- event sourcing;
- EPCIS and supply-chain event standards.

### Result

No novelty conclusion was drawn.

The relevant question became whether the **composition of capabilities and operational semantics** constitutes a distinct layer, rather than whether each individual capability is new.

This remains unresolved and requires documented comparison.

---

## 022 — Real establishment case

### Question

Does the abstraction correspond to an actual operational problem?

### Candidate workflow

```
NF-e/XML
    +
scanner
    +
camera
    +
operator
    +
physical measurement
    +
ERP
    |
    v
heterogeneous assertions
    |
    v
identity / relation resolution
    |
    v
evidence + context
    |
    v
operational resolution
    |
    v
ERP state / action
```

### Observation

The real establishment scenario naturally produces the exact class of conflicts and heterogeneous representations being investigated.

### Result

This became the primary real-world case for continued validation.

---

## Current conclusion

The investigation has not proven a new protocol.

It has produced a stronger hypothesis:

> **Operational systems may require an explicit resolution layer capable of preserving heterogeneous assertions and evidence, contextualizing them, resolving identities and relations, representing conflict and uncertainty, and producing traceable operational states.**

The next step is not to add more abstractions.

The next step is to test this hypothesis against real operational data and existing standards.
