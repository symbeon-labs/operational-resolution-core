# Temporal Semantics

Time is not a single field.

A system may need to distinguish:

- observation time — when a source produced an observation;
- event time — when an occurrence is represented as having happened;
- validity time — when an assertion is considered applicable;
- recording time — when a system stored the information;
- resolution time — when the system produced a resolution.

Example:

```text
10:01 scanner: Product X at Dock 2
10:03 operator: Product X moved to Dock 1
10:05 ERP: Product X recorded at Dock 1
```

A later state should not erase the historical assertion that Product X was previously at Dock 2.

The precise temporal model remains under investigation.