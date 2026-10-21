# Task C — Automation Notes

## What was implemented
- Playwright TypeScript test project configured in the workspace
- Browser automation for the SauceDemo happy path
- Use of real app selectors and browser-driven assertions
- Screenshot and tracing support on failure via Playwright config

## Verified execution result
The test was run in headed mode and passed successfully:

```bash
npx playwright test --headed
```

Observed output:
- `Running 1 test using 1 worker`
- `1 passed (32.8s)`

## AI-generated code and human corrections
- The initial draft used a generic approach and was revised to align with the live DOM structure.
- The selectors were corrected to match the actual SauceDemo page structure and user-visible labels.
- Assertions were kept meaningful and tied to the actual business flow.

## Known limitations
- The app is third-party and may change DOM structure in future versions.
- Follow-up tests should be kept focused on real user-critical behaviors.

## Execution instructions
```bash
cd "c:\Users\Admin\AI Assisted QA Assesment-SaurceDemo"
npx playwright test
```
