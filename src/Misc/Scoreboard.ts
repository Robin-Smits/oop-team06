export default class Scoreboard {
  private dungeonComplete: boolean;

  private schoolComplete: boolean;

  private mistakes: number;

  private score: number;

  public constructor() {
    this.score = 0;
    this.mistakes = 0;
    this.schoolComplete = false;
    this.dungeonComplete = false;
  }

  /**
   * Adds the score to the total
   *
   * @param score questions right
   */
  public addScore(score: number): void {
    this.score += score;
  }

  /**
   * Adds the mistakes to the total
   *
   * @param mistakes questions wrong
   */
  public addMistakes(mistakes: number): void {
    this.mistakes += mistakes;
  }

  public getScore(): number {
    return this.score;
  }

  public getMistakes(): number {
    return this.mistakes;
  }

  public getDungeonComplete(): boolean {
    return this.dungeonComplete;
  }

  public getSchoolComplete(): boolean {
    return this.schoolComplete;
  }

  /**
   * Sets the given level to completed
   *
   * @param level 0 = dungeon, 1 = school
   */
  public completeLevels(level: number): void {
    if (level === 0) {
      this.dungeonComplete = true;
    }
    if (level === 1) {
      this.schoolComplete = true;
    }
  }
}
