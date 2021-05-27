// import Phaser from 'phaser';
// import SceneMain from './Scenes/SceneMain';
// import SceneMainMenu from './Scenes/SceneMainMenu'
// import SceneGameOver from './Scenes/SceneGameOver'
// import BootScene from './Scenes/BootScene';

// var config = {
//     type: Phaser.WEBGL,
//     width: 600,
//     height: 600,
//     backgroundColor: "black",
//     physics: {
//       default: "arcade",
//       arcade: {
//         gravity: { x: 0, y: 0 }
//       }
//     },
//     scene: [ 
//         BootScene,
//         SceneMainMenu,
//         SceneMain,
//         SceneGameOver],
//     pixelArt: true,
//     roundPixels: true
// };

// var game = new Phaser.Game(config);
import 'phaser';
import config from './Config/config';
import SceneMain from './Scenes/SceneMain';
import SceneMainMenu from './Scenes/SceneMainMenu'
import SceneGameOver from './Scenes/SceneGameOver'
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
class Game extends Phaser.Game {
    constructor () {
        super(config);
      const model = new Model();
      this.globals = { model, bgMusic: null };
      this.scene.add('Boot', BootScene);
      this.scene.add('Preloader', PreloaderScene);
      this.scene.add('Title', TitleScene);
      this.scene.add('Options', OptionsScene);
      this.scene.add('Credits', CreditsScene);
      this.scene.add('SceneMainMenu' , SceneMainMenu )
      this.scene.add('SceneMain', SceneMain);
      this.scene.add('SceneGameOver' , SceneGameOver )
      this.scene.start('Boot');
    }
  }
  
  window.game = new Game();