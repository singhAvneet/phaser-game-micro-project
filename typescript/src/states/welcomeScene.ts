
import * as Assest  from '../variables';

export class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  hint: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "WelcomeScene"
    });
  }

  init(){
    Assest.default.assets=new Assest.initAssest2();
  }


  preload() {

    this.load.setBaseURL(Assest.default.root);
    this.load.image('keys', 'images/keys.png');
    this.load.image('brand', 'images/brand.png');

    this.load.audio('music','sounds/game.wav');

  }

  create(): void {
    Assest.default.assets.keys = this.add.sprite(400, 470, 'keys');
    Assest.default.assets.brand = this.add.sprite(400, 200, 'brand');
    Assest.default.music = this.sound.add('music'); 


    var titleText: string = "Starfall";
    this.title = this.add.text(150, 200, titleText,
      { font: '128px Arial Bold', fill: '#FBFBAC' });

    var hintText: string = "Click to start";
    this.hint = this.add.text(300, 350, hintText,
      { font: '24px Arial Bold', fill: '#FBFBAC' });

      this.hint.setInteractive();
    this.hint.on('pointerdown', function () {
      Assest.default.music.play();
      Assest.default.assets.brand.destroy();Assest.default.assets.keys.destroy();
      Assest.default.music.loop=true;

      this.scene.start("Preload");
    }, this);

  }
};
