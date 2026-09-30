# ORC — Super Task Map

> Master research map. This is broader than an implementation backlog.

## Mission

Determine whether heterogeneous operational representations require an explicit resolution layer and, if so, derive the minimum defensible semantics, architecture and implementation from evidence.

## Governing sequence

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
```

Productization is downstream and belongs to a separate repository.

---

# 0. Research Charter

- [x] Define the representation problem.
- [x] State the operational-resolution hypothesis.
- [x] Establish ORC as an independent research laboratory.
- [x] Establish no premature novelty claim.
- [x] Distinguish assertion from evidence.
- [x] Distinguish identity from relation.
- [x] Distinguish expectation from observation.
- [x] Distinguish inference from resolution.
- [x] Distinguish attestation from resolution.
- [x] Distinguish operational state from underlying assertions.

**Status:** complete enough for continued validation.

---

# 1. Conceptual Model

## Candidate primitives
- [x] Entity
- [x] Relation
- [x] Assertion
- [x] Evidence
- [x] Context
- [x] Resolution

## Derived concepts
- [x] Observation
- [x] Expectation
- [x] Inference
- [x] Event
- [x] State
- [x] Process
- [x] Consequence
- [x] Attestation

## Open semantics
- [ ] Identity semantics.
- [ ] Assertion lifecycle.
- [ ] Evidence association.
- [ ] Provenance.
- [ ] Temporal semantics.
- [ ] Context model.
- [ ] Conflict classes.
- [ ] Uncertainty classes.
- [ ] Resolution outcomes.
- [ ] Source authority.
- [ ] Resolution reproducibility/versioning.

---

# 2. Experimental Program

## Completed
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
- [x] Falsification framing against existing fields.
- [x] Real establishment problem.

## Next experiments
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
- [ ] Adversarial input.
- [ ] High-volume ingestion.

---

# 3. State of the Art / Falsification

## Compare
- [ ] Entity Resolution.
- [ ] Temporal databases/reasoning.
- [ ] W3C PROV.
- [ ] Evidence theory.
- [ ] Dempster-Shafer approaches.
- [ ] Truth Maintenance / ATMS.
- [ ] Belief revision.
- [ ] Complex Event Processing.
- [ ] Knowledge graphs.
- [ ] Digital twins.
- [ ] Event sourcing.
- [ ] EPCIS.
- [ ] Operational data integration patterns.

## Comparison dimensions
- [ ] Representation.
- [ ] Identity.
- [ ] Claims/assertions.
- [ ] Evidence.
- [ ] Provenance.
- [ ] Time.
- [ ] Conflict.
- [ ] Uncertainty.
- [ ] Operational question.
- [ ] Reproducibility.
- [ ] Integration boundary.

**Gate:** determine whether ORC is already adequately covered, is a composition of existing capabilities, is an architectural pattern, or remains insufficiently defined.

---

# 4. Real-World Validation

## CASE-001 — Goods Receiving

### Discovery
- [ ] Map actual workflow.
- [ ] Identify actors.
- [ ] Identify documents.
- [ ] Identify systems.
- [ ] Identify identifiers.
- [ ] Identify observations.
- [ ] Identify timestamps.
- [ ] Identify manual interventions.
- [ ] Identify current operational decision.

### Baseline
- [ ] Document current workflow without ORC.
- [ ] Measure manual work.
- [ ] Identify reconciliation points.
- [ ] Identify failures.
- [ ] Identify information currently discarded.

### Prototype
- [ ] Preserve source assertions.
- [ ] Preserve evidence references.
- [ ] Normalize identifiers.
- [ ] Associate entities.
- [ ] Produce candidate resolution.
- [ ] Preserve conflict.
- [ ] Record provenance.
- [ ] Reproduce result from inputs/context/rules.

**Gate:** represent a real workflow end-to-end and measure the difference.

---

# 5. Domain Generalization

- [ ] Sale.
- [ ] Return.
- [ ] Inventory.
- [ ] Transfer.
- [ ] Supplier delivery.
- [ ] Order fulfillment.
- [ ] Asset movement.
- [ ] Compliance/inspection.

**Gate:** generalization must not require a new primitive for every domain.

---

# 6. Formal Semantics

Only after empirical validation.

- [ ] Entity schema.
- [ ] Relation schema.
- [ ] Assertion schema.
- [ ] Evidence schema.
- [ ] Context schema.
- [ ] Resolution input/output schema.
- [ ] Identity semantics.
- [ ] Temporal validity.
- [ ] Provenance.
- [ ] Uncertainty.
- [ ] Conflict classification.
- [ ] Source authority.
- [ ] Rule application.
- [ ] Human intervention.
- [ ] Reproducibility.
- [ ] Invariants.
- [ ] Resolution lifecycle.

**Gate:** implementation can be evaluated against explicit semantics.

---

# 7. Reference Architecture

- [x] Initial boundary.
- [x] Observation boundary.
- [x] Intelligence boundary.
- [x] Attestation boundary.
- [x] ERP/downstream boundary.
- [ ] Ingestion boundary.
- [ ] Normalization.
- [ ] Identity association.
- [ ] Evidence persistence.
- [ ] Assertion persistence.
- [ ] Context handling.
- [ ] Resolution engine.
- [ ] Operational projection.
- [ ] Audit/provenance.
- [ ] Integration API.

---

# 8. Reference Implementation

Current implementation proves only a minimal deterministic loop.

- [x] Entity.
- [x] Identifier association.
- [x] Observation.
- [x] Deterministic resolution.
- [x] Conflict/uncertain outcomes.
- [x] Quantity resolution experiment.
- [x] Vision observation contract.
- [x] Scenario tests.

Next:
- [ ] Canonical candidate data model.
- [ ] Evidence references.
- [ ] Relation graph.
- [ ] Context handling.
- [ ] Resolution provenance.
- [ ] Replay.
- [ ] Conflict model.
- [ ] Temporal semantics.
- [ ] Property/scenario tests.
- [ ] Performance/security tests.

**Rule:** implementation must demonstrate semantics, not define them accidentally.

---

# 9. Integration Research

- [ ] Read-only mode.
- [ ] Shadow mode.
- [ ] Recommendation mode.
- [ ] Human-confirmed execution.
- [ ] Controlled automation.

Measure:
- [ ] Manual reconciliation reduction.
- [ ] Identity matching accuracy.
- [ ] Conflict detection.
- [ ] False resolution rate.
- [ ] Human intervention rate.
- [ ] Latency.
- [ ] Auditability.
- [ ] Operational cost.

---

# 10. Governance

- [ ] Audit trail.
- [ ] Access control.
- [ ] Data minimization.
- [ ] Sensitive-data handling.
- [ ] Human override.
- [ ] Resolution provenance.
- [ ] Model/version provenance.
- [ ] Rule/version provenance.
- [ ] Reproducibility.
- [ ] Rollback.
- [ ] Incident investigation.

---

# Decision Gates

## A — Problem validated
Do real systems exhibit the problem?

## B — Existing approaches insufficient
Is there a meaningful unresolved composition problem?

## C — Semantics stable
Can the model be stated precisely?

## D — Technical feasibility
Can the model be implemented without pathological complexity?

## E — Operational value
Does it improve a real workflow measurably?

## F — Product boundary
Is there evidence for a sustainable product or infrastructure offering?

The product layer is now maintained separately in **3L0 Vision**. ORC should reach Gate F only after its research gates are supported by evidence.

---

# Current position

**Completed:** problem framing, initial conceptual model, 22 conceptual experiments, initial cases, research methodology, architecture boundaries and minimal reference implementation.

**Current priority:** real-world validation + systematic comparison with existing approaches.

**Not yet justified:** final protocol, public standard, SDK, commercial product architecture or novelty claim.

> **Do not build the thing because the architecture looks elegant. Build only what survives the cases.**
