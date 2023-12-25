const tabBar = require("../screenobjects/components/tabbar");
const formsScreen = require("../screenobjects/forms.screen");

describe("Form elements interactions check", async () => {
    it("should turn the switch on and off", async () => {
        await tabBar.selectFormsTab();

        await formsScreen.clickSwitch();
        await expect(await formsScreen.getSwitch()).toHaveText("ON");
        await expect(await formsScreen.getSwitchText()).toHaveText("Click to turn the switch OFF");

        await formsScreen.clickSwitch();
        await expect(await formsScreen.getSwitch()).toHaveText("OFF");
        await expect(await formsScreen.getSwitchText()).toHaveText("Click to turn the switch ON");
    });
});
