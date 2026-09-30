import test from "node:test";
import assert from "node:assert/strict";

import { createEntity, attachIdentifier } from "../src/entity.js";
import { createObservation } from "../src/observation.js";
import { resolveObservation } from "../src/resolve.js";

test("resolves a repeated identifier to the existing entity", () => {
  const product = createEntity({ entityId: "orc:product:001", type: "product" });
  attachIdentifier(product, { scheme: "ean", value: "789000000001" });

  const observation = createObservation({
    observationId: "orc:observation:001",
    observedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "scanner", id: "scanner-01" },
    identifiers: [{ scheme: "ean", value: "789000000001" }]
  });

  const result = resolveObservation({ observation, entities: [product] });

  assert.equal(result.status, "RESOLVED");
  assert.equal(result.entity_id, "orc:product:001");
  assert.equal(result.observation_id, "orc:observation:001");
});

test("returns UNCERTAIN when no entity matches", () => {
  const observation = createObservation({
    observationId: "orc:observation:002",
    observedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "camera", id: "camera-01" },
    identifiers: [{ scheme: "ean", value: "789000000099" }]
  });

  const result = resolveObservation({ observation, entities: [] });

  assert.equal(result.status, "UNCERTAIN");
  assert.equal(result.observation_id, "orc:observation:002");
  assert.deepEqual(result.candidates, []);
});

test("returns CONFLICT when an identifier resolves to multiple entities", () => {
  const first = createEntity({ entityId: "orc:product:001", type: "product" });
  const second = createEntity({ entityId: "orc:product:002", type: "product" });

  attachIdentifier(first, { scheme: "ean", value: "789000000001" });
  attachIdentifier(second, { scheme: "ean", value: "789000000001" });

  const observation = createObservation({
    observationId: "orc:observation:003",
    observedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "scanner", id: "scanner-01" },
    identifiers: [{ scheme: "ean", value: "789000000001" }]
  });

  const result = resolveObservation({ observation, entities: [first, second] });

  assert.equal(result.status, "CONFLICT");
  assert.equal(result.entity_id, null);
  assert.equal(result.observation_id, "orc:observation:003");
  assert.deepEqual(result.candidates, [
    "orc:product:001",
    "orc:product:002"
  ]);
});
