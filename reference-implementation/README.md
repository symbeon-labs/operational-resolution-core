# ORC Reference Implementation

Experimental executable implementation of the Operational Resolution Core.

## Scope of v0.1

This implementation intentionally proves only the first semantic loop:

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

It does **not** yet implement:

- OCR;
- computer vision;
- AI/LLM inference;
- ERP integration;
- QR/NFC printing;
- attestation;
- probabilistic resolution.

Those capabilities will be added only after the underlying semantics are tested.

## Run

Requires Node.js with the built-in test runner.

```bash
npm test
```

## Current resolution rule

A resolution is:

- **RESOLVED** when exactly one existing entity matches an observed identifier;
- **CONFLICT** when the observation matches more than one entity;
- **UNCERTAIN** when no existing entity matches.

This is deliberately deterministic and minimal.
