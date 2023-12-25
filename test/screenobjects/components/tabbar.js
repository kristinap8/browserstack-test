const AppScreen = require("../app.screen");

const loginTab = "~Login";
const formsTab = "~Forms";
const swipeTab = "~Swipe";
const dragTab = "~Drag";

class TabBar extends AppScreen {
    async selectLoginTab() {
        await super.clickElement(loginTab);
    }

    async selectFormsTab() {
        await super.clickElement(formsTab);
    }

    async selectSwipeTab() {
        await super.clickElement(swipeTab);
    }

    async selectDragTab() {
        await super.clickElement(dragTab);
    }
}

module.exports = new TabBar();
