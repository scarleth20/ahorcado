const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 800,
  height: 600,
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
  const background = this.add.image(400, 300, 'sky');
  background.displayWidth = game.config.width;
  background.displayHeight = game.config.height;
}
