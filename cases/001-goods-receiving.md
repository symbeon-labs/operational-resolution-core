# CASE-001 — Goods Receiving

## Objective

Test the operational resolution hypothesis against a real receiving workflow.

The case begins when a product is expected to arrive and ends when the operational system must decide whether the receipt can be confirmed automatically.

## Scenario

A fiscal document declares:

```
Document: NF-e 123
Product code: 42
EAN: 789000...
Expected quantity: 100
```

The establishment's ERP represents the same product as:

```
SKU: P-042
Name: Product X
Stock before operation: 0
```

During receiving, multiple sources produce representations:

| Source | Assertion |
|---|---|
| NF-e/XML | 100 units expected |
| Scanner | EAN 789000... observed |
| Camera | Product X observed |
| Operator | 100 units declared |
| Scale | 97 units measured |
| ERP | 97 units recorded |

## Initial problem

These sources do not necessarily represent the same semantic fact.

They provide different assertions about:

- identity;
- expected quantity;
- observed quantity;
- declared quantity;
- recorded quantity.

The system must determine what can safely be concluded.

## Candidate resolution

```
Product identity: RESOLVED
Expected quantity: 100
Observed quantity: 97
Operator declaration: 100

Conflict: YES
Evidence sources: XML + scanner + camera + operator + scale
Operational state: REQUIRES VERIFICATION
Automatic receipt confirmation: NO
```

This is only a candidate result. The case is intentionally open to falsification.

## Questions

1. Can all source assertions be preserved without forcing a single value?
2. Can identifiers from different systems be resolved to one entity without losing their original representations?
3. Can observation time be separated from validity/state time?
4. Can contradictory assertions coexist without one being silently discarded?
5. Can a resolution be reproduced from its inputs, context and rules?
6. Can the result be consumed by an ERP without pretending that uncertainty does not exist?
7. Which parts of this problem are already solved by existing standards?

## Next evidence required

This synthetic case should be replaced or expanded with an actual receiving workflow from the establishment.

The next investigation should map:

```
real document
    ->
real identifiers
    ->
real observations
    ->
real ERP records
    ->
real conflicts
    ->
real operational decision
```

No protocol should be designed until this mapping is complete.
