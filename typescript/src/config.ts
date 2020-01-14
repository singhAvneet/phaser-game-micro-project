


const docElement = document.documentElement

export default {
  type: Phaser.AUTO,
  renderer: Phaser.AUTO,
  width:  docElement.clientWidth > 800 ? 800 : docElement.clientWidth,
  height: docElement.clientHeight > 600 ? 600 : docElement.clientHeight,
  parent:'game-area',
  enableDebug: false,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  }
}
