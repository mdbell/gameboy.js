var GameboyJS;
(function (GameboyJS) {
"use strict";

Screen.physics = {
    WIDTH    : 160,
    HEIGHT   : 144,
    FREQUENCY: 60
};

// Screen device
var Screen = function(canvas, pixelSize) {

};

Screen.prototype.setPixelSize = function(pixelSize){
    //stubbed
};

Screen.prototype.initImageData = function() {

};

Screen.prototype.clearScreen = function() {

};

Screen.prototype.fillImageData = function(buffer) {
    for (var y = 0; y < Screen.physics.HEIGHT; y++) {
        for(var x = 0; x < Screen.physics.WIDTH; x++){
            //buffer[y * Screen.physics.WIDTH + x]
        }
    }
};

Screen.prototype.render = function(buffer) {

};

GameboyJS.Screen = Screen;
}(GameboyJS || (GameboyJS = {})));
