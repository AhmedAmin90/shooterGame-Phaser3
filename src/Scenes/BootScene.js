import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/my_logo3.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default  BootScene