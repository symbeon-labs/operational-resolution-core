import test from "node:test";
import assert from "node:assert/strict";

import { createEntity, attachIdentifier } from "../src/entity.js";
import { createObservation } from "../src/observation.js";
import { createAssertion } from "../src/assertion.js";
import { createEvidence } from "../src/evidence.js";
import { resolveObservation } from "../src/resolve.js";
import { resolveQuantity } from "../src/resolution.js";

test("CASE-001: goods receiving preserves sources and resolves a quantity conflict", () => {
  const product = createEntity({
    entityId: "orc:product:001",
    type: "product",
    attributes: {
      name: "Product X"
    }
  });

  attachIdentifier(product, {
    scheme: "ean",
    value: "789000000001",
    source: "nfe"
  });

  const scannerObservation = createObservation({
    observationId: "orc:observation:scanner-001",
    observedAt: "2026-09-30T10:00:00-03:00",
    source: {
      type: "scanner",
      id: "scanner-01"
    },
    identifiers: [
      {
        scheme: "ean",
        value: "789000000001"
      }
    ],
    context: {
      operation: "goods_receiving"
    }
  });

  const identityResolution = resolveObservation({
    observation: scannerObservation,
    entities: [product]
  });

  assert.equal(identityResolution.status, "RESOLVED");
  assert.equal(identityResolution.entity_id, "orc:product:001");

  const nfeEvidence = createEvidence({
    evidenceId: "orc:evidence:nfe-001",
    type: "nfe_xml",
    source: {
      type: "fiscal_document",
      id: "nfe-001"
    },
    capturedAt: "2026-09-30T09:58:00-03:00"
  });

  const operatorEvidence = createEvidence({
    evidenceId: "orc:evidence:operator-001",
    type: "operator_declaration",
    source: {
      type: "operator",
      id: "operator-01"
    },
    capturedAt: "2026-09-30T10:00:05-03:00"
  });

  const scaleEvidence = createEvidence({
    evidenceId: "orc:evidence:scale-001",
    type: "scale_record",
    source: {
      type: "scale",
      id: "scale-01"
    },
    capturedAt: "2026-09-30T10:00:06-03:00"
  });

  const nfeAssertion = createAssertion({
    assertionId: "orc:assertion:nfe-001",
    subject: product.entity_id,
    predicate: "quantity",
    value: 100,
    assertedAt: "2026-09-30T09:58:01-03:00",
    source: {
      type: "nfe",
      id: "nfe-001"
    },
    context: {
      operation: "goods_receiving",
      semantic: "expected"
    },
    supportedBy: [nfeEvidence.evidence_id]
  });

  const operatorAssertion = createAssertion({
    assertionId: "orc:assertion:operator-001",
    subject: product.entity_id,
    predicate: "quantity",
    value: 100,
    assertedAt: "2026-09-30T10:00:05-03:00",
    source: {
      type: "operator",
      id: "operator-01"
    },
    context: {
      operation: "goods_receiving",
      semantic: "declared"
    },
    supportedBy: [operatorEvidence.evidence_id]
  });

  const scaleAssertion = createAssertion({
    assertionId: "orc:assertion:scale-001",
    subject: product.entity_id,
    predicate: "quantity",
    value: 97,
    assertedAt: "2026-09-30T10:00:06-03:00",
    source: {
      type: "scale",
      id: "scale-01"
    },
    context: {
      operation: "goods_receiving",
      semantic: "observed"
    },
    supportedBy: [scaleEvidence.evidence_id]
  });

  const quantityResolution = resolveQuantity({
    resolutionId: "orc:resolution:goods-receiving-001",
    subject: product.entity_id,
    assertions: [
      nfeAssertion,
      operatorAssertion,
      scaleAssertion
    ],
    evidence: [
      nfeEvidence,
      operatorEvidence,
      scaleEvidence
    ],
    context: {
      operation: "goods_receiving"
    }
  });

  assert.equal(quantityResolution.status, "REQUIRES_VERIFICATION");
  assert.deepEqual(quantityResolution.assertions, [
    "orc:assertion:nfe-001",
    "orc:assertion:operator-001",
    "orc:assertion:scale-001"
  ]);
  assert.deepEqual(quantityResolution.evidence, [
    "orc:evidence:nfe-001",
    "orc:evidence:operator-001",
    "orc:evidence:scale-001"
  ]);
});
