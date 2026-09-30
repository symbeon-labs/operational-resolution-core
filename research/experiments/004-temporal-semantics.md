# Experiment 004 — Temporal Semantics

## Question

Can historical assertions survive later state changes?

## Test

```text
10:01 -> Product X at Dock 2
10:03 -> Product X at Dock 1
```

## Observation

The later state does not invalidate the historical observation.

## Result

Observation time and state validity should not be collapsed into one timestamp.