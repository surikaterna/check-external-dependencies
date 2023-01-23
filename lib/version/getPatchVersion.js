"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPatchVersion", {
    enumerable: true,
    get: function() {
        return getPatchVersion;
    }
});
var _checkSafeInt = require("../checkSafeInt");
var getPatchVersion = function(version) {
    try {
        var error = new Error("".concat(version, " is not an patch level version number"));
        if (!version.startsWith("~")) {
            throw error;
        }
        var versionWithoutTilde = version.substring(1);
        if (versionWithoutTilde.split(".").every(_checkSafeInt.checkSafeInt)) {
            return versionWithoutTilde;
        }
        throw error;
    } catch (err) {
        return "";
    }
};
