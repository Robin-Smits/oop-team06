export default class Scoreboard {
    dungeonComplete;
    schoolComplete;
    mistakes;
    score;
    constructor() {
        this.score = 0;
        this.mistakes = 0;
        this.schoolComplete = false;
        this.dungeonComplete = false;
    }
    addScore(score) {
        this.score += score;
    }
    addMistakes(mistakes) {
        this.mistakes += mistakes;
    }
    getScore() {
        return this.score;
    }
    getMistakes() {
        return this.mistakes;
    }
    getDungeonComplete() {
        return this.dungeonComplete;
    }
    getSchoolComplete() {
        return this.schoolComplete;
    }
    completeLevels(level) {
        if (level === 0) {
            this.dungeonComplete = true;
        }
        if (level === 1) {
            this.schoolComplete = true;
        }
    }
}
//# sourceMappingURL=Scoreboard.js.map