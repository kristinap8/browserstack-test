const tabBar = require('../screenobjects/components/tabbar');
const swipeScreen = require('../screenobjects/swipe.screen');

describe("Swipe functionality check", async () => {
    it("should swipe vertical to find the surprise", async () => {
        await tabBar.selectSwipeTab();
        await swipeScreen.swipeUp();

        await swipeScreen.pause(100);
        await expect(await swipeScreen.getLogo()).toBeDisplayed();
        await expect(await swipeScreen.getHiddenText()).toHaveText('You found me!!!');
    });
});