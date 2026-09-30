import test from "node:test";
import assert from "node:assert/strict";

import { createEvidence } from "../src/evidence.js";

test("creates evidence with source, capture time and reference", () => {
  const evidence = createEvidence({
    evidenceId: "orc:evidence:001",
    type: "nfe_xml",
    source: { type: "fiscal_document", id: "nfe-123" },
    capturedAt: "2026-09-30T09:58:00-03:00",
    reference: "sha256:example",
    metadata: {
      mime_type: "application/xml"
    }
  });

  assert.equal(evidence.evidence_id, "orc:evidence:001");
  assert.equal(evidence.type, "nfe_xml");
  assert.deepEqual(evidence.source, {
    type: "fiscal_document",
    id: "nfe-123"
  });
  assert.equal(evidence.captured_at, "2026-09-30T09:58:00-03:00");
  assert.equal(evidence.reference, "sha256:example");
  assert.equal(evidence.metadata.mime_type, "application/xml");
});

test("rejects evidence without capture time", () => {
  assert.throws(
    () =>
      createEvidence({
        evidenceId: "orc:evidence:002",
        type: "image",
        source: { type: "camera", id: "camera-01" }
      }),
    /capturedAt is required/
  );
});
