const tabBar = require("../screenobjects/components/tabbar");
const dragScreen = require("../screenobjects/drag.screen");

describe("Drag and drop functionality check", async () => {
    it("should solve the puzzle by dragging the pieces into the puzzle", async () => {
        await tabBar.selectDragTab();
        await dragScreen.solvePuzzle();

        await dragScreen.pause(100);
        await expect(await dragScreen.getSuccessTitle()).toHaveText("Congratulations");
        await expect(await dragScreen.getSuccessMsg()).toHaveText("You made it, click retry if you want to try it again.");
    });
});
