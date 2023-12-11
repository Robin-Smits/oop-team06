import Button from '../Misc/Button.js';
import CanvasUtil from '../Misc/CanvasUtil.js';
import Crates from '../Misc/Crates.js';
import DungeonEnemyBald from '../Enemys/DungenEnemyBald.js';
import DungeonEnemy from '../Enemys/DungeonEnemy.js';
import DungeonEnemyTwo from '../Enemys/DungeonEnemyTwo.js';
import DungeonQuiz from '../Dungeon/DungeonQuiz.js';
import DungeonWalls from '../Dungeon/DungeonWalls.js';
import GreenDoors from '../Misc/GreenDoors.js';
import KeyListener from '../Game/KeyListener.js';
import Locale from '../Misc/Locale.js';
import Player from '../Game/Player.js';
import RedDoors from '../Misc/RedDoors.js';
import Scene from '../Misc/Scene.js';
import ScenePark from '../Park/ScenePark.js';

export default class SceneDungeon extends Scene {
  private player: Player;

  private nextScene: Scene;

  private buttons: Button;

  private redDoors: RedDoors;

  private greenDoors: GreenDoors;

  private dungeonWalls: DungeonWalls;

  private inGameItem: Crates[];

  private opponents: DungeonEnemy[];

  private playerTools: number;

  private paused: boolean;

  private quiz: DungeonQuiz;

  public constructor(maxX: number, maxY: number, scoreboard: Array<number>) {
    super(maxX, maxY, scoreboard);
    this.player = new Player(maxX * 0.48, maxY * 0.45, 1, 2, maxX, maxY);
    this.nextScene = null;
    this.maxX = maxX;
    this.maxY = maxY;
    this.inGameItem = [];
    this.opponents = [];
    this.opponents.push(new DungeonEnemyBald(6, maxX, maxY));
    this.opponents.push(new DungeonEnemyTwo(8, maxX, maxY));
    this.dungeonWalls = new DungeonWalls(maxX, maxY);
    this.buttons = new Button(maxX, maxY);
    this.redDoors = new RedDoors(maxX, maxY, 'forrestgreen');
    this.greenDoors = new GreenDoors(maxX, maxY, 'red');
    this.inGameItem.push(new Crates(this.maxX * 0.85, this.maxY * 0.7));
    this.inGameItem.push(new Crates(this.maxX * 0.375, this.maxY * 0.75));
    this.inGameItem.push(new Crates(this.maxX * 0.61, this.maxY * 0.07));
    this.inGameItem.push(new Crates(this.maxX * 0.475, this.maxY * 0.375));
    this.inGameItem.push(new Crates(this.maxX * 0.54, this.maxY * 0.1));
    this.inGameItem.push(new Crates(this.maxX * 0.59, this.maxY * 0.375));
    this.quiz = new DungeonQuiz(maxX, maxY);
    this.playerTools = 0;
    this.paused = false;
    document.body.style.backgroundImage = "url('./assets/dungeonMap.png')";
  }

