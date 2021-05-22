"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notAHole = function (x) { return 0 in [x]; };
var remapFn = function (x) { return Array.isArray(x) ? plugThemHoles(x) : x; };
var plugThemHoles = function (array) { return array.filter(notAHole).map(remapFn); };
exports.default = plugThemHoles;
//# sourceMappingURL=index.js.map