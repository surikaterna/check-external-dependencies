"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "checkSafeInt", {
    enumerable: true,
    get: function() {
        return checkSafeInt;
    }
});
var checkSafeInt = function(text) {
    return text !== "" && Number.isSafeInteger(Number(text));
};
