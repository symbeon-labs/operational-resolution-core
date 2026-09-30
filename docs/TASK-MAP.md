# Operational Resolution Core — Super Task Map

> Master research-to-product map. This document is intentionally broader than an implementation backlog.

## Mission

Determine whether heterogeneous operational representations require an explicit resolution layer and, if so, derive the minimum defensible semantics, architecture, implementation and product boundary from evidence.

## Governing principle

```
RESEARCH
  ↓
FALSIFICATION
  ↓
VALIDATION
  ↓
SEMANTICS
  ↓
REFERENCE IMPLEMENTATION
  ↓
INTEGRATION
  ↓
PRODUCT
```

No stage should be treated as complete merely because code exists.

---

# 0. Research Charter

### 0.1 Define the problem
- [x] State the representation problem.
- [x] State the operational-resolution hypothesis.
- [x] Define the repository as an independent research laboratory.
- [x] Establish no premature novelty claim.

### 0.2 Define research boundaries
- [x] Distinguish assertion from evidence.
- [x] Distinguish identity from relation.
- [x] Distinguish expectation from observation.
- [x] Distinguish inference from operational resolution.
- [x] Distinguish attestation from operational resolution.
- [x] Distinguish state from underlying assertions.

### Exit criterion
The problem can be explained without referring to a specific previous product or implementation.

---

# 1. Conceptual Model

### 1.1 Candidate primitives
- [x] Entity
- [x] Relation
- [x] Assertion
- [x] Evidence
- [x] Context
- [x] Resolution

### 1.2 Derived concepts under investigation
- [x] Observation
- [x] Expectation
- [x] Inference
- [x] Event
- [x] State
- [x] Process
- [x] Consequence
- [ ] Determine formal status of each concept.

### 1.3 Semantic questions
- [ ] Define identity semantics.
- [ ] Define relation semantics.
- [ ] Define assertion lifecycle.
- [ ] Define evidence association.
- [ ] Define provenance.
- [ ] Define temporal semantics.
- [ ] Define context.
- [ ] Define conflict classes.
- [ ] Define uncertainty classes.
- [ ] Define resolution outcomes.

### Exit criterion
A reviewer can construct a complete example using the model without inventing undocumented concepts.

---

# 2. Experimental Program

### 2.1 Existing experiments
- [x] Identity vs relation.
- [x] Occurrence vs event.
- [x] Contradictory assertions.
- [x] Temporal semantics.
- [x] Expectation vs observation.
- [x] Observation vs assertion.
- [x] Inference vs fact.
- [x] Multiple identifiers.
- [x] Multiple entities.
- [x] Out-of-order observations.
- [x] State vs assertion.
- [x] Event vs assertion.
- [x] Process as primitive.
- [x] Consequence as primitive.
- [x] Attestation vs resolution.
- [x] Inference vs resolution.
- [x] Event-driven sufficiency.
- [x] Minimal primitive reduction.
- [x] Resolution without winner selection.
- [x] Operational-question dependence.
- [x] Comparison against existing fields.
- [x] Real establishment problem.

### 2.2 New experiments
- [ ] Missing evidence.
- [ ] Duplicate evidence.
- [ ] Corrupted evidence.
- [ ] Late-arriving evidence.
- [ ] Retracted assertion.
- [ ] Corrected assertion.
- [ ] Partial identity match.
- [ ] One-to-many identity mapping.
- [ ] Many-to-one identity mapping.
- [ ] Context-dependent identity.
- [ ] Conflicting source authority.
- [ ] Rule conflict.
- [ ] Resolution reproducibility.
- [ ] Resolution versioning.
- [ ] Human override.
- [ ] Resolution rollback.
- [ ] Cascading consequences.
- [ ] Cross-operation dependency.
- [ ] Security/adversarial input.
- [ ] High-volume ingestion.

### Exit criterion
Known failure modes are represented explicitly and the model's limits are documented.

---

# 3. State-of-the-Art / Falsification

