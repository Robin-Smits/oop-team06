import CanvasUtil from '../Misc/CanvasUtil.js';
import Scene from '../Misc/Scene.js';
import SceneStart from '../Explanation/SceneStart.js';
export default class SceneEnd extends Scene {
    goBack;
    constructor(maxX, maxY, scoreboard) {
        super(maxX, maxY, scoreboard);
        this.goBack = false;
        document.body.style.backgroundImage = "url('./assets/EndSceneBG.png')";
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('Space') || keyListener.keyPressed('KeyE')) {
            this.goBack = true;
        }
    }
    gradingSystem() {
        if (this.scoreboard.at(1) === 0) {
            return 'S';
        }
        if (this.scoreboard.at(1) > 0 && this.scoreboard.at(1) <= 2) {
            return 'A';
        }
        if (this.scoreboard.at(1) > 2 && this.scoreboard.at(1) <= 5) {
            return 'B';
        }
        if (this.scoreboard.at(1) > 5 && this.scoreboard.at(1) <= 8) {
            return 'C';
        }
        if (this.scoreboard.at(1) > 8 && this.scoreboard.at(1) <= 17) {
            return 'D';
        }
        return 'E';
    }
    update() {
        if (this.goBack) {
            return new SceneStart(this.maxX, this.maxY, [0, 0, 0, 0]);
        }
        return null;
    }
    render(canvas, translator) {
        CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total score :number', { number: `${this.scoreboard.at(0)}` }), this.maxX * 0.21, this.maxY * 0.32, 'center', 'Arial', this.maxX * 0.025, 'lime');
        CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total mistakes :number', { number: `${this.scoreboard.at(1)}` }), this.maxX * 0.79, this.maxY * 0.32, 'center', 'Arial', this.maxX * 0.025, 'red');
        CanvasUtil.writeTextToCanvas(canvas, this.gradingSystem(), this.maxX / 2, this.maxY * 0.6, 'center', 'Arial', this.maxX * 0.08, 'gold');
    }
}
//# sourceMappingURL=SceneEnd.js.map