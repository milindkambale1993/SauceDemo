# Task A — AI Prompt Log

## Purpose
This log captures AI-generated testing ideas, human review, and final validation decisions.

| # | Prompt | AI suggestion | Human validation | Final decision |
|---|---|---|---|---|
| 1 | "List the highest-risk flows for SauceDemo login and checkout." | Focus on login validation, cart count, and order completion. | Relevant to critical business journeys. | Accepted |
| 2 | "Generate negative tests for login page validation." | Cover empty fields, invalid usernames, and blocked access. | Reasonable and aligned to the actual app behavior. | Accepted |
| 3 | "Suggest product and cart exploratory checks." | Review sort behavior, cart badge count, and item consistency. | Useful for coverage and validated in the live app. | Accepted |
| 4 | "What should be checked before ordering is submitted?" | Required fields, totals, and checkout overview consistency. | Valid and relevant to user risk. | Accepted |
| 5 | "What confirms a successful order completion flow?" | Confirmation page text and order completion state. | Important to validate and observed successfully. | Accepted |

## Rejected suggestions
- Duplicate negative cases with no new risk dimension.
- Unsupported assumptions about backend inventory or pricing logic not visible in the browser flow.
- Any defect suggestion without direct evidence or reproduction.

## Final assessment
The prompts were useful in prioritizing risks and coverage. Human review filtered out unsupported or redundant ideas. The retained scenarios align with real product behavior and were validated with browser activity and automation execution.
