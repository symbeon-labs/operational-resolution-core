export function resolveObservation({ observation, entities }) {
  if (!observation) throw new Error("observation is required");

  const candidates = [];

  for (const entity of entities) {
    for (const observedIdentifier of observation.identifiers ?? []) {
      const match = entity.identifiers.find(
        (identifier) =>
          identifier.scheme === observedIdentifier.scheme &&
          identifier.value === String(observedIdentifier.value).trim()
      );

      if (match) {
        candidates.push({
          entity,
          matched_identifier: match,
          observed_identifier: observedIdentifier
        });
      }
    }
  }

  const uniqueEntities = [
    ...new Map(
      candidates.map((candidate) => [candidate.entity.entity_id, candidate])
    ).values()
  ];

  if (uniqueEntities.length === 1) {
    const candidate = uniqueEntities[0];
    return {
      status: "RESOLVED",
      entity_id: candidate.entity.entity_id,
      observation_id: observation.observation_id,
      matched_by: {
        scheme: candidate.matched_identifier.scheme,
        value: candidate.matched_identifier.value
      },
      candidates: [candidate.entity.entity_id]
    };
  }

  if (uniqueEntities.length > 1) {
    return {
      status: "CONFLICT",
      entity_id: null,
      observation_id: observation.observation_id,
      matched_by: null,
      candidates: uniqueEntities.map((candidate) => candidate.entity.entity_id)
    };
  }

  return {
    status: "UNCERTAIN",
    entity_id: null,
    observation_id: observation.observation_id,
    matched_by: null,
    candidates: []
  };
}
