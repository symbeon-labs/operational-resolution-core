# Domain Validation — Product Data Resolution

## Purpose

Use product registration and receiving as a concrete domain for testing ORC semantics.

A physical product may be represented by:

- EAN/GTIN;
- internal SKU;
- manufacturer code;
- supplier code;
- product description;
- fiscal document/XML;
- ERP record;
- image/OCR observation;
- operator declaration.

The research question is not how to build a product form. It is whether these heterogeneous representations can be preserved and resolved into a persistent entity without repeated reconstruction.

## Candidate data domains

| Domain | Examples |
|---|---|
| Identity | ORC entity ID, EAN/GTIN, internal code, manufacturer code, supplier code |
| Description | name, brand, model, variant |
| Commercial | cost, sale price, supplier |
| Inventory | unit, quantity, stock limits |
| Fiscal | NCM, CEST, CFOP and related parameters |
| Operational | location, lot, expiry, relations, history |

## Fiscal boundary

Structured fiscal sources such as NF-e/XML should be preferred over reconstructing fiscal fields from images.

Fiscal data must not be inferred merely because a model recognizes a product visually.

## Research value

This domain tests:

- multiple identifiers;
- entity persistence;
- source provenance;
- missing values;
- conflicting attributes;
- structured-document evidence;
- ERP mapping;
- operational projection.

The domain is a validation case, not the definition of ORC.
