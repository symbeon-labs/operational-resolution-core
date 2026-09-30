import test from "node:test";
import assert from "node:assert/strict";

import { createAssertion } from "../src/assertion.js";

test("creates an assertion without converting it into a fact", () => {
  const assertion = createAssertion({
    assertionId: "orc:assertion:001",
    subject: "orc:product:001",
    predicate: "quantity",
    value: 100,
    assertedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "operator", id: "operator-01" },
    context: { operation: "goods_receiving" },
    basedOn: ["orc:observation:001"]
  });

  assert.equal(assertion.assertion_id, "orc:assertion:001");
  assert.equal(assertion.subject, "orc:product:001");
  assert.equal(assertion.predicate, "quantity");
  assert.equal(assertion.value, 100);
  assert.deepEqual(assertion.source, {
    type: "operator",
    id: "operator-01"
  });
  assert.deepEqual(assertion.based_on, ["orc:observation:001"]);
});

test("requires an explicit source", () => {
  assert.throws(
    () => createAssertion({
      assertionId: "orc:assertion:002",
      subject: "orc:product:001",
      predicate: "quantity",
      value: 100,
      assertedAt: "2026-09-30T10:00:00-03:00"
    }),
    /source is required/
  );
});
