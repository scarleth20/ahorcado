class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload() {
    this.load.image('background', 'assets/mainmenu/background.png');
  }

  create() {
    const background = this.add.image(500, 315, 'background').setInteractive();
    background.once('pointerup', () => this.scene.start('game'), this);
  }
}
