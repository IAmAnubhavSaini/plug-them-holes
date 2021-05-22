"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var chai_1 = require("chai");
describe('plug them holes', function () {
    it('removes holes from array', function () {
        var strainer = [1, 2, 3, , , , , , , 10];
        var expected = [1, 2, 3, 10];
        var expectedLength = 4;
        var actual = index_1.default(strainer);
        chai_1.expect(actual).to.deep.equal(expected);
        chai_1.expect(actual.length).to.equal(expectedLength);
    });
    it('removes holes from array containing array', function () {
        var strainer = [1, 2, 3, , , , [11, 12, , [100, 101, , , , , , , , 200], , 16], , , 10];
        var expected = [1, 2, 3, [11, 12, [100, 101, 200], 16], 10];
        var expectedLength = 5;
        var actual = index_1.default(strainer);
        chai_1.expect(actual).to.deep.equal(expected);
        chai_1.expect(actual.length).to.equal(expectedLength);
    });
});
//# sourceMappingURL=index.spec.js.map