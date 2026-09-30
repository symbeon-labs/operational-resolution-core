# Research Methodology

## Objective

Keep the investigation falsifiable, reproducible and independent of implementation enthusiasm.

## Method

Every significant claim should follow:

```
QUESTION
  ↓
HYPOTHESIS
  ↓
TEST
  ↓
OBSERVATION
  ↓
RESULT
  ↓
LIMITATION
  ↓
NEXT TEST
```

## Evidence classes

### Empirical
Observed in a real operational workflow.

### Synthetic
Constructed scenario used to test semantics.

### Comparative
Derived from comparison with existing standards, systems or research.

### Formal
Derived from explicit definitions, invariants or proofs.

These evidence classes must not be treated as equivalent.

## Claim discipline

The repository should distinguish:

- hypothesis;
- observed behavior;
- interpretation;
- design decision;
- unresolved question;
- validated result.

## Change discipline

When a semantic assumption changes:

1. record the reason;
2. update the relevant document;
3. preserve the previous experiment;
4. add a new experiment when appropriate;
5. do not silently rewrite history.

## Success condition

The research succeeds even if the original hypothesis is rejected, provided the investigation identifies a better explanation or existing solution.
