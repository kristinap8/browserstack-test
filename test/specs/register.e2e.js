const tabBar = require("../screenobjects/components/tabbar");
const loginScreen = require("../screenobjects/login.screen");
const { generateRandomEmail, generateRandomPassword } = require("../helper/generator");

describe("Register functionality check", async () => {
    it("should register with valid credentials", async () => {
        await tabBar.selectLoginTab();
        await loginScreen.clickSignUpContainerBtn();
        await loginScreen.register(generateRandomEmail(), generateRandomPassword());

        await expect(await loginScreen.getAlertBox()).toBeDisplayed();
        await expect(await loginScreen.getSuccessMsg()).toHaveText("You successfully signed up!");
    });
});
