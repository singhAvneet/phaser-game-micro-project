// import 'phaser'
import { WelcomeScene } from "./states/welcomeScene";
import { GameScene } from "./states/gameScene";
import { Preload } from "./states/preload";

import config from './config';

export class StarfallGame extends Phaser.Game {
  constructor(config) {
    super(config);
    this.scene.add('WelcomeScene', WelcomeScene, false)
    this.scene.add('GameScene', GameScene, false)
    this.scene.add('Preload', Preload, false)
  }
};

var game = new StarfallGame(config);
game.scene.start("WelcomeScene");

