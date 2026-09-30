export function createVisionObservation({
  observationId,
  observedAt,
  source,
  imageReference,
  model = null,
  detections = [],
  text = [],
  identifiers = [],
  attributes = {},
  context = {}
} = {}) {
  if (!observationId) throw new Error("observationId is required");
  if (!observedAt) throw new Error("observedAt is required");
  if (!source) throw new Error("source is required");
  if (!imageReference) throw new Error("imageReference is required");

  return {
    observation_id: observationId,
    observed_at: observedAt,
    source,
    modality: "vision",
    image_reference: imageReference,
    model,
    detections: detections.map(normalizeDetection),
    text: [...text],
    identifiers: identifiers.map(normalizeIdentifier),
    attributes: { ...attributes },
    context: { ...context }
  };
}

function normalizeDetection(detection) {
  if (!detection?.label) {
    throw new Error("detection label is required");
  }

  return {
    label: detection.label,
    confidence:
      detection.confidence === undefined ? null : detection.confidence,
    region: detection.region ?? null
  };
}

function normalizeIdentifier(identifier) {
  if (!identifier?.scheme || identifier.value === undefined) {
    throw new Error("identifier scheme and value are required");
  }

  return {
    scheme: identifier.scheme,
    value: String(identifier.value).trim(),
    confidence:
      identifier.confidence === undefined ? null : identifier.confidence
  };
}
