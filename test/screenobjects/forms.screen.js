const AppScreen = require("./app.screen");

const switchElement = "~switch";
const switchText = "~switch-text";

class FormsScreen extends AppScreen {
    async getSwitch() {
        return await super.getElement(switchElement);
    }

    async getSwitchText() {
        return await super.getElement(switchText);
    }

    async clickSwitch() {
        await super.clickElement(switchElement);
    }
}

module.exports = new FormsScreen();
