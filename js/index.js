var config = {
  type: Phaser.AUTO,
  width: 900,
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
var platforms;
var cursors;
var star;
var game = new Phaser.Game(config);

function preload() {
  this.load.image('sky','assets/cielo.png');
  this.load.image('ground','assets/platform.png');
  this.load.image('star','assets/star.png');
  this.load.image('bomb','assets/bomb.png');
  this.load.spritesheet(
  'dude',
  'assets/dude.png',
  {frameWidth: 32, frameHeight: 48}
  );
}

 function create() {
   const background = this.add.image(450, 300, 'sky');
   background.displayWidth = game.config.width;
   background.displayHeight = game.config.height;

  //this will create all platforms in the game
  setPlatforms(this);

 // this will create a player in the game
  createPlayer(this);

//this will create all animations left, turn. right
  createAnimations(this);



 cursors= this.input.keyboard.createCursorKeys();

 stars = this.physics.add.group({
   key: 'star',
   repeat: 11,
   setXY: {x: 12, y: 0, stepX: 70}
 })

 stars.children.iterate(function (child){
   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
 });

 this.physics.add.collider(player, platforms);
 this.physics.add.collider(stars, platforms);

 this.physics.add.overlap(player, stars, collectStar, null, this);

 }

function update() {
  if (cursors.left.isDown){
    player.setVelocityX(-160);
    player.anims.play('left',true);
  } else   if(cursors.right.isDown){
    player.setVelocityX(160);
    player.anims.play('right',true);
  }  else{
    player.setVelocityX(0);
    player.anims.play('turn');
  }
if(cursors.up.isDown && player.body.touching.down){
  player.setVelocityY(-360);
}
}

function setPlatforms (self){
  platforms = self.physics.add.staticGroup();

    platforms.create(400,568,'ground').setScale(2).refreshBody();
    platforms.create(600,400,'ground');
    platforms.create(50,250,'ground');
    platforms.create(750,220,'ground');
}

function createPlayer(self) {

     player= self.physics.add.sprite(100,450,'dude');
     player.setBounce(0.2);
     player.setCollideWorldBounds(true);

}
function createAnimations(self) {
   self.anims.create({
      key: 'left',
      frames: self.anims.generateFrameNumbers('dude',{start:0,end:3}),
      frameRate:10,
      repeat:-1
    });

    self.anims.create({
      key: 'turn',
      frames: [{key:'dude', frame: 4}],
      frameRate:20
  });

   self.anims.create({
    key: 'right',
    frames:self.anims.generateFrameNumbers('dude',{start:5,end:8}),
    frameRate:10,
    repeat:-1
  });
}

function collectStar(player, star){
star.disableBody(true,true)
}