### 3.1 Compare with
- [ ] Entity Resolution.
- [ ] Temporal databases.
- [ ] Temporal reasoning.
- [ ] W3C PROV.
- [ ] Evidence theory.
- [ ] Dempster-Shafer approaches.
- [ ] Truth Maintenance Systems.
- [ ] ATMS.
- [ ] Belief revision.
- [ ] Complex Event Processing.
- [ ] Knowledge graphs.
- [ ] Digital twins.
- [ ] Event sourcing.
- [ ] EPCIS.
- [ ] Operational data integration patterns.

### 3.2 Comparison matrix
For each approach:
- [ ] Primary representation.
- [ ] Identity model.
- [ ] Relation model.
- [ ] Conflict model.
- [ ] Evidence model.
- [ ] Provenance model.
- [ ] Temporal model.
- [ ] Uncertainty model.
- [ ] Operational decision model.
- [ ] Reproducibility.
- [ ] Integration boundary.
- [ ] What it solves.
- [ ] What remains unsolved for our cases.

### Exit criterion
We can state precisely whether the proposed layer is:
1. already adequately covered;
2. a composition of existing capabilities;
3. an architectural pattern;
4. a distinct semantic layer;
5. or still insufficiently defined.

---

# 4. Real-World Validation

## CASE-001 — Goods Receiving

### Discovery
- [ ] Map the actual workflow.
- [ ] Identify actors.
- [ ] Identify documents.
- [ ] Identify systems.
- [ ] Identify identifiers.
- [ ] Identify sensors.
- [ ] Identify manual inputs.
- [ ] Identify timestamps.
- [ ] Identify existing conflicts.
- [ ] Identify the current operational decision.

### Data map
- [ ] NF-e/XML.
- [ ] Product identifiers.
- [ ] Scanner/barcode.
- [ ] Camera.
- [ ] Operator.
- [ ] Physical measurement.
- [ ] ERP/Apollo state.
- [ ] Historical records.

### Baseline
- [ ] Document current workflow without ORC.
- [ ] Measure manual work.
- [ ] Identify reconciliation points.
- [ ] Identify failure modes.
- [ ] Identify information currently discarded.

### Prototype
- [ ] Represent source assertions.
- [ ] Preserve evidence references.
- [ ] Normalize identifiers.
- [ ] Build candidate resolution.
- [ ] Produce operational state.
- [ ] Preserve conflict.
- [ ] Record provenance.

### Exit criterion
A real workflow can be represented end-to-end and the difference between the baseline and the proposed resolution layer is measurable.

---

# 5. Domain Generalization

Test whether the model survives beyond receiving.

- [ ] Sale.
- [ ] Return.
- [ ] Inventory.
- [ ] Transfer.
- [ ] Supplier delivery.
- [ ] Order fulfillment.
- [ ] Asset movement.
- [ ] Compliance workflow.
- [ ] Physical inspection.

### Exit criterion
The model generalizes without introducing ad-hoc primitives for every domain.

---

# 6. Formal Semantics

Only begin after empirical validation.

### 6.1 Data model
- [ ] Entity schema.
- [ ] Relation schema.
- [ ] Assertion schema.
- [ ] Evidence schema.
- [ ] Context schema.
- [ ] Resolution input schema.
- [ ] Resolution output schema.

### 6.2 Semantics
- [ ] Identity resolution.
- [ ] Temporal validity.
- [ ] Provenance.
- [ ] Confidence/uncertainty.
- [ ] Conflict classification.
- [ ] Source authority.
- [ ] Rule application.
- [ ] Human intervention.
- [ ] Reproducibility.

### 6.3 Formalization
- [ ] Define notation.
- [ ] Define invariants.
- [ ] Define resolution lifecycle.
- [ ] Define determinism requirements.
- [ ] Define acceptable nondeterminism.
- [ ] Define audit requirements.

### Exit criterion
A candidate implementation can be evaluated against explicit semantics rather than intuition.

---

# 7. Reference Architecture

### 7.1 Architecture
- [ ] Ingestion boundary.
- [ ] Normalization.
- [ ] Identity association.
- [ ] Evidence store.
- [ ] Assertion store.
- [ ] Context layer.
- [ ] Resolution engine.
- [ ] Operational-state projection.
- [ ] Audit/provenance.
- [ ] Integration API.

