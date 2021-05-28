import 'jest-expect-subclass';
import Phaser from 'phaser';
import CarrierShip from '../Objects/CarrierShip';
import ChaserShip from '../Objects/ChaserShip';
import EnemyLaser from '../Objects/EnemyLaser';
import Entity from '../Objects/Entity';
import GunShip from '../Objects/GunShip';
import Player from '../Objects/Player';

test('Entity extends from Phaser.GameObjects.Sprite ', () => {
  expect(Entity).toBeSubclassOf(Phaser.GameObjects.Sprite);
});

test('GameScene extends from Entity', () => {
  expect(CarrierShip).toBeSubclassOf(Entity);
});

test('ChaserShip extends from Entity', () => {
  expect(ChaserShip).toBeSubclassOf(Entity);
});

test('EnemyLaser extends from Entity', () => {
  expect(EnemyLaser).toBeSubclassOf(Entity);
});

test('GunShip extends from Entity', () => {
  expect(GunShip).toBeSubclassOf(Entity);
});

test('Player extends from Entity ', () => {
  expect(Player).toBeSubclassOf(Entity);
});