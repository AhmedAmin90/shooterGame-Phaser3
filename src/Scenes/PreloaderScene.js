// import 'phaser';

// export default class PreloaderScene extends Phaser.Scene {
//   constructor () {
//     super('Preloader');
//   }

//   init () {
//     this.readyCount = 0;
//   }

//   preload () {
//     // add logo image
//     this.add.image(400, 200, 'logo');

//     // display progress bar
//     var progressBar = this.add.graphics();
//     var progressBox = this.add.graphics();
//     progressBox.fillStyle(0x222222, 0.8);
//     progressBox.fillRect(240, 270, 320, 50);

//     var width = this.cameras.main.width;
//     var height = this.cameras.main.height;
//     var loadingText = this.make.text({
//       x: width / 2,
//       y: height / 2 - 50,
//       text: 'Loading Assests , Please wait ! ...',
//       style: {
//         font: '20px monospace',
//         fill: 'yellow'
//       }
//     });
//     loadingText.setOrigin(0.5, 0.5);

//     var percentText = this.make.text({
//       x: width / 2,
//       y: height / 2 - 5,
//       text: '0%',
//       style: {
//         font: '18px monospace',
//         fill: '#ffffff'
//       }
//     });
//     percentText.setOrigin(0.5, 0.5);

//     var assetText = this.make.text({
//       x: width / 2,
//       y: height / 2 + 50,
//       text: '',
//       style: {
//         font: '18px monospace',
//         fill: '#ffffff'
//       }
//     });
//     assetText.setOrigin(0.5, 0.5);

//     // update progress bar
//     this.load.on('progress', function (value) {
//       percentText.setText(parseInt(value * 100) + '%');
//       progressBar.clear();
//       progressBar.fillStyle(0xffffff, 1);
//       progressBar.fillRect(250, 280, 300 * value, 30);
//     });

//     // update file progress text
//     this.load.on('fileprogress', function (file) {
//       assetText.setText('Loading asset: ' + file.key);
//     });

//     // remove progress bar when complete
//     this.load.on('complete', function () {
//       progressBar.destroy();
//       progressBox.destroy();
//       loadingText.destroy();
//       percentText.destroy();
//       assetText.destroy();
//       this.ready();
//     }.bind(this));

//     this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

//     // load assets needed in our game
//     this.load.image('blueButton1', 'content/ui/blue_button020.png');
//     this.load.image('blueButton2', 'content/ui/blue_button030.png');
//     this.load.image('phaserLogo', 'content/logo.png');
//     this.load.image('box', 'content/ui/grey_box.png');
//     this.load.image('checkedBox', 'content/ui/blue_boxCheckmark.png');
//     this.load.audio('bgMusic', ['content/TownTheme.mp3']);
//   }

//   ready () {
//     this.scene.start('Title');
//     this.readyCount++;
//     if (this.readyCount === 2) {
//       this.scene.start('Title');
//     }
//   }
// };


import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 200, 'logo').setOrigin(0.5, 0.5);

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading Assests , Please wait ! ...',
      style: {
        font: '20px monospace',
        fill: 'yellow',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
    // load assets needed in our game
    this.load.image('blueButton1', 'content/ui/blue_button020.png');
    this.load.image('blueButton2', 'content/ui/blue_button030.png');
    this.load.image('phaserLogo', 'content/logo.png');
    this.load.image('box', 'content/ui/grey_box.png');
    this.load.image('checkedBox', 'content/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', 'content/TownTheme.mp3');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}