import test from "node:test";
import assert from "node:assert/strict";

import { createObservation } from "../src/observation.js";

test("creates an observation with source and temporal provenance", () => {
  const observation = createObservation({
    observationId: "orc:observation:001",
    observedAt: "2026-09-30T10:00:00-03:00",
    source: { type: "scanner", id: "scanner-01" },
    identifiers: [{ scheme: "ean", value: " 789000000001 " }],
    attributes: { quantity: 97 },
    context: { location: "receiving-dock-01" }
  });

  assert.equal(observation.observation_id, "orc:observation:001");
  assert.equal(observation.observed_at, "2026-09-30T10:00:00-03:00");
  assert.deepEqual(observation.source, { type: "scanner", id: "scanner-01" });
  assert.deepEqual(observation.identifiers, [
    { scheme: "ean", value: "789000000001" }
  ]);
  assert.equal(observation.attributes.quantity, 97);
  assert.equal(observation.context.location, "receiving-dock-01");
});

test("rejects an observation without source", () => {
  assert.throws(
    () => createObservation({
      observationId: "orc:observation:002",
      observedAt: "2026-09-30T10:00:00-03:00"
    }),
    /source is required/
  );
});