### 7.2 Non-responsibilities
- [ ] Document what ORC does not own.
- [ ] Define boundary with ERP.
- [ ] Define boundary with inference systems.
- [ ] Define boundary with attestation systems.
- [ ] Define boundary with sensors.
- [ ] Define boundary with workflow engines.

### Exit criterion
A system architect can place ORC in a real architecture without ambiguity.

---

# 8. Reference Implementation

Only after the semantic model stabilizes.

### 8.1 Core
- [ ] Canonical data model.
- [ ] Assertion ingestion.
- [ ] Evidence references.
- [ ] Entity association.
- [ ] Relation graph.
- [ ] Context handling.
- [ ] Resolution pipeline.
- [ ] Conflict representation.
- [ ] Provenance.
- [ ] Resolution replay.

### 8.2 Interfaces
- [ ] REST/API boundary.
- [ ] Event ingestion adapter.
- [ ] ERP adapter.
- [ ] Document adapter.
- [ ] Sensor adapter.
- [ ] Human-review interface.

### 8.3 Testing
- [ ] Unit tests.
- [ ] Property tests.
- [ ] Scenario tests.
- [ ] Replay tests.
- [ ] Conflict tests.
- [ ] Temporal tests.
- [ ] Performance tests.
- [ ] Security tests.

### Exit criterion
The reference implementation demonstrates the semantics rather than defining them accidentally.

---

# 9. Integration Research

### Integrate with a real operational system
- [ ] Read-only integration.
- [ ] Shadow mode.
- [ ] Recommendation mode.
- [ ] Human-confirmed execution.
- [ ] Controlled automation.

### Measure
- [ ] Manual reconciliation reduction.
- [ ] Identity matching accuracy.
- [ ] Conflict detection.
- [ ] False resolution rate.
- [ ] Human intervention rate.
- [ ] Processing latency.
- [ ] Auditability.
- [ ] Operational cost.

### Exit criterion
The infrastructure demonstrates measurable operational value without requiring unsafe automatic decisions.

---

# 10. Productization

Productization only begins after the research layer survives validation.

### Possible product forms
- [ ] Research reference implementation.
- [ ] Developer SDK.
- [ ] Resolution API.
- [ ] Operational integration platform.
- [ ] Domain-specific product.
- [ ] Enterprise infrastructure.

### Product questions
- [ ] Who is the buyer?
- [ ] Who is the operator?
- [ ] What decision does the product improve?
- [ ] What integration cost does it remove?
- [ ] What evidence does it preserve?
- [ ] What measurable outcome does it produce?
- [ ] What must remain human-controlled?

### Exit criterion
There is a demonstrated problem, a stable semantic core and measurable value.

---

# 11. Governance and Safety

- [ ] Audit trail.
- [ ] Access control.
- [ ] Data minimization.
- [ ] Sensitive-data handling.
- [ ] Human override.
- [ ] Explainable resolution provenance.
- [ ] Model/version provenance.
- [ ] Rule/version provenance.
- [ ] Reproducibility.
- [ ] Rollback.
- [ ] Incident investigation.

---

# 12. Final Decision Gates

## Gate A — Problem validated
Do real systems exhibit the problem?

## Gate B — Existing approaches insufficient
Is there a meaningful unresolved composition problem?

## Gate C — Semantics stable
Can the model be stated precisely?

## Gate D — Technical feasibility
Can the model be implemented without pathological complexity?

## Gate E — Operational value
Does it improve a real workflow measurably?

## Gate F — Product boundary
Is there a sustainable product or infrastructure offering?

Only after Gate F should the project be treated as a product initiative.

---

# Current position

**Completed:** problem framing, initial conceptual model, first experimental program, initial cases and research map.

**Current priority:** real-world validation + systematic comparison with existing approaches.

**Not yet justified:** final protocol, public standard, SDK, commercial product architecture.

---

# Working rule

> Do not build the thing because the architecture looks elegant. Build only what survives the cases.
