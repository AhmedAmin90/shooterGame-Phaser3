import Phaser from 'phaser';
import ScrollingBackground from '../Objects/ScrollingBackground';

class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.soundOn = true;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.soundButton.setInteractive();

    this.soundButton.on('pointerdown', () => {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    });

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.updateAudio();

    this.backgrounds = [];
    for (let i = 0; i < 1; i += 1) {
      const keys = ['background2'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, 1 * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }

  updateAudio() {
    if (this.soundOn === false) {
      this.soundButton.setTexture('box');
      this.game.sound.mute = true;
    } else {
      this.soundButton.setTexture('checkedBox');
      this.game.sound.mute = false;
    }
  }


}

export default  OptionsScene