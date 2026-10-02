# Comparative Analysis — Operational Resolution Core

**Status:** Preliminary comparative research  
**Version:** v0.2  
**Purpose:** Test whether the ORC hypothesis is materially distinct from established approaches before treating the semantic kernel as necessary or differentiated.

> This document is a research comparison, not a novelty, patentability, legal, or superiority conclusion.

## 1. Research question

The ORC hypothesis is that heterogeneous operational systems may require an explicit layer that:

1. preserves source assertions and evidence;
2. represents identity and relations;
3. contextualizes information;
4. resolves agreement, conflict, uncertainty and incompleteness;
5. produces a traceable operational representation for a specific operational question.

The comparison therefore asks whether existing approaches already provide this composition, either directly or through a standard combination.

## 2. Comparison matrix

| Approach | Primary representation | Identity / linkage | Provenance / evidence | Conflict / uncertainty | Operational resolution | Current ORC implication |
|---|---|---|---|---|---|---|
| Entity Resolution / Record Linkage | Records referring to real-world entities | **Core capability** | Usually supporting metadata/process context | Probabilistic and deterministic methods can represent linkage uncertainty | Usually produces linkage / merged representation rather than a full operational state | **Major overlap. ORC cannot claim entity resolution itself as the differentiator.** |
| W3C PROV | Entities, activities, agents and derivations | Supports relations between entities | **Core capability** | Provenance constraints; not primarily a conflict-resolution engine | Not its primary purpose | **ORC must explain why provenance plus resolution requires an additional operational layer.** |
| NGSI-LD | Context entities, properties and relationships | Entity identifiers are explicit | Context attributes and metadata | Can represent multi-source context and temporal/contextual information | Supports context management rather than ORC-style resolution semantics | **Strong structural overlap with ENTITY + RELATION + CONTEXT.** |
| GS1 EPCIS | Visibility events about physical/digital objects | Uses EPC / class-level identifiers | Event context and business data | Event semantics and transformations; not a general claim-conflict framework | Produces interoperable supply-chain event information | **Strong domain-specific overlap for CASE-001. ORC needs to distinguish resolution from event standardization.** |
| RATS | Evidence, Claims, Attestation Results, Attester, Verifier | Attester / target identity | **Core capability** | Appraisal policy and result semantics | Produces attestation results, not general operational entity resolution | **Important boundary: attestation can provide evidence/results consumed by ORC; ORC should not duplicate attestation.** |
| Digital Twin / Context Systems | Digital representations of real-world assets | Usually explicit entity identity | Depends on implementation / standard | Depends on implementation | Often represents state and context | **Broad conceptual overlap; not enough by itself to establish an ORC-specific gap.** |
| Event Sourcing | Events as durable system history | Application-defined | Event history is the primary record | Conflicts depend on domain model | Reconstructs state from event history | **Different starting point: historical state reconstruction vs heterogeneous-source resolution.** |
| Evidence / belief / truth-maintenance approaches | Claims, beliefs, evidence or justified conclusions | Varies | Often central | **Core concern** | Depends on system | **Potentially important conceptual prior art; requires deeper comparison before ORC semantics are treated as distinct.** |

## 3. Findings by approach

### 3.1 Entity Resolution

Entity resolution is the clearest existing overlap.

The literature treats entity resolution as identifying records that refer to the same real-world entity across multiple sources. Established pipelines include attribute/schema alignment, blocking, entity resolution and merging/canonicalization. Deterministic, probabilistic, Bayesian and supervised approaches are all established.

**Consequence for ORC:**

ORC must not define its contribution as merely:

> “resolve heterogeneous records into the same entity.”

That problem is already a mature research area.

The unresolved ORC question is broader:

> After heterogeneous records are linked to candidate entities, what computational layer preserves the underlying assertions and evidence, represents their context and relations, handles disagreement and uncertainty, and produces a traceable operational representation for a specific operational question?

This is a research question, not a novelty conclusion.

### 3.2 W3C PROV

W3C PROV already provides a general provenance model covering entities, activities, agents, derivations and responsibility. It is explicitly designed to represent information about how data or things were produced and to support assessments of quality, reliability or trustworthiness.

**Consequence for ORC:**

Evidence and provenance cannot be treated as uniquely identifying ORC.

The research gap, if any, must concern the interaction between provenance/evidence and **operational resolution**, rather than provenance alone.

### 3.3 NGSI-LD

NGSI-LD provides an information model around entities, relationships and properties and is designed for context information exchanged between systems and applications. Its model explicitly supports entities and relationships representing real-world assets and contextual information from multiple sources.

**Consequence for ORC:**

The proposed semantic kernel:

ENTITY + RELATION + ASSERTION + EVIDENCE + CONTEXT + RESOLUTION

has substantial structural overlap with established context-information models.

ORC therefore needs to demonstrate that ASSERTION, EVIDENCE and RESOLUTION introduce operational semantics that are not merely another serialization or context model.

### 3.4 GS1 EPCIS

EPCIS defines interoperable event representations for visibility across supply-chain processes, including relationships between physical/digital objects and transformation events.

This is directly relevant to CASE-001 because goods receiving is already an event-rich domain with established interoperability standards.

**Consequence for ORC:**

A meaningful CASE-001 experiment must test whether EPCIS-style event data plus identifiers and provenance are sufficient for the operational question, or whether a distinct resolution layer is still required.

