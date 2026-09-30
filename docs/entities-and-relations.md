# Entities and Relations

Identity and relation are separate concerns.

An entity may be represented by several identifiers:

```text
EAN       -> 789000...
ERP SKU   -> P-042
Internal  -> 42
Supplier  -> SUP-X-42
```

Resolution may determine that these identifiers refer to one operational entity while preserving every original representation.

Relations describe connections between entities:

```text
Product X       located_at       Dock 2
Product X       transported_by   Vehicle V1
Product X       declared_in      NF-e 123
```

The investigation must preserve both the entity representations and the relations connecting them.