  /**
   * Processes the users input
   *
   * @param keyListener keylistener
   */
  public processInput(keyListener: KeyListener): void {
    if (this.paused === false) {
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
    }
    // pauses player if there is no movement
    if (!keyListener.isKeyDown('ArrowLeft')
    || !keyListener.isKeyDown('ArrowRight')
    || !keyListener.isKeyDown('ArrowUp')
    || !keyListener.isKeyDown('ArrowDown')
    || keyListener.isKeyDown('KeyW')
    || keyListener.isKeyDown('KeyA')
    || keyListener.isKeyDown('KeyS')
    || keyListener.isKeyDown('KeyD')
    ) {
      this.player.update(0);
    }
    if ((keyListener.keyPressed('KeyE') || keyListener.keyPressed('Space')) && this.paused === false
    ) {
      if (this.buttons.playerAtRedButton(this.player)) {
        this.redDoors.switchState();
      }
      if (this.buttons.playerAtGreenButton(this.player)) {
        this.greenDoors.switchState();
      }
      // next level
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.732
      && this.player.getPosX() <= (this.maxX * 0.732) + (this.maxX / 50)
      && this.player.getPosY() >= this.maxY * 0.034
      && this.player.getPosY() <= (this.maxY * 0.034) + (this.maxY / 25)) {
        if (this.scoreboard.at(3) !== 1) {
          this.scoreboard[0] += this.quiz.getScore();
          this.scoreboard[1] += this.quiz.getMistakes();
          this.scoreboard[3] = 1;
        }
        this.nextScene = new ScenePark(this.maxX, this.maxY, this.scoreboard);
      }
      for (let index = 0; index < this.inGameItem.length; index++) {
        if (this.inGameItem[index].update(this.player)) {
          this.playerTools += 1;
          this.paused = true;
          this.inGameItem.splice(index, 1);
        }
      }
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.375
      && this.player.getPosX() <= (this.maxX * 0.375) + (this.maxX / 50)
      && this.player.getPosY() >= this.maxY * 0.35
      && this.player.getPosY() <= (this.maxY * 0.35) + (this.maxY / 25)
      && this.playerTools >= 1) {
        this.player.setPosY(this.maxY * 0.22);
      }
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.375
      && this.player.getPosX() <= (this.maxX * 0.375) + (this.maxX / 50)
      && this.player.getPosY() >= this.maxY * 0.23
      && this.player.getPosY() <= (this.maxY * 0.23) + (this.maxY / 25)
      && this.playerTools >= 1) {
        this.player.setPosY(this.maxY * 0.35);
      }
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.893
      && this.player.getPosX() <= (this.maxX * 0.893) + (this.maxX / 50)
      && this.player.getPosY() >= this.maxY * 0.64
      && this.player.getPosY() <= (this.maxY * 0.64) + (this.maxY / 20)
      && this.playerTools === 6) {
        this.player.setPosY(this.maxY * 0.27);
      }
      if (this.player.getPosX() + this.player.getWidth() >= this.maxX * 0.893
      && this.player.getPosX() <= (this.maxX * 0.893) + (this.maxX / 50)
      && this.player.getPosY() >= this.maxY * 0.28
      && this.player.getPosY() <= (this.maxY * 0.28) + (this.maxY / 25)
      && this.playerTools === 6) {
        this.player.setPosY(this.maxY * 0.66);
      }
    }
    if ((keyListener.keyPressed('Digit1') || keyListener.keyPressed('KeyC')) && this.paused === true) {
      this.quiz.giveAnswer(1);
    }
    if ((keyListener.keyPressed('Digit2') || keyListener.keyPressed('KeyV')) && this.paused === true) {
      this.quiz.giveAnswer(2);
    }
    if ((keyListener.keyPressed('Digit3') || keyListener.keyPressed('KeyB')) && this.paused === true) {
      this.quiz.giveAnswer(3);
    }
  }

  /**
   * Updates the level
   *
   * @param elapsed number
   * @returns nextScene
   */
  public update(elapsed: number): Scene {
    if (this.paused === false) {
      for (let index = 0; index < this.opponents.length; index++) {
        this.opponents[index].update(elapsed);
        if (this.opponents[index].collidesWithPlayer(this.player)) {
          this.nextScene = new SceneDungeon(this.maxX, this.maxY, this.scoreboard);
        }
      }
      this.redDoors.update(this.player);
      this.greenDoors.update(this.player);
      this.dungeonWalls.update(this.player);
    }
    if (this.playerTools === 1) {
      if (this.quiz.getCurrentValue() === 2) {
        this.paused = false;
      }
    }
    if (this.playerTools === 2) {
      if (this.quiz.getCurrentValue() === 4) {
        this.paused = false;
      }
    }
    if (this.playerTools === 3) {
      if (this.quiz.getCurrentValue() === 6) {
        this.paused = false;
      }
    }
    if (this.playerTools === 4) {
      if (this.quiz.getCurrentValue() === 8) {
        this.paused = false;
      }
    }
    if (this.playerTools === 5) {
      if (this.quiz.getCurrentValue() === 10) {
        this.paused = false;
      }
    }
    if (this.playerTools === 6) {
      if (this.quiz.getCurrentValue() === 12) {
        this.paused = false;
      }
    }
    return this.nextScene;
  }

  /**
   * renders the level to the canvas
   *
   * @param canvas canvas to draw on
   * @param translator writes text in given language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    this.buttons.render(canvas);
    this.redDoors.render(canvas);
    this.greenDoors.render(canvas);
    CanvasUtil.writeTextToCanvas(canvas, 'START', this.maxX * 0.485, this.maxY * 0.315, 'center', undefined, 30, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('EXIT'), this.maxX * 0.743, this.maxY * 0.02, 'center', undefined, 20, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('RED BUTTON'), this.maxX * 0.39, this.maxY * 0.08, 'center', undefined, 20, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('GREEN BUTTON'), this.maxX * 0.55, this.maxY * 0.63, 'center', undefined, 20, 'white');
    // draw Legend
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/dungeonLegenda2.png'), this.maxX * 0.005, this.maxY * 0.72);
    CanvasUtil.writeTextToCanvas(canvas, translator.t('LEGEND'), this.maxX * 0.01, this.maxY * 0.7, 'left', undefined, 20, 'gold');
    // shows hitboxes
    // this.dungeonWalls.render(canvas);
    if (this.paused) {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('GAME PAUSED'), this.maxX / 2, this.maxY / 2, 'center', undefined, 40, 'white');
      CanvasUtil.writeTextToCanvas(canvas, translator.t('Answer the questions to continue'), this.maxX / 2, this.maxY / 1.8, 'center', undefined, 40, 'white');
      this.quiz.render(canvas, translator);
    }
    for (let index = 0; index < this.opponents.length; index++) {
      // this.opponents[index].drawHitbox(canvas);
      this.opponents[index].render(canvas);
    }
    for (let index = 0; index < this.inGameItem.length; index++) {
      this.inGameItem[index].render(canvas);
    }
    // tools visuals
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Shovel.png'), this.maxX * 0.378, this.maxY * 0.30);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Shovel.png'), this.maxX * 0.378, this.maxY * 0.25);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/pickaxe.png'), this.maxX * 0.89, this.maxY * 0.625);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Key.png'), this.maxX * 0.91, this.maxY * 0.625);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/pickaxe.png'), this.maxX * 0.89, this.maxY * 0.25);
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Key.png'), this.maxX * 0.91, this.maxY * 0.25);
    CanvasUtil.writeTextToCanvas(canvas, 'Tools:', this.maxX * 0.01, this.maxY * 0.05, 'left', undefined, 25, 'white');
    if (this.playerTools >= 1) {
      CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Shovel.png'), this.maxX * 0.05, this.maxY * 0.02);
      if (this.playerTools >= 3) {
        CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/pickaxe.png'), this.maxX * 0.07, this.maxY * 0.02);
        if (this.playerTools >= 6) {
          CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/icons/Key.png'), this.maxX * 0.09, this.maxY * 0.02);
        }
      }
    } else {
      CanvasUtil.writeTextToCanvas(canvas, translator.t('No tools'), this.maxX * 0.05, this.maxY * 0.05, 'left', undefined, 25, 'white');
    }
    this.player.render(canvas);
  }
}
