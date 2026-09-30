# Candidate Specification — Draft

**Status: intentionally incomplete.**

This document will eventually collect candidate normative semantics for Operational Resolution.

It must not be treated as a protocol specification yet.

## Current candidate model

```text
ENTITY
RELATION
ASSERTION
EVIDENCE
CONTEXT
RESOLUTION
```

## Candidate resolution lifecycle

```text
INGEST
  -> NORMALIZE
  -> ASSOCIATE
  -> EVALUATE
  -> RESOLVE
  -> REPRESENT OPERATIONAL STATE
```

Each stage is provisional.

## Open questions

- What is the canonical data model?
- What constitutes sufficient evidence?
- How are conflicts classified?
- How are rules represented?
- How is resolution reproducibility guaranteed?
- How is uncertainty represented?
- What is the boundary between resolution and inference?
- What is the boundary between resolution and attestation?
- What existing standards can be reused?

Implementation should follow, not precede, resolution of these questions.