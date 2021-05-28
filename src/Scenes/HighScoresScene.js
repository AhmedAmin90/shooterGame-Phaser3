import Phaser from 'phaser';
import { getData } from '../ScoreApi';
import ScrollingBackground from '../Objects/ScrollingBackground';

class HighScoresScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HighScores' });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 100, 'TOP PLAYERS:', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    getData().then((data) => {
      // console.log(data);
      data.result.sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((game, i) => {
          const text = `Player Name: ${game.user} - Score: ${game.score}`;
          this.add.text(800 / 2, (65 * (i + 1.1)) + 100, text, {
            fontFamily: 'monospace',
            fontSize: '28px',
            color: 'white',
            align: 'center',
            lineHeight: '1',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    });

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });

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
}

export default HighScoresScene;