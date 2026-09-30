# Intelligence Boundary

## Question

Where does inference end and operational resolution begin?

## Working distinction

Inference produces an interpretation or candidate assertion.

Resolution determines how that assertion participates with other assertions, evidence, entities, relations, context and rules in answering an operational question.

```
MODEL / AI
   ↓
candidate assertion
   ↓
provenance + confidence + source metadata
   ↓
ORC
   ↓
contextual evaluation
   ↓
operational resolution
```

## JEV and bounded decision models

JEV/System One was investigated as an example of a typed, bounded decision model rather than as a dependency of ORC.

Potential role:

```
evidence + assertions + context
          ↓
candidate decision
          ↓
ORC rules / resolution
          ↓
resolved representation
```

ORC must remain model-provider-neutral and must work without JEV.

## Invariants

- model confidence is not operational certainty;
- model output does not silently become fact;
- model/version provenance must be preserved when inference affects resolution;
- deterministic evidence should be preferred where sufficient;
- high-consequence decisions require explicit policy and traceability.

## Open experiments

- model disagreement;
- confidence calibration;
- model version changes;
- deterministic vs semantic matching;
- human override;
- resolution reproducibility after model replacement.
