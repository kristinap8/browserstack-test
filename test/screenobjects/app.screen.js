class AppScreen {
    async getElement(selector) {
        return await $(selector);
    }

    async clickElement(selector) {
        await (await this.getElement(selector)).click();
    }

    async fillElement(selector, text) {
        await (await this.getElement(selector)).setValue(text);
    }

    async getElementLocation(selector) {
        return (await (await this.getElement(selector)).getLocation()).capabilities;
    }

    async getWindowSize() {
        return await browser.getWindowSize();
    }

    async getCenterCoords(selector) {
        const elementLocation = await this.getElementLocation(selector);
        return {
            x: elementLocation.x + elementLocation.width / 2,
            y: elementLocation.y + elementLocation.height / 2,
        };
    }

    async performGesture(startX, startY, endX, endY) {
        await browser.performActions([
            {
                type: 'pointer',
                id: "finger1",
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 250, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    }

    async isDisplayed(selector) {
        return await (await this.getElement(selector)).isDisplayed();
    }

    async pause(milliseconds) {
        await browser.pause(milliseconds);
    }
}

module.exports = AppScreen;
