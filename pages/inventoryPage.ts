import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly sortDropdown: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('.product_sort_container');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addToCart(productName: string) {
    const item = this.inventoryItems.filter({
      has: this.page.getByText(productName),
    }).first();

    await item.locator('button').click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(value);
  }
}
