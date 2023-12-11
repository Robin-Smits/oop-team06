import CanvasUtil from '../Misc/CanvasUtil.js';
import DungeonEnemy from '../Enemys/DungeonEnemy.js';
import Player from '../Game/Player.js';

export default class DungeonEnemyBald extends DungeonEnemy {
  private goingUp: boolean;

  public constructor(
    speed: number,
    maxX: number,
    maxY: number,
  ) {
    super();
    this.facingDown = [
      CanvasUtil.loadNewImage('./assets/enemyBald/down1.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/down2.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/down3.png'),
    ];
    this.facingUp = [
      CanvasUtil.loadNewImage('./assets/enemyBald/up1.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/up2.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/up3.png'),
    ];
    this.facingLeft = [
      CanvasUtil.loadNewImage('./assets/enemyBald/left1.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/left2.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/left3.png'),
    ];
    this.facingRight = [
      CanvasUtil.loadNewImage('./assets/enemyBald/right1.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/right2.png'),
      CanvasUtil.loadNewImage('./assets/enemyBald/right3.png'),
    ];
    this.speed = speed;
    this.maxX = maxX;
    this.maxY = maxY;
    this.image = this.facingDown.at(0);
    this.posX = this.maxX * 0.78;
    this.posY = this.maxY * 0.175;
    // Top - right / start
    // this.posX = this.maxX * 0.78;
    // this.posY = this.maxY * 0.175;
    // Bottom - right
    // this.posX = this.maxX * 0.78;
    // this.posY = this.maxY * 0.345;
    // Mid - left
    // this.posX = this.maxX * 0.698;
    // this.posY = this.maxY * 0.345;
    // Bottom - left
    // this.posX = this.maxX * 0.698
    // this.posY = this.maxY * 0.45;
    // top - left
    // this.posX = this.maxX * 0.698
    // this.posY = this.maxY * 0.175;
    this.timeToNextImage = 60;
    this.timesMoved = 0;
    this.goingUp = false;
  }

  /**
   * Updates the position of the enemy
   *
   * @param elapsed number
   */
  public update(elapsed:number): void {
    console.log(elapsed);

    this.timeToNextImage -= elapsed;
    if (this.timeToNextImage <= 0) {
      if (
        this.posX >= this.maxX * 0.78
        && this.posY >= this.maxY * 0.175
        && this.posY <= this.maxY * 0.345
        && this.goingUp === false
      ) {
        // down
        this.posX = this.maxX * 0.78;
        this.posY += this.speed;
        this.setDirection(1);
      } else if (
        this.posY >= this.maxY * 0.345
        && this.posX >= this.maxX * 0.725
        && this.posX <= this.maxX * 0.78
        && this.goingUp === false
      ) {
        // left
        this.posX -= this.speed;
        this.posY = this.maxY * 0.345;
        this.setDirection(2);
      } else if (
        this.posY === this.maxY * 0.345
        && this.posX >= this.maxX * 0.698
        && this.posX <= this.maxX * 0.725
        && this.goingUp === false
      ) {
        // left 2
        this.posX -= this.speed;
        this.setDirection(2);
      } else if (
        this.posX <= this.maxX * 0.698
        && this.posY >= this.maxY * 0.175
        && this.posY <= this.maxY * 0.45
        && this.goingUp === false
      ) {
        // down
        this.posX = this.maxX * 0.698;
        this.posY += this.speed;
        this.setDirection(1);
      } else if (
        this.posX === this.maxX * 0.698
        && this.posY >= this.maxY * 0.45
      ) {
        this.goingUp = true;
        this.posY = this.maxY * 0.449;
        this.posX = this.maxX * 0.698;
      } else if (
        this.posX === this.maxX * 0.698
        && this.posY >= this.maxY * 0.175
        && this.posY <= this.maxY * 0.45
        && this.goingUp === true
      ) {
        // up
        this.posY -= this.speed;
        this.setDirection(0);
      } else if (
        this.posY <= this.maxY * 0.175
        && this.posX >= this.maxX * 0.698
        && this.posX <= this.maxX * 0.78
      ) {
        // right
        this.posX += this.speed;
        this.posY = this.maxY * 0.175;
        this.goingUp = false;
        this.setDirection(3);
      }
      this.updateAnimation();
      this.timeToNextImage = 60;
    }
  }

  /**
   * Checks if the enemy catches the player
   *
   * @param player person to check if he is caught
   * @returns boolean
   */
  public collidesWithPlayer(player: Player): boolean {
    if (
      this.posX - (this.image.width * 2) <= player.getPosX()
      && this.posX + (player.getWidth() * 2) >= player.getPosX()
      && this.posY - (this.image.height * 2) <= player.getPosY()
      && this.posY + (player.getHeight() * 2) >= player.getPosY()
    ) {
      return true;
    }
    return false;
  }

  /**
   * Draws the hitbox for this enemy
   *
   * @param canvas to draw on
   */
  public drawHitbox(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillRectangle(canvas, this.posX - ((this.maxX * 0.029) / 2), this.posY - ((this.maxY * 0.078) / 2), this.maxX * 0.029, this.maxY * 0.078, 'White');
  }
}
