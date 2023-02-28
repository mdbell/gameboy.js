var GameboyJS;
(function (GameboyJS) {
"use strict";

// Screen device
    class Screen {
        constructor(canvas, pixelSize) {
            this.physics = {
                WIDTH    : 160,
                HEIGHT   : 144,
                FREQUENCY: 60
            };
        }
        setPixelSize(pixelSize) {
            //stubbed
        }
        initImageData() {
        }
        clearScreen() {
        }
        fillImageData(buffer) {
            for (var y = 0; y < Screen.physics.HEIGHT; y++) {
                for (var x = 0; x < Screen.physics.WIDTH; x++) {
                    //buffer[y * Screen.physics.WIDTH + x]
                }
            }
        }
        render(buffer) {
        }
    }
GameboyJS.Screen = Screen;
}(GameboyJS || (GameboyJS = {})));
