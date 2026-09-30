const TERMINAL_STATUSES = new Set([
  "RESOLVED",
  "CONFLICT",
  "UNCERTAIN",
  "INCOMPLETE",
  "REQUIRES_VERIFICATION"
]);

export function createResolution({
  resolutionId,
  question,
  subject,
  status,
  assertions = [],
  evidence = [],
  context = {},
  reasons = []
} = {}) {
  if (!resolutionId) throw new Error("resolutionId is required");
  if (!question) throw new Error("question is required");
  if (!subject) throw new Error("subject is required");
  if (!TERMINAL_STATUSES.has(status)) {
    throw new Error("invalid resolution status");
  }

  return {
    resolution_id: resolutionId,
    question,
    subject,
    status,
    assertions: [...assertions],
    evidence: [...evidence],
    context: { ...context },
    reasons: [...reasons]
  };
}

export function resolveQuantity({
  resolutionId,
  subject,
  assertions = [],
  evidence = [],
  context = {}
} = {}) {
  const quantityAssertions = assertions.filter(
    (assertion) =>
      assertion.subject === subject &&
      assertion.predicate === "quantity"
  );

  if (quantityAssertions.length === 0) {
    return createResolution({
      resolutionId,
      question: "What quantity can be operationally supported?",
      subject,
      status: "UNCERTAIN",
      assertions: [],
      evidence,
      context,
      reasons: ["No quantity assertion is available."]
    });
  }

  const values = [...new Set(quantityAssertions.map((assertion) => assertion.value))];

  if (values.length === 1) {
    return createResolution({
      resolutionId,
      question: "What quantity can be operationally supported?",
      subject,
      status: "RESOLVED",
      assertions: quantityAssertions.map((assertion) => assertion.assertion_id),
      evidence: quantityAssertions.flatMap((assertion) => assertion.supported_by ?? []),
      context,
      reasons: ["All available quantity assertions agree."]
    });
  }

  return createResolution({
    resolutionId,
    question: "What quantity can be operationally supported?",
    subject,
    status: "REQUIRES_VERIFICATION",
    assertions: quantityAssertions.map((assertion) => assertion.assertion_id),
    evidence: quantityAssertions.flatMap((assertion) => assertion.supported_by ?? []),
    context,
    reasons: ["Conflicting quantity assertions are present."]
  });
}
