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
}

function create() {
  // Create background image
  const background = this.add.image(500, 315, 'sky');
  background.displayWidth = game.config.width;
  background.displayHeight = game.config.height;

  // Create graphics
  const graphics = this.add.graphics();

  // Create
  cuadrados(this, graphics);

  // Build rectangles
  buildRectangles(this, graphics);
}
// rectangles
// const digitado = this.add.rectangles();

function buildRectangles(self, graphics) {
  characters.forEach((character) => {
    graphics.lineStyle(2, 0xFF00FF, 1.0);
    graphics.fillStyle(0xFFFFFF, 1.0);
    graphics.fillRect(character.rectX, character.rectY, 40, 40);
    graphics.strokeRect(character.rectX, character.rectY, 40, 40);

    self.add.text(character.textX, character.textY, character.word, { color: '#000000', fontFamily: 'Arial', fontSize: 20, });
  });
}

function cuadrados(self, graphics) {
  graphics.fillRect(100, 100, 40, 40);
  graphics.strokeRect(100, 100, 40, 40);

  graphics.fillRect(150, 100, 40, 40);
  graphics.strokeRect(150, 100, 40, 40);

  graphics.fillRect(200, 100, 40, 40);
  graphics.strokeRect(200, 100, 40, 40);

  graphics.fillRect(250, 100, 40, 40);
  graphics.strokeRect(250, 100, 40, 40);

  graphics.fillRect(300, 100, 40, 40);
  graphics.strokeRect(300, 100, 40, 40);

  graphics.fillRect(350, 100, 40, 40);
  graphics.strokeRect(350, 100, 40, 40);

  graphics.fillRect(350, 100, 40, 40);
  graphics.strokeRect(350, 100, 40, 40);

  graphics.fillRect(400, 100, 40, 40);
  graphics.strokeRect(400, 100, 40, 40);

  graphics.fillRect(450, 100, 40, 40);
  graphics.strokeRect(450, 100, 40, 40);

  graphics.fillRect(500, 100, 40, 40);
  graphics.strokeRect(500, 100, 40, 40);

  graphics.fillRect(550, 100, 40, 40);
  graphics.strokeRect(550, 100, 40, 40);
}
