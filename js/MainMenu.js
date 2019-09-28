class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload() {
      this.load.image('sky', 'assets/play.png');
  }

  create() {
    const background = this.add.image(500, 315, 'sky');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;

    const play= this.add.image(400,530,'play');
    play.setInteractive();
    play.once('pointerup', () => this.scene.start('levels'), this);
  }
}
