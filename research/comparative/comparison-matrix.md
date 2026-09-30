# Comparative Research Matrix

Status: open research.

The purpose of this matrix is falsification, not competitive positioning.

| Approach | Primary representation | Identity | Conflict | Evidence / provenance | Temporal semantics | Operational resolution |
|---|---|---|---|---|---|---|
| Entity Resolution | entity matches | strong | varies | varies | varies | usually indirect |
| Temporal Databases | temporal records | domain-dependent | record-level | varies | strong | indirect |
| W3C PROV | provenance graph | indirect | not primary | strong | partial/related | no |
| Evidence Theory | evidence / belief | indirect | strong | strong | not primary | indirect |
| Truth Maintenance / ATMS | beliefs / dependencies | indirect | strong | dependency-oriented | varies | indirect |
| Belief Revision | belief sets | indirect | strong | varies | varies | indirect |
| Complex Event Processing | event streams/patterns | indirect | limited | varies | strong event-time focus | pattern/action-oriented |
| Knowledge Graphs | entities/relations/claims | strong | varies | can be strong | varies | indirect |
| Digital Twins | digital representations of physical systems | strong | varies | varies | strong domain dependence | domain-specific |
| Event Sourcing | event log | domain-dependent | limited | historical log | event-time oriented | projections |
| EPCIS | supply-chain events | identifier-centric | domain-defined | provenance/context | strong event model | domain-specific |

## Required next work

This matrix is a map of questions, not evidence of insufficiency.

For each approach, the research must document:

- primary object of representation;
- identity model;
- assertion/claim model;
- evidence model;
- provenance;
- temporal semantics;
- conflict handling;
- uncertainty;
- operational question support;
- reproducibility;
- integration boundary;
- exact overlap with ORC.

## Falsification rule

If an existing approach or composition already provides the same semantics and operational purpose required by the cases, the ORC hypothesis must be weakened or rejected.

No novelty claim should be made from this matrix alone.
