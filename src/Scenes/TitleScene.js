import Phaser from 'phaser';
import config from '../Config/config';


class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    
  }

  create() {
    this.add.image(200 , 200 ,'background');

    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.optionsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', () => {
      this.scene.start('Options');
    });

    this.creditsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', () => {
      this.scene.start('Credits');
    });

    this.scoresButton = this.add.sprite(0, 0, 'blueButton1').setInteractive();
    this.centerButton(this.scoresButton, -1);

    this.scoresText = this.add.text(343, 485, 'Scores', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.scoresButton, this.scoresText);

    this.scoresButton.on('pointerdown', () => {
      this.scene.start('HighScores');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });

    this.title = this.add.text(this.game.config.width * 0.5, 100, 'AMIN SHOOTER GAME', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
      marginBottom: '20px'
    });

    this.title.setOrigin(0.5);

  }



  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height,
      ),
    );
  }

  centerButtonText(gameText, gameButton) {
    if (this != null) {
      Phaser.Display.Align.In.Center(
        gameText,
        gameButton,
      );
    }
  }
}


export default  TitleScene