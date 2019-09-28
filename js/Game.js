class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.json('words', 'node_modules/an-array-of-spanish-words/palabras.json');
  }

  create() {
    // Create background image
    const background = this.add.image(500, 315, 'sky');
    background.displayWidth = game.config.width;
    background.displayHeight = game.config.height;

    // Create graphics
    const graphics = this.add.graphics();

    // Build rectangles
    this.buildRectangles( graphics);

    const words = this.cache.json.get('words');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
  }

  }
}