The experiment should include cases where:

- multiple identifiers refer to a candidate object;
- timestamps disagree;
- documents and physical observations disagree;
- an event is missing;
- an observation is uncertain;
- two sources assert incompatible states;
- an operator overrides a machine observation.

If an existing combination already resolves these cases adequately, ORC should record that result rather than forcing an additional layer.

### 3.5 RATS / Attestation

RATS defines Evidence, Claims, Verifiers and Attestation Results and explicitly separates evidence appraisal from the later use of attestation results.

**Consequence for ORC:**

ORC should consume attestation results where appropriate rather than becoming an attestation protocol.

This reinforces the current ORC boundary:

heterogeneous representations → resolution → operational representation

while attestation remains an upstream evidence/proof mechanism.

## 4. Current composition hypothesis

The strongest remaining ORC hypothesis is therefore not:

> “No existing system resolves heterogeneous data.”

That would be unsupported.

The narrower hypothesis is:

> Existing approaches solve important portions of the problem, but a general operational system may still need an explicit composition that keeps source assertions and evidence distinct from resolved operational state, while making the transformation between them contextual, traceable and uncertainty-preserving.

Candidate composition:

HETEROGENEOUS SOURCES
        ↓
ASSERTIONS / OBSERVATIONS / EVIDENCE
        ↓
IDENTITY + RELATIONS + CONTEXT
        ↓
RESOLUTION
        ↓
RESOLVED / CONFLICT / UNCERTAIN / INCOMPLETE
        ↓
OPERATIONAL REPRESENTATION

This remains a hypothesis.

## 5. The key falsification test

The most important next experiment is **not** another implementation of the current deterministic loop.

It is a comparative composition test.

### Question

Can an existing combination of:

- entity resolution;
- provenance;
- context modeling;
- event standards;
- uncertainty / conflict representation;
- domain rules;

produce the same operational result with equal traceability and uncertainty preservation?

### Experimental design

Use CASE-001 — Goods Receiving and construct a benchmark with at least five source classes:

1. fiscal/document record;
2. scanner/barcode observation;
3. camera/OCR observation;
4. operator declaration;
5. ERP record.

For each case, record:

- source;
- raw assertion;
- timestamp;
- identifier;
- provenance;
- confidence/uncertainty;
- contextual constraints;
- candidate entity;
- conflict set;
- resolution rule;
- resulting operational state;
- human intervention;
- evidence supporting the result.

Then compare:

**Baseline composition**

Existing entity-resolution + provenance/context/event mechanisms

against:

**ORC composition**

ENTITY + RELATION + ASSERTION + EVIDENCE + CONTEXT + RESOLUTION

The comparison should measure at least:

- identity accuracy;
- conflict detection;
- uncertainty preservation;
- evidence traceability;
- resolution reproducibility;
- human intervention;
- state justification;
- failure/boundary cases.

## 6. What this comparison currently establishes

The external comparison supports the following statements:

1. **Entity resolution is established prior art/research**, including heterogeneous-source record linkage and uncertainty-aware methods.
2. **Provenance modeling is established**, including standardized models such as W3C PROV.
3. **Entity/relation/context modeling is established**, including NGSI-LD.
4. **Operational event interoperability is established in specific domains**, including EPCIS.
5. **Evidence appraisal and attestation-result architectures are established**, including RATS.
6. Therefore, none of these individual elements should be presented as an ORC-specific invention or unique capability.
7. The remaining research question is whether their **operational composition and semantic boundary** leave a practically important gap that warrants an explicit ORC layer.

## 7. What this comparison does NOT establish

It does not establish:

- novelty;
- patentability;
- superiority;
- that existing approaches cannot implement the ORC semantics;
- that ORC is necessary;
- that the candidate semantic kernel is complete;
- that CASE-001 requires a new abstraction.

Those conclusions require deeper comparative implementation and empirical evidence.

## 8. Research position after v0.2

The research has moved from:

“Does an Operational Resolution layer sound useful?”

to a more testable question:

> **Can existing approaches be composed to preserve source-level evidence and uncertainty while producing a traceable, context-specific operational resolution, without introducing the explicit ORC boundary?**

If the answer is **yes**, ORC should narrow or dissolve its abstraction.

If the answer is **no**, the failure mode should identify the missing semantic boundary precisely.

That failure, rather than the existence of the ORC implementation itself, would constitute the strongest evidence for continuing the research program.

## 9. Primary references

- W3C PROV-DM — https://www.w3.org/TR/prov-dm/
- ETSI NGSI-LD Information Model — https://cim.etsi.org/NGSI-LD/official/clause-4.html
- GS1 EPCIS 2.0 — https://ref.gs1.org/standards/epcis/2.0.0/
- IETF RFC 9334 — https://www.rfc-editor.org/rfc/rfc9334.html
- Entity Resolution review — https://pmc.ncbi.nlm.nih.gov/articles/PMC11636688/
- Prior ORC research record — see repository research/ and cases/

## 10. Next required artifact

The next research artifact should be a **CASE-001 comparative benchmark**, not another conceptual overview.

It should instantiate the same operational receiving scenarios using:

1. baseline existing approaches;
2. ORC reference semantics;
3. identical source evidence;
4. identical evaluation criteria.

Only then should the project decide whether the proposed semantic boundary survives comparison.
