const tabBar = require("../screenobjects/components/tabbar");
const loginScreen = require("../screenobjects/login.screen");
const userData = require("../fixtures/user");

describe("Login functionality check", async () => {
    it("should login with valid credentials", async () => {
        await tabBar.selectLoginTab();
        await loginScreen.login(userData.email, userData.password);

        await expect(await loginScreen.getAlertBox()).toBeDisplayed();
        await expect(await loginScreen.getSuccessMsg()).toHaveText("You are logged in!");
    });
});
