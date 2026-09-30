# Research-to-Product Boundary

ORC is the research and semantic core. Product development is maintained separately.

## ORC

ORC is responsible for:

- problem investigation;
- falsification;
- semantic model;
- operational cases;
- comparative analysis;
- architecture boundaries;
- candidate specification;
- reference implementation;
- integration research.

## Product layer

The current product implementation is **3L0 Vision**.

3L0 Vision is responsible for:

- operator experience;
- application screens;
- camera/vision workflow;
- OCR integration;
- product registration workflow;
- ERP application integration;
- gamification;
- brand system;
- field hardware and deployment UX.

The product may consume ORC semantics or interfaces without becoming part of the ORC research repository.

## Research-to-product path

```
ORC RESEARCH
    ↓
validated semantics
    ↓
reference implementation
    ↓
integration boundary
    ↓
3L0 Vision / other products
```

## Stages

### Stage 1 — Research

Problem, experiments, comparison and real-world cases.

Output: validated or weakened hypothesis.

### Stage 2 — Semantic core

Candidate data model, resolution semantics, conflict, provenance, temporal model and reproducibility.

Output: candidate specification.

### Stage 3 — Reference implementation

Executable core demonstrating the semantics.

Output: reference implementation.

### Stage 4 — Operational pilot

Controlled real workflow in observe, shadow, recommend, human-confirm and selective automation modes.

Output: measured operational evidence.

### Stage 5 — Integration

ERP, fiscal documents, scanners, cameras, sensors, inference and attestation boundaries.

Output: reusable infrastructure boundary.

### Stage 6 — Product

A product form is determined only after evidence supports it.

ORC does not assume that the product must be an API, SDK, platform or application.
