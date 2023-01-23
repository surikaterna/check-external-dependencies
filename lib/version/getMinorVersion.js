"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getMinorVersion", {
    enumerable: true,
    get: function() {
        return getMinorVersion;
    }
});
var _checkSafeInt = require("../checkSafeInt");
var getMinorVersion = function(version) {
    try {
        var error = new Error("".concat(version, " is not an minor level version number"));
        if (!version.startsWith("^")) {
            throw error;
        }
        var versionWithoutCaret = version.substring(1);
        if (versionWithoutCaret.split(".").every(_checkSafeInt.checkSafeInt)) {
            return versionWithoutCaret;
        }
        throw error;
    } catch (err) {
        return "";
    }
};
