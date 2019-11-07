class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });

    window.GAME = this;
  }

 preload() {
    this.load.image('sky', 'assets/game/sky.png');
    this.load.json('words', 'node_modules/an-array-of-spanish-words/palabras.json');

    this.load.image('head', 'assets/toy/head.png');

    this.load.image('body', 'assets/toy/body.png');

    this.load.image('left-leg', 'assets/toy/left-leg.png');

    this.load.image('right-leg', 'assets/toy/right-leg.png');

    this.load.image('right-arm', 'assets/toy/right-arm.png');

    this.load.image('left-arm', 'assets/toy/left-arm.png');

    this.load.image('platform', 'assets/platform.png');
  }

 create() {
    // Create background image
    const sky = this.add.image(500, 315, 'sky');
    sky.displayWidth = this.game.config.width;
    sky.displayHeight = this.game.config.height;

    const head = this.add.image(800, 140, 'head');

    const body =  this.add.image(800, 218, 'body');

    const leftLeg =  this.add.image(822, 315, 'left-leg');

    const rightLeg =  this.add.image(780, 315, 'right-leg');

    const rightArm =  this.add.image(770, 220, 'right-arm');

    const leftArm =  this.add.image(829, 220, 'left-arm');

    const platform =  this.add.image(700, 210, 'platform');

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
      graphics.strokeRect(character.rectX, character.rectY,40 , 40);
      graphics.fillRect('character.rectX:180, character.rectY:160');
      graphics.strokeRect('character.rectX:170, character.rectY:190');


      window.GAME.add.text(character.textX, character.textY, character.word, { color: '#000000', fontFamily: 'Arial', fontSize: 20 });



    });
 }
