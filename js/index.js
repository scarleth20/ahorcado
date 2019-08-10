var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {y: 300},
      debug: false
    }
  },
  scene: {
    preload: preload,
    create : create,
    update : update
  }
};

var player ;
var stars;
var platforms;
var cursors;
var game = new Phaser.Game(config);

  function preload() {
    this.load.image('sky','assets/cielo.png');
  }

 function create() {
   const background = this.add.image(400, 300, 'sky');
   background.displayWidth = game.config.width;
   background.displayHeight = game.config.height;
 }

  function update() {
  }
