import test from "node:test";
import assert from "node:assert/strict";

import { createVisionObservation } from "../src/vision-observation.js";

test("creates a provider-neutral vision observation", () => {
  const observation = createVisionObservation({
    observationId: "orc:observation:vision-001",
    observedAt: "2026-09-30T10:10:00-03:00",
    source: {
      type: "vision_model",
      id: "vision-01"
    },
    imageReference: "sha256:image-example",
    model: {
      provider: "local",
      name: "vision-model",
      version: "0.1"
    },
    detections: [
      {
        label: "bottle",
        confidence: 0.94
      }
    ],
    text: ["PRODUTO X", "500 ML"],
    identifiers: [
      {
        scheme: "ean",
        value: "789000000001",
        confidence: 0.99
      }
    ],
    attributes: {
      brand: "X",
      volume: "500 ml"
    },
    context: {
      operation: "product_registration"
    }
  });

  assert.equal(observation.modality, "vision");
  assert.equal(observation.image_reference, "sha256:image-example");
  assert.equal(observation.detections[0].label, "bottle");
  assert.equal(observation.detections[0].confidence, 0.94);
  assert.equal(observation.identifiers[0].value, "789000000001");
  assert.equal(observation.identifiers[0].confidence, 0.99);
  assert.equal(observation.attributes.volume, "500 ml");
});

test("allows vision observations without a model identifier", () => {
  const observation = createVisionObservation({
    observationId: "orc:observation:vision-002",
    observedAt: "2026-09-30T10:10:00-03:00",
    source: {
      type: "ocr_engine",
      id: "ocr-01"
    },
    imageReference: "sha256:image-example"
  });

  assert.equal(observation.model, null);
  assert.equal(observation.modality, "vision");
});

test("rejects a vision observation without an image reference", () => {
  assert.throws(
    () =>
      createVisionObservation({
        observationId: "orc:observation:vision-003",
        observedAt: "2026-09-30T10:10:00-03:00",
        source: {
          type: "vision_model",
          id: "vision-01"
        }
      }),
    /imageReference is required/
  );
});
