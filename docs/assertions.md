# Assertions

An assertion is a representation of a claim, not necessarily a fact about the world.

## Why assertions matter

Different sources can produce different claims about the same operation:

```text
NF-e       -> expected quantity = 100
scale      -> measured quantity = 97
operator   -> declared quantity = 100
ERP        -> recorded quantity = 97
```

The system should preserve these claims rather than collapsing them into one value prematurely.

## Assertion dimensions under investigation

An assertion may need to retain:

- subject;
- predicate or relation;
- value;
- source;
- observation time;
- validity interval;
- context;
- evidence reference;
- confidence or epistemic status;
- provenance.

These fields are research candidates, not a finalized schema.