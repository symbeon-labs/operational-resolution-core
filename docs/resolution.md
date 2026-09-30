# Resolution

Resolution is the central subject of this repository.

It is not simply deduplication, event detection, or source selection.

A candidate resolution process receives:

```text
assertions
+ evidence
+ entities
+ relations
+ context
+ rules
+ operational question
```

and produces an operational representation.

Possible outcomes include:

```text
RESOLVED
CONFLICT
UNCERTAIN
INCOMPLETE
REQUIRES_VERIFICATION
REJECTED_FOR_AUTOMATION
```

The result should preserve enough provenance to reproduce or audit why that operational representation was produced.

The exact semantics of resolution remain an open research question.