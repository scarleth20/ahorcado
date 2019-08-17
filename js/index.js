const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 1000,
  height: 600,
  scene: {
    preload: preload,
    create : create
  }
};

const characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

const game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/sky.png');
}

function create() {
  // Create background image
  const background = this.add.image(500, 300, 'sky');
  background.displayWidth = game.config.width;
  background.displayHeight = game.config.height;

  // Create graphics
  const graphics = this.add.graphics();

  // Build rectangles
  buildRectangles(this, graphics);
}

function buildRectangles(self, graphics) {
  let x = 50;

  characters.split('').forEach((character) => {
    graphics.lineStyle(5, 0xFF00FF, 1.0);
    graphics.fillStyle(0xFFFFFF, 1.0);
    graphics.fillRect(x, 500, 40, 40);
    graphics.strokeRect(x, 500, 40, 40);

    self.add.text(x + 12, 510, character, { color: '#000000', fontFamily: 'Arial', fontSize: 20, });

    x += 50;
  });
}
