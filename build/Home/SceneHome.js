import Player from '../Game/Player.js';
import Scene from '../Misc/Scene.js';
import ScenePark from '../Park/ScenePark.js';
import CanvasUtil from '../Misc/CanvasUtil.js';
import HomeWalls from '../Home/HomeWalls.js';
export default class SceneHome extends Scene {
    player;
    nextScene;
    walls;
    constructor(maxX, maxY, scoreboard) {
        super(maxX, maxY, scoreboard);
        this.player = new Player(maxX * 0.15, maxY * 0.55, 3.5, 1, maxX, maxY);
        this.walls = new HomeWalls(maxX, maxY);
        this.nextScene = null;
        this.maxX = maxX;
        this.maxY = maxY;
        document.body.style.backgroundImage = "url('./assets/homeMap.png')";
    }
    processInput(keyListener) {
        if (keyListener.isKeyDown('ArrowLeft') || keyListener.isKeyDown('KeyA')) {
            this.player.move('left');
            this.player.update(6);
        }
        if (keyListener.isKeyDown('ArrowRight') || keyListener.isKeyDown('KeyD')) {
            this.player.move('right');
            this.player.update(6);
        }
        if (keyListener.isKeyDown('ArrowUp') || keyListener.isKeyDown('KeyW')) {
            this.player.move('up');
            this.player.update(6);
        }
        if (keyListener.isKeyDown('ArrowDown') || keyListener.isKeyDown('KeyS')) {
            this.player.move('down');
            this.player.update(6);
        }
        if (!keyListener.isKeyDown('ArrowLeft')
            || !keyListener.isKeyDown('ArrowRight')
            || !keyListener.isKeyDown('ArrowUp')
            || !keyListener.isKeyDown('ArrowDown')
            || keyListener.isKeyDown('KeyW')
            || keyListener.isKeyDown('KeyA')
            || keyListener.isKeyDown('KeyS')
            || keyListener.isKeyDown('KeyD')) {
            this.player.update(0);
        }
        if ((keyListener.keyPressed('KeyE') || keyListener.keyPressed('Space'))
            && this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.875
            && this.player.getPosX() <= (this.maxX * 0.875) + (this.maxX * 0.11)
            && this.player.getPosY() >= this.maxY * 0.40
            && this.player.getPosY() <= (this.maxY * 0.40) + (this.maxY * 0.12)) {
            this.nextScene = new ScenePark(this.maxX, this.maxY, this.scoreboard);
        }
    }
    update() {
        this.walls.update(this.player);
        return this.nextScene;
    }
    render(canvas, translator) {
        this.player.render(canvas);
        CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/objectiveBorderL.png'), 0, 0);
        CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go outside'), 15, 35, 'left', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=SceneHome.js.map