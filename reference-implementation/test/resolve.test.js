import test from "node:test";
import assert from "node:assert/strict";

import { createEntity, attachIdentifier } from "../src/entity.js";
import { resolveObservation } from "../src/resolve.js";

test("resolves a repeated identifier to the existing entity", () => {
  const product = createEntity({
    entityId: "orc:product:001",
    type: "product"
  });

  attachIdentifier(product, {
    scheme: "ean",
    value: "789000000001"
  });

  const result = resolveObservation({
    observation: {
      identifiers: [
        { scheme: "ean", value: "789000000001" }
      ]
    },
    entities: [product]
  });

  assert.equal(result.status, "RESOLVED");
  assert.equal(result.entity_id, "orc:product:001");
  assert.equal(result.matched_by.scheme, "ean");
});

test("returns UNCERTAIN when no entity matches", () => {
  const result = resolveObservation({
    observation: {
      identifiers: [
        { scheme: "ean", value: "789000000099" }
      ]
    },
    entities: []
  });

  assert.equal(result.status, "UNCERTAIN");
  assert.deepEqual(result.candidates, []);
});

test("returns CONFLICT when an identifier resolves to multiple entities", () => {
  const first = createEntity({
    entityId: "orc:product:001",
    type: "product"
  });

  const second = createEntity({
    entityId: "orc:product:002",
    type: "product"
  });

  attachIdentifier(first, {
    scheme: "ean",
    value: "789000000001"
  });

  attachIdentifier(second, {
    scheme: "ean",
    value: "789000000001"
  });

  const result = resolveObservation({
    observation: {
      identifiers: [
        { scheme: "ean", value: "789000000001" }
      ]
    },
    entities: [first, second]
  });

  assert.equal(result.status, "CONFLICT");
  assert.equal(result.entity_id, null);
  assert.deepEqual(result.candidates, [
    "orc:product:001",
    "orc:product:002"
  ]);
});
