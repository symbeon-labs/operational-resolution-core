# Product Data Resolution and ERP Mapping

## Purpose

The field application should not reproduce an ERP form. Its purpose is to transform heterogeneous information about a physical product into a persistent Product Entity and map that representation into operational systems such as Apollo without unnecessary manual re-entry.

## Working product-data domains

| Domain | Examples |
|---|---|
| Identity | ORC entity ID, EAN/GTIN, internal, manufacturer and supplier codes |
| Description | name, description, brand, model, variant |
| Commercial | cost, sale price, supplier, pricing rules |
| Inventory | unit, quantity, stock limits, weight/volume where applicable |
| Fiscal | NCM, CEST, CFOP and other applicable tax parameters |
| Operational | location, lot, expiry, relations, history, evidence |

This is a working decomposition, not a final canonical schema.

## Source strategy

Information may come from:

- physical packaging;
- barcode, QR or NFC;
- manufacturer or supplier codes;
- photograph and OCR;
- visual inference;
- NF-e/XML;
- existing ERP data;
- operator declaration;
- previous operational history.

ORC preserves the origin and status of important values instead of silently overwriting conflicting information.

## Extraction boundary

### Deterministic observations

- EAN/GTIN;
- printed product codes;
- manufacturer/supplier codes;
- lot and expiry;
- serial number;
- declared weight or volume.

### OCR observations

- brand;
- product name;
- model;
- variant;
- package size;
- lot and expiry;
- printed identifiers.

### Visual inference

Computer vision may produce candidate category, brand, packaging or similarity matches. These are evidence/assertions, not automatically canonical identity.

## Structured fiscal data

When NF-e/XML is available, ORC should prefer structured fiscal data over reconstructing information from an image. Relevant fields may include cProd, cEAN/GTIN, xProd, NCM, CFOP, uCom, qCom, vUnCom, vProd, cEANTrib, uTrib and qTrib.

Commercial and tributary units must remain distinct when applicable.

Fiscal fields such as NCM, CEST, CFOP, CST/CSOSN and origin must not be silently invented from packaging or model output. They should retain a status such as OBSERVED, IMPORTED, INFERRED, CONFIRMED, CONFLICTING, MISSING or REQUIRES_VERIFICATION.

## Canonical Product Entity

Candidate representation:

~~~
Product Entity
├── entity_id
├── identifiers
├── descriptive_attributes
├── commercial_attributes
├── inventory_attributes
├── fiscal_attributes
├── relations
├── observations
├── assertions
├── evidence
├── provenance
├── resolution_history
└── erp_mappings
~~~

The entity is persistent. Operational states and ERP projections may change without recreating the underlying entity.

## ERP mapping layer

ORC should not become an Apollo clone.

~~~
ORC CANONICAL PRODUCT
          |
          v
     MAPPING LAYER
          |
    +-----+-----+
    |           |
  Apollo      Other ERP
~~~

The same Product Entity can therefore be exposed to different systems without making ORC dependent on one vendor.

## Preventing rework

> **The operator should work on exceptions, not retype the entire product.**

Target workflow:

~~~
CAPTURE → EXTRACT → MATCH → RESOLVE
                           |
              +------------+------------+
              |                         |
          COMPLETE                  EXCEPTION
              |                         |
              v                         v
          SYNC ERP              ASK ONLY WHAT IS MISSING
~~~

If a product already exists, ORC should resolve the new observation against that entity before creating another one.

## Provenance

Important values should retain source and status. For example:

~~~
name  → Product X 500ml → NF-e/XML → IMPORTED
EAN   → 789...          → barcode → OBSERVED
brand → Brand X         → OCR     → INFERRED
NCM   → ...             → NF-e/XML → CONFIRMED
~~~

This lets the system explain where a value came from and why it was accepted.

## Conflict handling

Conflicting values must not be silently replaced.

Example:

~~~
NF-e: Product X 500ml
OCR:  Product X 600ml
        ↓
CONFLICT
        ↓
REQUIRES_VERIFICATION
~~~

The underlying assertions remain preserved.

## Price

Price is separate from product identity. Cost may come from purchasing/fiscal data, while sale price may depend on the company's pricing policy or operator input. The system should not infer sale price from a photograph.

## First MVP

~~~
NF-e/XML + camera/OCR + EAN/barcode
                  ↓
                 ORC
                  ↓
           Product Entity
                  ↓
           field validation
                  ↓
             ERP mapping
                  ↓
                Apollo
~~~

The key metric is not OCR accuracy alone. It is the amount of manual product registration eliminated while maintaining acceptable identity and data correctness.

Candidate measurements:

- time to register a product;
- number of manually entered fields;
- repeated-entry rate;
- duplicate entity creation rate;
- identity match accuracy;
- OCR correction rate;
- fiscal verification rate;
- synchronization failures;
- operator intervention rate.

## Product hypothesis

> **A physical-digital identification system that resolves information already present across products, documents, identifiers and operational systems, creates a persistent product identity, and asks the operator only for what cannot be safely resolved automatically.**

The field app is the interface. The label is the physical identity/access mechanism. The printer materializes that identity. ORC is the resolution and persistence layer. The ERP remains the operational system of record for the processes it already owns.

## Research status

This document records a working architecture derived from the establishment case. It does not establish a final canonical schema, universal fiscal classification, final Apollo integration contract, final OCR model, final AI model or commercial pricing model.