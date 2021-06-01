import Phaser from 'phaser';
import BootScene from '../Scenes/BootScene';
import GameScene from '../Scenes/GameScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import TitleScene from '../Scenes/TitleScene';
import OptionsScene from '../Scenes/OptionsScene';
import CreditsScene from '../Scenes/CreditsScene';
import GameOverScene from '../Scenes/GameOverScene';
import HighScoresScene from '../Scenes/HighScoresScene';
import 'jest-expect-subclass';

test('GameScene extends from Phaser Scene', () => {
  expect(GameScene).toBeSubclassOf(Phaser.Scene);
});

test('BootScene  extends from Phaser Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});

test('PreloaderScene  extends from Phaser Scene', () => {
  expect(PreloaderScene).toBeSubclassOf(Phaser.Scene);
});

test('TitleScene  extends from Phaser Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});

test('OptionsScene  extends from Phaser Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});

test('CreditsScene  extends from Phaser Scene', () => {
  expect(CreditsScene).toBeSubclassOf(Phaser.Scene);
});

test('GameOverScene  extends from Phaser Scene', () => {
  expect(GameOverScene).toBeSubclassOf(Phaser.Scene);
});

test('HighScoresScene  extends from Phaser Scene', () => {
  expect(HighScoresScene).toBeSubclassOf(Phaser.Scene);
});
