# Semantic Status

The repository intentionally distinguishes concepts by epistemic and architectural status.

| Concept | Current status | Role |
|---|---|---|
| Entity | candidate primitive | persistent operational subject |
| Relation | candidate primitive | relationship between entities |
| Assertion | candidate primitive | claim about an entity, relation or state |
| Evidence | candidate primitive | material supporting an assertion |
| Context | candidate primitive | conditions needed for interpretation |
| Resolution | candidate primitive | contextual production of an operational representation |
| Observation | derived/source concept | representation produced by an observation mechanism |
| Expectation | assertion subtype/role | statement about an expected condition |
| Inference | source/process concept | interpretation produced by a model or reasoning process |
| State | derived representation | contextual operational projection |
| Event | derived/domain concept | representation of an occurrence or transition |
| Process | composition | ordered or related operational activity |
| Consequence | derived operational result | effect of a resolution or assertion |
| Attestation | external/adjacent capability | evidence/provenance mechanism, not resolution |

## Important distinction

The table is not a final ontology.

The six candidate primitives remain hypotheses. A concept should become normative only after it survives:

1. empirical cases;
2. comparative analysis;
3. semantic tests;
4. implementation tests.

## Epistemic rule

An output from a source does not automatically become operational truth.

```
SOURCE OUTPUT
    ↓
OBSERVATION / ASSERTION
    ↓
EVIDENCE + CONTEXT
    ↓
RESOLUTION
    ↓
OPERATIONAL REPRESENTATION
```

This separation is one of the central invariants of the research.
