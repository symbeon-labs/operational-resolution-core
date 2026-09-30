# Thesis

## The problem

Operational systems rarely observe reality directly. They receive representations produced by different sources.

A receiving operation, for example, can simultaneously be represented by:

- a fiscal document;
- a barcode;
- a scanner;
- a camera;
- a human declaration;
- a scale;
- an ERP transaction.

Each representation answers a different question and has different provenance.

The problem appears when the system must transform these representations into one operational state.

## Central hypothesis

The system should not immediately collapse heterogeneous representations into a single fact.

Instead:

1. preserve the assertions;
2. preserve their evidence;
3. preserve identity and relations;
4. preserve temporal and operational context;
5. resolve the available information for a specific operational question;
6. expose the resulting state together with conflicts, uncertainty and provenance.

In compact form:

`R = resolve(A, E, X, C, Θ, q)`

where:

- `A` = assertions;
- `E` = evidence;
- `X` = entities and relations;
- `C` = context;
- `Θ` = rules and policy;
- `q` = operational question;
- `R` = resolved operational representation.

The notation is provisional.

## Resolution does not mean truth selection

Resolution does not necessarily mean selecting one source as the truth.

A valid result may be:

- resolved;
- conflicting;
- uncertain;
- incomplete;
- rejected for automatic execution;
- escalated for human verification.

Example:

```
Expected quantity: 100
Observed quantity: 97
Operator declaration: 100
ERP record: 97

Result:
IDENTITY = RESOLVED
QUANTITY = CONFLICT
OPERATIONAL ACTION = VERIFY
```

The important property is that the conflict remains represented rather than silently overwritten.

## Falsification criteria

The thesis should be weakened or rejected if existing standards or architectures already provide an equivalent layer with the same semantics and operational purpose.

It should also be rejected if the proposed primitives collapse into unnecessary abstractions that can be represented more simply using established models.

Therefore this repository is deliberately comparative and experimental.
