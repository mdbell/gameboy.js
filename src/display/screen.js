var GameboyJS;
(function (GameboyJS) {
"use strict";

// Screen device
    class Screen {
        static physics = {
            WIDTH    : 160,
            HEIGHT   : 144,
            FREQUENCY: 60
        };
        static rows = [];
        // 10 is a placeholder value, can be anything that isn't a screen color
        static buffer = new Uint8Array(Screen.physics.WIDTH * Screen.physics.HEIGHT).fill(10); 
        constructor(canvas, pixelSize) {
            this.svg = canvas;
            Screen.rows = canvas.children;
            this.count = 0;
            //ignore pixelSizeFor now
        }
        static setPixelSize(pixelSize) {
            //stubbed
        }
        static initImageData() {
        }
        static clearScreen() {
        }
        static fillImageData(buffer) {
            for (var y = 0; y < Screen.physics.HEIGHT; y++) {
                for (var x = 0; x < Screen.physics.WIDTH; x++) {
                    let idx = y * Screen.physics.WIDTH + x;
                    let color = buffer[idx];
                    if(color != Screen.buffer[idx]){
                        let row = Screen.rows[x];
                        let col = row.children[y];
                        col.setAttribute('data-level', color);
                        buffer[idx] = color;
                    }
                }
            }
        }
        render(buffer) {
            if(this.count < 10){
                this.count++;
            }else{
                this.count = 0;
            Screen.fillImageData(buffer);
            }
        }
    }
GameboyJS.Screen = Screen;
}(GameboyJS || (GameboyJS = {})));
