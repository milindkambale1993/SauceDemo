import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.cartItems = page.locator('.cart_item');
  }

  async openCheckout() {
    await this.checkoutButton.click();
  }

  async productVisible(productName: string) {
    return this.page.getByText(productName).isVisible();
  }
}
