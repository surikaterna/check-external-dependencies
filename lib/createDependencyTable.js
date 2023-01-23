"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDependencyTable", {
    enumerable: true,
    get: function() {
        return createDependencyTable;
    }
});
var createDependencyTable = function(name, dependencies) {
    return "\n    <table>\n      <tbody>\n        <tr>\n          <th>Name</th>\n          <th>Version</th>\n          <th>License</th>\n          <th>System(s)</th>\n        </tr>\n        ".concat(dependencies.map(function(dep) {
        return "\n          <tr>\n            <td>".concat(dep.name, "</td>\n            <td>").concat(dep.version, "</td>\n            <td>").concat(dep.license, "</td>\n            <td>").concat(name, "</td>\n          </tr>\n        ");
    }), "\n      </tbody>\n    </table>\n  ");
};
