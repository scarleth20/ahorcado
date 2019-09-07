const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 1000,
  height: 630,
  scene: {
    preload: preload,
    create : create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.json('words', 'node_modules/an-array-of-spanish-words/palabras.json');
}

function create() {
  // Create background image
  const background = this.add.image(500, 315, 'sky');
  background.displayWidth = game.config.width;
  background.displayHeight = game.config.height;

  // Create graphics
  const graphics = this.add.graphics();

  // Build rectangles
  buildRectangles(this, graphics);

  const words = this.cache.json.get('words');
  const randomWord = words[Math.floor(Math.random() * words.length)];
}

function buildRectangles(self, graphics) {
  characters.forEach((character) => {
    graphics.lineStyle(2, 0xFF00FF, 1.0);
    graphics.fillStyle(0xFFFFFF, 1.0);
    graphics.fillRect(character.rectX, character.rectY, 40, 40);
    graphics.strokeRect(character.rectX, character.rectY, 40, 40);

    self.add.text(character.textX, character.textY, character.word, { color: '#000000', fontFamily: 'Arial', fontSize: 20, });
  });
}
