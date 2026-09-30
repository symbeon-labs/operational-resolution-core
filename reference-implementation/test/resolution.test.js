import test from "node:test";
import assert from "node:assert/strict";

import { createAssertion } from "../src/assertion.js";
import { resolveQuantity } from "../src/resolution.js";

test("resolves quantity when all assertions agree", () => {
  const assertions = [
    createAssertion({
      assertionId: "orc:assertion:001",
      subject: "orc:product:001",
      predicate: "quantity",
      value: 100,
      assertedAt: "2026-09-30T10:00:00-03:00",
      source: { type: "nfe", id: "nfe-001" },
      supportedBy: ["orc:evidence:nfe-001"]
    }),
    createAssertion({
      assertionId: "orc:assertion:002",
      subject: "orc:product:001",
      predicate: "quantity",
      value: 100,
      assertedAt: "2026-09-30T10:00:02-03:00",
      source: { type: "operator", id: "operator-01" },
      supportedBy: ["orc:evidence:operator-001"]
    })
  ];

  const result = resolveQuantity({
    resolutionId: "orc:resolution:001",
    subject: "orc:product:001",
    assertions
  });

  assert.equal(result.status, "RESOLVED");
  assert.deepEqual(result.assertions, [
    "orc:assertion:001",
    "orc:assertion:002"
  ]);
});

test("requires verification when quantity assertions conflict", () => {
  const assertions = [
    createAssertion({
      assertionId: "orc:assertion:003",
      subject: "orc:product:001",
      predicate: "quantity",
      value: 100,
      assertedAt: "2026-09-30T10:00:00-03:00",
      source: { type: "nfe", id: "nfe-001" },
      supportedBy: ["orc:evidence:nfe-001"]
    }),
    createAssertion({
      assertionId: "orc:assertion:004",
      subject: "orc:product:001",
      predicate: "quantity",
      value: 97,
      assertedAt: "2026-09-30T10:00:02-03:00",
      source: { type: "scale", id: "scale-01" },
      supportedBy: ["orc:evidence:scale-001"]
    })
  ];

  const result = resolveQuantity({
    resolutionId: "orc:resolution:002",
    subject: "orc:product:001",
    assertions
  });

  assert.equal(result.status, "REQUIRES_VERIFICATION");
  assert.deepEqual(result.assertions, [
    "orc:assertion:003",
    "orc:assertion:004"
  ]);
  assert.deepEqual(result.evidence, [
    "orc:evidence:nfe-001",
    "orc:evidence:scale-001"
  ]);
});

test("returns UNCERTAIN when quantity is absent", () => {
  const result = resolveQuantity({
    resolutionId: "orc:resolution:003",
    subject: "orc:product:001",
    assertions: []
  });

  assert.equal(result.status, "UNCERTAIN");
});
