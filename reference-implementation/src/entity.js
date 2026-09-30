export function createEntity({ entityId, type = "unknown", attributes = {} } = {}) {
  if (!entityId) throw new Error("entityId is required");

  return {
    entity_id: entityId,
    type,
    identifiers: [],
    attributes: { ...attributes },
    observations: [],
    assertions: [],
    evidence: [],
    relations: [],
    history: []
  };
}

export function attachIdentifier(entity, { scheme, value, source = null } = {}) {
  if (!scheme || !value) throw new Error("scheme and value are required");

  const normalizedValue = String(value).trim();

  const exists = entity.identifiers.some(
    (identifier) =>
      identifier.scheme === scheme &&
      identifier.value === normalizedValue
  );

  if (!exists) {
    entity.identifiers.push({
      scheme,
      value: normalizedValue,
      source
    });
  }

  return entity;
}
