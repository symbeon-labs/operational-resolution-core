import test from "node:test";
import assert from "node:assert/strict";

import { createAssertion } from "../src/assertion.js";
import { createEvidence } from "../src/evidence.js";

test("links an assertion to the evidence supporting it", () => {
  const evidence = createEvidence({
    evidenceId: "orc:evidence:001",
    type: "nfe_xml",
    source: { type: "fiscal_document", id: "nfe-123" },
    capturedAt: "2026-09-30T09:58:00-03:00"
  });

  const assertion = createAssertion({
    assertionId: "orc:assertion:001",
    subject: "orc:product:001",
    predicate: "expected_quantity",
    value: 100,
    assertedAt: "2026-09-30T09:58:01-03:00",
    source: { type: "nfe", id: "nfe-123" },
    supportedBy: [evidence.evidence_id]
  });

  assert.deepEqual(assertion.supported_by, ["orc:evidence:001"]);
});

test("multiple assertions may reference the same evidence", () => {
  const evidence = createEvidence({
    evidenceId: "orc:evidence:002",
    type: "nfe_xml",
    source: { type: "fiscal_document", id: "nfe-456" },
    capturedAt: "2026-09-30T09:58:00-03:00"
  });

  const first = createAssertion({
    assertionId: "orc:assertion:002",
    subject: "orc:product:002",
    predicate: "expected_quantity",
    value: 100,
    assertedAt: "2026-09-30T09:58:01-03:00",
    source: { type: "nfe", id: "nfe-456" },
    supportedBy: [evidence.evidence_id]
  });

  const second = createAssertion({
    assertionId: "orc:assertion:003",
    subject: "orc:product:002",
    predicate: "unit",
    value: "unit",
    assertedAt: "2026-09-30T09:58:01-03:00",
    source: { type: "nfe", id: "nfe-456" },
    supportedBy: [evidence.evidence_id]
  });

  assert.deepEqual(first.supported_by, second.supported_by);
});
