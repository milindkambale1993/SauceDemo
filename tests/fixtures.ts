import{test as base,expect}from "@playwright/test";
import{LoginPage} from '../pages/loginPage'
import{InventoryPage}from '../pages/inventoryPage'
import{CartPage} from '../pages/cartPage'
import{CheckoutPage} from '../pages/checkoutPage'

type pageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage:CartPage;
    checkoutPage:CheckoutPage;
};

export const test = base.extend<pageFixtures>({
    loginPage: async ({page},use)=>{
        await use (new LoginPage(page));

        },
        inventoryPage: async ({page},use)=>{
            await use (new InventoryPage(page));
        },
        
        cartPage: async ({page},use)=>{
            await use (new CartPage(page))
        },

        checkoutPage: async ({page},use)=>{
            await use (new CheckoutPage(page))

        },
    });

    export {expect} ;  

        
