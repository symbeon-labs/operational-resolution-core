# Candidate Specification — Draft

**Status: intentionally incomplete and non-normative.**

This document collects candidate semantics only after they emerge from cases, experiments and comparative analysis.

## Candidate model

```
ENTITY
RELATION
ASSERTION
EVIDENCE
CONTEXT
RESOLUTION
```

See:

- [Conceptual Model](../docs/conceptual-model.md)
- [Semantic Status](../docs/semantic-status.md)
- [Reference Architecture](../docs/architecture.md)

## Candidate resolution lifecycle

```
INGEST
  ↓
NORMALIZE
  ↓
ASSOCIATE
  ↓
CONTEXTUALIZE
  ↓
EVALUATE
  ↓
RESOLVE
  ↓
REPRESENT OPERATIONAL STATE
```

Every stage remains provisional.

## Candidate outcomes

- RESOLVED
- CONFLICT
- UNCERTAIN
- INCOMPLETE
- REQUIRES_VERIFICATION

An outcome is not necessarily a truth claim. Resolution may conclude that the available information is insufficient or conflicting for the operational question.

## Open questions

- What is the canonical data model?
- What constitutes sufficient evidence?
- How are conflicts classified?
- How are rules represented and versioned?
- How is resolution reproducibility guaranteed?
- How is uncertainty represented?
- What is the boundary between resolution and inference?
- What is the boundary between resolution and attestation?
- How should source authority be represented?
- What existing standards can be reused?

Implementation should follow, not precede, resolution of these questions.
