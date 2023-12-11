import CanvasUtil from '../Misc/CanvasUtil.js';
import { Game } from '../Game/GameLoop.js';
import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';
import StartScene from '../Explanation/SceneStart.js';
export default class GameName extends Game {
    canvas;
    keyListener;
    currentScene;
    scoreboard;
    translator;
    constructor(canvas) {
        super();
        this.scoreboard = [0, 0, 0, 0];
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.translator = new Locale(Locale.getCurrentBrowserLocale());
        this.currentScene = new StartScene(canvas.width, canvas.height, this.scoreboard);
    }
    processInput() {
        if (this.keyListener.keyPressed('KeyN')) {
            this.translator = new Locale('nl');
        }
        if (this.keyListener.keyPressed('KeyM')) {
            this.translator = new Locale('en-US');
        }
        this.currentScene.processInput(this.keyListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null)
            this.currentScene = nextScene;
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas, this.translator);
    }
}
//# sourceMappingURL=GameName.js.map