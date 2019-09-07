const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 1000,
  height: 630,
  scene: [MainMenu, Game]
};

new Phaser.Game(config);
