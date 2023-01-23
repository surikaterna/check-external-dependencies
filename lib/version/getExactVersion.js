"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getExactVersion", {
    enumerable: true,
    get: function() {
        return getExactVersion;
    }
});
var _checkSafeInt = require("../checkSafeInt");
var getExactVersion = function(version) {
    try {
        var versionParts = version.split(".");
        if (versionParts.length === 3 && versionParts.every(_checkSafeInt.checkSafeInt)) {
            return version;
        }
        throw new Error("".concat(version, " is not an exact version number"));
    } catch (err) {
        return "";
    }
};
