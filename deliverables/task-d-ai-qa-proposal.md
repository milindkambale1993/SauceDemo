# Task D — AI Integration into the QA Lifecycle

AI can improve QA efficiency when used as a reasoning assistant and accelerator, not as a replacement for human judgment. In a real quality process, AI helps generate scenarios, accelerate automation, and summarize issues; the QA engineer still validates the result and owns the final decision.

## 1. Requirement analysis and test scenario generation
- What AI does: Identifies candidate test scenarios and missing edge cases from requirements.
- What QA validates: Business value, risk, and coverage against real user journeys.
- Risks: Hallucinated or irrelevant scenarios.
- Mitigation: Require traceability to requirements and human review.
- Success measure: Better coverage of critical paths before release.

## 2. Risk-based planning and exploratory testing
- What AI does: Suggests high-risk areas and exploratory checks.
- What QA validates: Relevance and evidence from a live browser session.
- Risks: Duplicate or low-value suggestions.
- Mitigation: Retain only ideas backed by product behavior or risk.
- Success measure: More efficient high-risk exploration.

## 3. Automation generation and maintenance
- What AI does: Drafts Playwright tests and suggests stable selectors.
- What QA validates: Selector reliability, assertion quality, and runtime behavior.
- Risks: Brittle tests and false confidence.
- Mitigation: Run tests, fix selectors, and review generated code.
- Success measure: Faster automation writing without flaky tests.

## 4. Defect triage and regression analysis
- What AI does: Summarizes failures and clusters related issues.
- What QA validates: Defect evidence, root cause, and business impact.
- Risks: AI can invent a cause without proof.
- Mitigation: Require reproduction and evidence before triage decisions.
- Success measure: Faster triage with higher confidence.

## Mandatory controls
- Human review is mandatory for critical decisions.
- AI can hallucinate defects and expected behavior.
- Sensitive information must never be exposed to unauthorized AI services.
- AI-generated tests must be executed and reviewed.
- Quality gates must rely on verified evidence, not AI confidence alone.
- CI/CD should fail on agreed critical checks, with explicit handling for flaky tests.
