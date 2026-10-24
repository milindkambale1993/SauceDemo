import { defineConfig, devices } from '@playwright/test';
const dotenv=require('dotenv');

dotenv.config();

export const testCredentials ={
  username: process.env.SAUCEDDEMO_USERNAME || 'standard_user',
  password: process.env.SAUCEDDEMO_PASSWORD || 'secret_sauce'
};
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,
    testIdAttribute: 'data-test',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
