export function createObservation({
  observationId,
  observedAt,
  source,
  identifiers = [],
  attributes = {},
  context = {}
} = {}) {
  if (!observationId) throw new Error("observationId is required");
  if (!observedAt) throw new Error("observedAt is required");
  if (!source) throw new Error("source is required");

  return {
    observation_id: observationId,
    observed_at: observedAt,
    source,
    identifiers: identifiers.map(normalizeIdentifier),
    attributes: { ...attributes },
    context: { ...context }
  };
}

function normalizeIdentifier(identifier) {
  if (!identifier?.scheme || identifier.value === undefined) {
    throw new Error("identifier scheme and value are required");
  }

  return {
    scheme: identifier.scheme,
    value: String(identifier.value).trim()
  };
}
