import CanvasUtil from '../Misc/CanvasUtil.js';
import Locale from '../Misc/Locale.js';

export default class SchoolQuiz {
  private questions: Array<Array<string>>;

  private answers: Array<number>;

  private score: number;

  private maxX: number;

  private maxY:number;

  private givenAnswer: number;

  private mistakes: number;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.score = 0;
    this.givenAnswer = 0;
    this.mistakes = 0;
    this.questions = [
      ['What is cyberbullying?', 'Answer the question', '1. A type of fishing that uses electronic equipment', '2. A type of computer virus', '3. Bullying someone through electronic means, such as social media or text messages'],
      ['What is the most common form of cyberbullying', 'Answer the question', '1. Posting mean comments on social media', '2. Sending blackmail emails', '3. Creating fake profiles to catfish'],
      ['you smell bad', 'WHAT IS YOUR RESPONSE?', '1. Tell him/her that she smells bad', '2. Just ignore him/her', '3. Respond with that they need to shut up'],
      ['You wanna come to my house', 'WHAT IS YOUR RESPONSE?', '1. Do not respond on this', '2. No are you crazy', '3. Yes where do you live?'],
      ['What are the consequences of cyberbullying?', 'Answer the question', '1. Legal action may be taken against the bully', '2. The victim may experience depression, anxiety, or other mental health issues', '3. Both A and B'],
    ];
    this.answers = [
      3, 1, 2, 1, 3,
    ];
  }

  /**
   * update
   */
  public update(): void {
    if (this.givenAnswer === this.answers[this.score]) {
      this.score += 1;
    }
    this.givenAnswer = 0;
  }

  /**
   * Gives the users answer
   *
   * @param answer number
   */
  public giveAnswer(answer: number): void {
    if (answer === this.answers[this.score]) {
      this.score += 1;
    } else { this.mistakes += 1; }
    this.givenAnswer = 0;
    console.log(this.score);
  }

  /**
   * Renders the quiz to the screen
   *
   * @param canvas canvas to draw on
   * @param translator writes text in the given language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    CanvasUtil.fillRectangle(canvas, (this.maxX / 2) - (950 / 2), (this.maxY / 2) - (600 / 2), 950, 600, 'black');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total score :number', { number: `${this.mistakes}` }), (this.maxX / 2) - 420, (this.maxY / 2) - 225, 'left', 'Arial', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total mistakes :number', { number: `${this.score}` }), (this.maxX / 2) - 420, (this.maxY / 2) - 250, 'left', 'Arial', 20, 'green');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.score][0]), (this.maxX / 2), (this.maxY / 2) - 150, 'center', 'Arial', 40, '#D3D3D3');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.score][1]), (this.maxX / 2), (this.maxY / 2) - 50, 'center', 'Arial', 30, '#90EE90');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.score][2]), (this.maxX / 2), (this.maxY / 2) + 10, 'center', 'Arial', 20, '#90EE90');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.score][3]), (this.maxX / 2), (this.maxY / 2) + 70, 'center', 'Arial', 20, '#90EE90');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.score][4]), (this.maxX / 2), (this.maxY / 2) + 130, 'center', 'Arial', 20, '#90EE90');
    CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/computer.png'), (this.maxX / 2) - (1260 / 2), (this.maxY / 2) - (700 / 2));
  }

  public getScore(): number {
    return this.score;
  }

  public getMistakes(): number {
    return this.mistakes;
  }
}
