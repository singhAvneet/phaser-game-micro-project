
import './phaser.min.js'

import '../starfall-phaser3-typescript/dist/app.js'













function importAll(r) {
return r.keys().map(r);
}

importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('./sounds', false, /\.(wav)$/));


