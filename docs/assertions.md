# Assertions

An **assertion** is an explicit claim made by a source about an entity, relation, state or expected state.

An assertion is not automatically a fact.

## Minimal representation

```
ASSERTION
├── assertion_id
├── subject
├── predicate
├── value
├── asserted_at
├── source
├── context
└── based_on
```

An assertion records who or what made a claim, what was claimed, when it was claimed, and the context in which it applies.

## Observation and assertion

An observation records a representation produced by a source.

An assertion expresses a claim interpreted or declared by a source.

Example:

```
scale
  ↓
Observation: quantity = 97

operator
  ↓
Assertion: quantity = 100
```

Both can coexist.

The ORC resolver should not silently discard either one.

## Contradictory assertions

Two assertions can refer to the same subject and predicate while carrying different values:

```
Assertion A
product = 001
quantity = 100
source = operator

Assertion B
product = 001
quantity = 97
source = scale
```

This is not a data-model failure.

It is an operational condition that the resolution layer must be able to represent.

The current model therefore preserves assertions independently rather than overwriting one value with another.

## Current boundary

This implementation does not yet assign:

- truth;
- reliability scores;
- source rankings;
- probabilities;
- final operational state.

Those belong to later resolution semantics.

## Research consequence

The model preserves:

```
OBSERVATION ≠ ASSERTION ≠ RESOLVED STATE
```

Conflicting claims remain available as inputs to later resolution.
