export function createAssertion({
  assertionId,
  subject,
  predicate,
  value,
  assertedAt,
  source,
  context = {},
  basedOn = []
} = {}) {
  if (!assertionId) throw new Error("assertionId is required");
  if (!subject) throw new Error("subject is required");
  if (!predicate) throw new Error("predicate is required");
  if (value === undefined) throw new Error("value is required");
  if (!assertedAt) throw new Error("assertedAt is required");
  if (!source) throw new Error("source is required");

  return {
    assertion_id: assertionId,
    subject,
    predicate,
    value,
    asserted_at: assertedAt,
    source,
    context: { ...context },
    based_on: [...basedOn]
  };
}
