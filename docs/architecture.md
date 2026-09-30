# ORC Reference Architecture

## Purpose

This document defines the current architectural boundary of Operational Resolution Core. It is a research architecture, not a production deployment specification.

## Core boundary

```
REAL WORLD / DIGITAL SOURCES
        |
        v
OBSERVATIONS / ASSERTIONS / EVIDENCE
        |
        v
ORC NORMALIZATION
        |
        v
ENTITY + RELATION ASSOCIATION
        |
        v
CONTEXT + RULES
        |
        v
RESOLUTION
        |
        v
OPERATIONAL REPRESENTATION
        |
        +----> ERP / workflow / automation
        +----> downstream systems
```

## ORC owns

- representation of entities and relations;
- assertion preservation;
- evidence references;
- contextual resolution;
- conflict and uncertainty representation;
- resolution provenance;
- reproducible operational conclusions.

## ORC does not own

### Observation

Cameras, scanners, OCR engines, sensors and documents produce observations or source representations. ORC may normalize them, but does not own the physical observation mechanism.

### Inference

AI and statistical models may produce candidate assertions or interpretations. Their outputs retain model provenance and epistemic status. Inference is not equivalent to resolution.

### Attestation

Cryptographic or external attestation can establish provenance or verifiability of a claim/event. It does not determine how heterogeneous claims should be resolved for an operational question.

### ERP

ERP systems remain systems of operational execution and domain-specific records. ORC should provide a traceable resolution boundary rather than become an ERP replacement.

### Workflow

Workflow engines may execute actions after a resolution. ORC determines what operational representation is supported; workflow determines how an organization acts on it.

## Intelligence boundary

```
Evidence
Assertions
Entities
Relations
Context
      |
      v
candidate interpretations
      |
      v
resolution rules / bounded intelligence
      |
      v
RESOLVED / CONFLICT / UNCERTAIN / INCOMPLETE / REQUIRES_VERIFICATION
```

Intelligence may participate in resolution, but it must not silently become fact.

## Deterministic-first principle

Where identifiers, structured documents or explicit rules provide sufficient evidence, deterministic processing should precede semantic inference.

A provisional pipeline is:

```
structured identifier / document
        ↓
normalization
        ↓
deterministic matching
        ↓
semantic inference only when necessary
        ↓
resolution
```

## Reference architecture status

Open questions remain around persistence, rule representation, source authority, uncertainty, replay and resolution versioning. These must be settled by experiments before a normative architecture is declared.
