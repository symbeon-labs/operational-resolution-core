export function createEvidence({
  evidenceId,
  type,
  source,
  capturedAt,
  reference,
  metadata = {}
} = {}) {
  if (!evidenceId) throw new Error("evidenceId is required");
  if (!type) throw new Error("type is required");
  if (!source) throw new Error("source is required");
  if (!capturedAt) throw new Error("capturedAt is required");

  return {
    evidence_id: evidenceId,
    type,
    source,
    captured_at: capturedAt,
    reference: reference ?? null,
    metadata: { ...metadata }
  };
}
