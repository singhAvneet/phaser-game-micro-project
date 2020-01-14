/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
    Cameras: require('cameras'),
    Core: require('core'),
    Class: require('utils/Class'),
    Create: require('create'),
    Input: require('input'),   
    // Animations: require('animations'),
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    Physics: require('physics'),
    Plugins: require('plugins'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Sound: require('sound'),
    // Actions: require('actions'),
    
    // Cache: require('cache'),
 
    // Curves: require('curves'),
    // Data: require('data'),
    // Display: require('display'),
    // DOM: require('dom'),
   
  
    // Geom: require('geom'),

    // Math: require('math'),

    // Renderer: require('renderer'),
    // Scale: require('scale'),
 
    // Structs: require('structs'),
    // Textures: require('textures'),
    // Tilemaps: require('tilemaps'),
    // Time: require('time'),
    // Tweens: require('tweens'),
    // Utils: require('utils'),
    // GameObjects: require('gameobjects'),
    GameObjects:  {
        DisplayList: require('gameobjects/DisplayList'),
        UpdateList: require('gameobjects/UpdateList'),
       Image: require('gameobjects/image/Image'),
       Sprite: require('gameobjects/sprite/Sprite'),
       Text: require('gameobjects/text/static/Text'),
       Factories: {
       Image: require('gameobjects/image/ImageFactory'),
       Sprite: require('gameobjects/sprite/SpriteFactory'),
       Text: require('gameobjects/text/static/TextFactory')
       },
       Creators: {
       Image: require('gameobjects/image/ImageCreator'),
       Sprite: require('gameobjects/sprite/SpriteCreator'),
       Text: require('gameobjects/text/static/TextCreator')
       }
       },
       Loader: {
        FileTypes: {
        ImageFile: require('loader/filetypes/ImageFile'),
        AudioFile: require('loader/filetypes/AudioFile'),
        SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
        ScriptFile: require('loader/filetypes/ScriptFile')
        },
        LoaderPlugin: require('loader/LoaderPlugin')
    }

};

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
