"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNpmVersion", {
    enumerable: true,
    get: function() {
        return getNpmVersion;
    }
});
var _getMinorVersion = require("./getMinorVersion");
var _getExactVersion = require("./getExactVersion");
var _getPatchVersion = require("./getPatchVersion");
var getNpmVersion = function(version) {
    return (0, _getExactVersion.getExactVersion)(version) || (0, _getPatchVersion.getPatchVersion)(version) || (0, _getMinorVersion.getMinorVersion)(version) || version || "";
};
