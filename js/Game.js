class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });

    window.GAME = this;
  }

  preload() {
    this.load.image('sky', 'assets/game/sky.png');
    this.load.json('words', 'node_modules/an-array-of-spanish-words/palabras.json');
  }

  create() {
    // Create background image
    const sky = this.add.image(500, 315, 'sky');
    sky.displayWidth = this.game.config.width;
    sky.displayHeight = this.game.config.height;

    // Create graphics
    const graphics = this.add.graphics();

    // Build rectangles
    this.buildRectangles( graphics);

    const words = this.cache.json.get('words');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
  }

  buildRectangles(graphics) {
    characters.forEach(function(character) {
      graphics.lineStyle(2, 0xFF00FF, 1.0);
      graphics.fillStyle(0xFFFFFF, 1.0);
      graphics.fillRect(character.rectX, character.rectY, 40, 40);
      graphics.strokeRect(character.rectX, character.rectY, 40, 40);

      window.GAME.add.text(character.textX, character.textY, character.word, { color: '#000000', fontFamily: 'Arial', fontSize: 20 });
    });
  }
}
