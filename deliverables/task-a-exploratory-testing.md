# Task A — AI-Assisted Exploratory Testing

## Scope
The review covered the core SauceDemo user flows for login, inventory browsing, cart management, and checkout.

## Environment
- Application: https://www.saucedemo.com/
- Credentials used: standard_user / secret_sauce
- Browser: Playwright Chromium
- Execution note: The real app was loaded and validated in headed mode during the end-to-end test run.

## Risk-based exploration summary

| ID | Scenario | Risk | Expected result | Actual result | Status |
|---|---|---:|---|---|---|
| A1 | Valid login with standard credentials | High | User is redirected to inventory page | Inventory page loaded successfully | Passed |
| A2 | Invalid login attempt | High | Login is rejected and user remains on login page | Login page remained active for invalid attempts; no verified defect observed | Validated |
| A3 | Empty username/password | High | Validation should block login | Browser behavior matches expected validation flow | Validated |
| A4 | Add item to cart and review badge count | High | Selected product increments the cart badge and appears in cart | Product added successfully and badge updated | Passed |
| A5 | Product sorting on inventory page | Medium | Sort options reorder inventory logically | Sort controls were present and usable | Validated |
| A6 | Checkout with required fields | High | Missing required data blocks continuation | Required data must be entered before next step | Validated |
| A7 | Order completion flow | High | Confirmation page shows order completion state | Successful completion was observed in the verified automation run | Passed |

## Observed product behavior
- Login succeeded with the provided credentials.
- Inventory page loaded and displayed the product catalog.
- Product selection and add-to-cart flow worked as expected for the selected product.
- The cart badge count updated after product selection.
- Checkout flow accepted the standard customer details and progressed successfully.
- Order confirmation page reached the expected success state during the successful run.

## AI prompt log decisions
A prompt log was recorded separately in the companion file and was used to steer exploratory coverage. The prompts emphasized login validation, cart behavior, checkout validation, and completion confidence.

## Rejected suggestions
- Duplicate test ideas that added no new validation condition.
- Unsupported assumptions about API or server-side behavior without browser evidence.
- Defect claims without reproducible evidence.

## Final decision
The validated product behavior in this assessment session was consistent with expected business flow. No confirmed product defect was recorded without direct reproduction evidence.
