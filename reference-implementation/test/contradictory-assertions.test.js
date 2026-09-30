import test from "node:test";
import assert from "node:assert/strict";

import { createAssertion } from "../src/assertion.js";

test("preserves contradictory assertions about the same subject", () => {
  const operator = createAssertion({
    assertionId: "orc:assertion:operator-001",
    subject: "orc:product:001",
    predicate: "quantity",
    value: 100,
    assertedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "operator", id: "operator-01" }
  });

  const scale = createAssertion({
    assertionId: "orc:assertion:scale-001",
    subject: "orc:product:001",
    predicate: "quantity",
    value: 97,
    assertedAt: "2026-09-30T10:00:02-03:00",
    source: { type: "scale", id: "scale-01" }
  });

  const assertions = [operator, scale];

  assert.equal(assertions.length, 2);
  assert.notEqual(assertions[0].value, assertions[1].value);
  assert.equal(assertions[0].subject, assertions[1].subject);
  assert.equal(assertions[0].predicate, assertions[1].predicate);
  assert.notEqual(assertions[0].assertion_id, assertions[1].assertion_id);
});
