import Player from '../Game/Player.js';
import Scene from '../Misc/Scene.js';
import ScenePark from '../Park/ScenePark.js';
import CanvasUtil from '../Misc/CanvasUtil.js';
import SchoolQuiz from '../School/SchoolQuiz.js';
import SchoolWalls from '../School/SchoolWalls.js';
export default class SceneSchool extends Scene {
    player;
    nextScene;
    walls;
    computer;
    paused;
    quiz;
    quizCompleted;
    constructor(maxX, maxY, scoreboard) {
        super(maxX, maxY, scoreboard);
        this.player = new Player(maxX * 0.065, maxY * 0.275, 3, 1, maxX, maxY);
        this.walls = new SchoolWalls(maxX, maxY);
        this.nextScene = null;
        this.computer = new SchoolQuiz(this.maxX, this.maxY);
        this.paused = false;
        this.quiz = new SchoolQuiz(maxX, maxY);
        this.maxX = maxX;
        this.maxY = maxY;
        this.quizCompleted = false;
        document.body.style.backgroundImage = "url('./assets/schoolMap.png')";
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
        if (keyListener.keyPressed('KeyE') || keyListener.keyPressed('Space')) {
            if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.055
                && this.player.getPosX() <= (this.maxX * 0.055) + (this.maxX * 0.0625)
                && this.player.getPosY() >= this.maxY * 0.22
                && this.player.getPosY() <= (this.maxY * 0.22) + (this.maxY * 0.0825)) {
                this.nextScene = new ScenePark(this.maxX, this.maxY, this.scoreboard);
            }
            if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.83
                && this.player.getPosX() <= (this.maxX * 0.83) + (this.maxX * 0.133)
                && this.player.getPosY() >= this.maxY * 0.58
                && this.player.getPosY() <= (this.maxY * 0.58) + (this.maxY * 0.42)) {
                this.paused = true;
            }
        }
        if (keyListener.keyPressed('Digit1')) {
            this.quiz.giveAnswer(1);
        }
        if (keyListener.keyPressed('Digit2')) {
            this.quiz.giveAnswer(2);
        }
        if (keyListener.keyPressed('Digit3')) {
            this.quiz.giveAnswer(3);
        }
        if (this.quiz.getScore() === 5) {
            this.paused = false;
            this.quizCompleted = true;
            if (this.scoreboard.at(2) !== 1) {
                this.scoreboard[0] += this.quiz.getScore();
                this.scoreboard[1] += this.quiz.getMistakes();
                this.scoreboard[2] = 1;
            }
        }
    }
    update() {
        this.walls.update(this.player);
        return this.nextScene;
    }
    render(canvas, translator) {
        this.player.render(canvas);
        if (this.paused) {
            this.computer.render(canvas, translator);
            this.quiz.render(canvas, translator);
        }
        const objectiveBorder = CanvasUtil.loadNewImage('./assets/objectiveBorderR.png');
        CanvasUtil.drawImage(canvas, objectiveBorder, canvas.width - objectiveBorder.width, 0);
        if (this.quizCompleted) {
            CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go to the computer'), canvas.width - objectiveBorder.width * 0.95, 30, 'left', 'Arial', 20, '#90EE90');
            CanvasUtil.writeTextToCanvas(canvas, translator.t('- Exit the school'), canvas.width - objectiveBorder.width * 0.95, 70, 'left', 'Arial', 20, 'white');
        }
        else {
            CanvasUtil.writeTextToCanvas(canvas, translator.t('- Go to the computer'), canvas.width - objectiveBorder.width * 0.95, 30, 'left', 'Arial', 20, 'white');
        }
    }
}
//# sourceMappingURL=SceneSchool.js.map