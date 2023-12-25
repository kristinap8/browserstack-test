const AppScreen = require("./app.screen");

const puzzlePieces = [
    "~drag-l1",
    "~drag-l2",
    "~drag-l3",
    "~drag-c1",
    "~drag-c2",
    "~drag-c3",
    "~drag-r1",
    "~drag-r2",
    "~drag-r3",
];
const emptyCells = [
    "~drop-l1",
    "~drop-l2",
    "~drop-l3",
    "~drop-c1",
    "~drop-c2",
    "~drop-c3",
    "~drop-r1",
    "~drop-r2",
    "~drop-r3",
];
const successTitle = '(//android.widget.TextView)[1]';
const successMsg = '(//android.widget.TextView[@text])[2]';

class DragScreen extends AppScreen {
    async getSuccessTitle() {
        return await super.getElement(successTitle);
    }

    async getSuccessMsg() {
        return await super.getElement(successMsg);
    }

    async solvePuzzle() {
        for (let i = 0; i < puzzlePieces.length; i++) {
            const coordsPuzzlePiece = await super.getCenterCoords(puzzlePieces[i]);
            const coordsEmptyCell = await super.getCenterCoords(emptyCells[i]);

            await super.performGesture(
                coordsPuzzlePiece.x,
                coordsPuzzlePiece.y,
                coordsEmptyCell.x,
                coordsEmptyCell.y
            );
        }
    }
}

module.exports = new DragScreen();
