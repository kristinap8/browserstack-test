const AppScreen = require("./app.screen");

const logo = "~WebdriverIO logo";
const hiddenText = '//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.widget.TextView';

class SwipeScreen extends AppScreen {
    async getLogo() {
        return super.getElement(logo);
    }

    async getHiddenText() {
        return super.getElement(hiddenText);
    }

    async calculateSwipeCoords(xPercentage = 50, startYPercentage = 85, endYPercentage = 15) {
        const windowSize = await super.getWindowSize();
        const startY = (windowSize.height * startYPercentage) / 100;
        const endY = (windowSize.height * endYPercentage) / 100;
        const x = (windowSize.width * xPercentage) / 100;

        return { x, startY, endY };
    }

    async swipeUp(maxSwipes = 6) {
        let swipesCount = 0;
        const { x, startY, endY } = await this.calculateSwipeCoords();
        while (swipesCount <= maxSwipes && !(await super.isDisplayed(hiddenText) && await super.isDisplayed(logo))) {
            await super.performGesture(x, startY, x, endY);
            swipesCount++;
        }
    }
}

module.exports = new SwipeScreen();
