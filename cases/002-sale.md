# CASE-002 — Sale

## Purpose

Test whether Operational Resolution remains useful when an operational state is produced from multiple representations during a sale.

## Initial scenario

Candidate inputs:

- product identity from scanner;
- customer/order identity from the operational system;
- payment confirmation;
- inventory state;
- operator action;
- receipt or fiscal document.

## Open questions

- Which assertions represent intent?
- Which represent observation?
- Which evidence supports completion?
- What happens when payment and inventory states disagree?
- What should be resolved before the sale is considered operationally complete?

This case remains intentionally incomplete until grounded in a real workflow.