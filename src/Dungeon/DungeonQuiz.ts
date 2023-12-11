import CanvasUtil from '../Misc/CanvasUtil.js';
import Locale from '../Misc/Locale.js';

export default class DungeonQuiz {
  private questions: Array<Array<string>>;

  private answers: Array<number>;

  private current: number;

  private score: number;

  private maxX: number;

  private maxY:number;

  private givenAnswer: number;

  private mistakes: number;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.current = 0;
    this.givenAnswer = 0;
    this.mistakes = 0;
    this.score = 0;
    this.questions = [
      ['1. What is a catfish account?', '1. An account to trick people into giving you data', "2. An account which isn't under your own name", "3. An account to do activities that you don't want your friends to see"],
      ["2. Are you a catfisher if you have an account which isn't under your name?", '1. Yes because you lie about your identity', '2. Yes because you can cyberbully without anyone knowing who you are', '3. No, only if you talk to people'],
      ['3. You get an message on Instagram, Who is certainly the real person?', '1. celebrity with an blue mark before their name', '2. Your mother', '3. celebrity'],
      ['4. What is the MOST DANGEROUS to share on the internet', '1. Family picture', '2. Favourite food', '3. Picture during holiday'],
      ['5. How can you protect yourself from catfishing?', "1. Don't give out personal information", '2. Search for images of the person your chatting with online', '3. All of the above'],
      ['6. Which way gives the biggest chance to unmask a catfisher', '1. Asking a lot of questions', '2. Facetime', '3. Follow him with a fake account'],
      ['7. Where is catfishing most common?', '1. Dating sites or apps', '2. Apps like WhatsApp, Instagram & Snapchat', '3. Chats in games'],
      ['8. What is the goal of most catfishers', '1. kidnap you', '2. Steal your data', '3. Gather data about you to use against you'],
      ['9. What is a sign of a catfish profile?', "1. a lot of photo's", '2. few followers / fake followers', '3. created recently'],
      ['10. What is the main source of images used to catfish?', '1. Accounts of celebrities', '2. Inactive social media accounts', '3. Accounts of Influencers'],
      ['11. What is the biggest difference between a hacker and a catfisher?', '1. What they want from you', '2. How they want to get it from you', '3. The damage they can cause'],
      ['12. What does kittenfishing mean?', "1. Use heavily edited foto's of yourself", "2. Use the name of someone else with your own foto's", '3. Catfishing a child'],

      ['press right', 'right', 'wrong', 'wrong'],
    ];
    this.answers = [
      2, 3, 1, 3, 3, 2, 1, 3, 2, 2, 2, 1, 1,
    ];
  }

  /**
   * update
   */
  public update(): void {
    if (this.givenAnswer === this.answers[this.current]) {
      this.current += 1;
    }
    this.givenAnswer = 0;
  }

  /**
   * Gives the users answer
   *
   * @param answer number
   */
  public giveAnswer(answer: number): void {
    if (answer === this.answers[this.current]) {
      this.current += 1;
      this.score += 1;
    } else { this.mistakes += 1; }
    this.givenAnswer = 0;
  }

  /**
   * Renders the quiz to the screen
   *
   * @param canvas canvas to draw on
   * @param translator writes text in given language
   */
  public render(canvas: HTMLCanvasElement, translator: Locale): void {
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total score :number', { number: `${this.mistakes}` }), this.maxX * 0.1, this.maxY * 0.1, 'left', 'Arial', 20, 'red');
    CanvasUtil.writeTextToCanvas(canvas, translator.t('- Total mistakes :number', { number: `${this.score}` }), this.maxX * 0.01, this.maxY * 0.1, 'left', 'Arial', 20, '#90EE90');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.current][0]), this.maxX * 0.01, this.maxY * 0.14, 'left', undefined, 20, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.current][1]), this.maxX * 0.01, this.maxY * 0.2, 'left', undefined, 18, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.current][2]), this.maxX * 0.01, this.maxY * 0.3, 'left', undefined, 18, 'white');
    CanvasUtil.writeTextToCanvas(canvas, translator.t(this.questions[this.current][3]), this.maxX * 0.01, this.maxY * 0.4, 'left', undefined, 18, 'white');
  }

  public getCurrentValue(): number {
    return this.current;
  }

  public getScore(): number {
    return this.score;
  }

  public getMistakes(): number {
    return this.mistakes;
  }
}
