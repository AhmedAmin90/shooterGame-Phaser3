import Phaser from 'phaser';
import { sendData } from '../ScoreApi';
import ScrollingBackground from '../Objects/ScrollingBackground';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  init(s) {
    if (`${s}` === '[object Object]') this.score = 0;
    else this.score = s;
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, `GOOD TRIAL :) \nScore: ${this.score} \nCOME AGAIN AND PLAY`, {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
      const user = document.querySelector('div');
      user.classList.remove('show');
      user.classList.add('hide');
    });

    this.saveScore = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.6,
      'blueButton1',
    );
    this.saveText = this.add.text(
      0,
      0,
      'Save Score', { fontSize: '28px', fill: 'black' },
    );
    Phaser.Display.Align.In.Center(this.saveText, this.saveScore);

    this.saveScore.setInteractive();

    this.saveScore.on('pointerup', () => {
      const btn = document.querySelector('button');
      const user = document.querySelector('div');
      const input = document.querySelector('input');
      user.classList.remove('hide');
      user.classList.add('show');
      btn.addEventListener('click', () => {
        user.classList.remove('show');
        user.classList.add('hide');
        if (input.value !== null) { sendData(input.value, this.score.toString()); }
        input.value = '';
      });
    }, this);

    this.backgrounds = [];
    for (let i = 0; i < 1; i += 1) {
      const keys = ['sprBg0'];
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
}

export default GameOverScene;