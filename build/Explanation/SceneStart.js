import CanvasUtil from '../Misc/CanvasUtil.js';
import Scene from '../Misc/Scene.js';
import SceneStory from '../Explanation/SceneStory.js';
export default class StartScene extends Scene {
    starting;
    constructor(maxX, maxY, scoreboard) {
        super(maxX, maxY, scoreboard);
        this.starting = false;
        document.body.style.backgroundImage = "url('./assets/BackGroundGame.png')";
        this.maxX = maxX;
        this.maxY = maxY;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('Space') || keyListener.keyPressed('KeyE')) {
            this.starting = true;
        }
    }
    update() {
        if (this.starting) {
            return new SceneStory(this.maxX, this.maxY, 0, this.scoreboard);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, ('Social Media Adventure'), (this.maxX / 2), (this.maxY * 0.4), 'center', 'Impact', this.maxX * 0.075, 'black');
    }
}
//# sourceMappingURL=SceneStart.js.map