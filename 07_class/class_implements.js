"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst // we cann add more paremeter but cannot do less then what TakePhoto asks for
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Instagram.prototype.createStory = function () {
        console.log("Created story");
    };
    return Instagram;
}());
