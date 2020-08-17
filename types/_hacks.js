"use strict";
// Scalar, Point, Rect, etc are defined by opencv.js (helpers.js) and we need to declare them manually:
Object.defineProperty(exports, "__esModule", { value: true });
// Hack: expose Mat super classes like Mat_, InputArray, Vector, OutputArray we make them alias of Mat to simplify and make it work
var Mat_1 = require("./Mat");
exports.InputArray = Mat_1.Mat;
exports.InputArrayOfArrays = Mat_1.Mat;
exports.InputOutputArray = Mat_1.Mat;
exports.InputOutputArrayOfArrays = Mat_1.Mat;
exports.MatVector = Mat_1.Mat;
exports.OutputArray = Mat_1.Mat;
exports.OutputArrayOfArrays = Mat_1.Mat;
var _1 = require(".");
//# sourceMappingURL=_hacks.js.map
