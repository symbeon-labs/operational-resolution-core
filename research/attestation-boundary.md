# Attestation Boundary

## Question

Where does evidence/provenance attestation end and operational resolution begin?

## Working distinction

Attestation answers a provenance or verifiability question:

> Can we establish that a particular claim, observation, action or event was produced, witnessed or signed by a specified source?

Operational resolution answers a different question:

> Given the available assertions, evidence, entities, relations and context, what operational representation is supported?

```
SOURCES
  ↓
ASSERTIONS / EVIDENCE
  ↓
ORC RESOLUTION
  ↓
OPERATIONAL REPRESENTATION
  ↓
optional attestation / registry
```

An attestation may itself become evidence for a resolution.

## UEAP investigation

UEAP was considered as a possible event-attestation layer. It is not an ORC primitive and should not be a critical dependency of the MVP/reference core.

## Invariants

- attestation is not resolution;
- provenance is not correctness;
- cryptographic verification does not resolve semantic conflict;
- an attested assertion remains an assertion unless operational rules establish otherwise.
