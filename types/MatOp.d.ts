import { double, int, Mat, MatExpr, Scalar, Size } from './_types';
export declare class MatOp {
    constructor();
    abs(expr: MatExpr, res: MatExpr): MatExpr;
    add(expr1: MatExpr, expr2: MatExpr, res: MatExpr): MatExpr;
    add(expr1: MatExpr, s: Scalar, res: MatExpr): MatExpr;
    assign(expr: MatExpr, m: Mat, type?: int): MatExpr;
    augAssignAdd(expr: MatExpr, m: Mat): MatExpr;
    augAssignAnd(expr: MatExpr, m: Mat): MatExpr;
    augAssignDivide(expr: MatExpr, m: Mat): MatExpr;
    augAssignMultiply(expr: MatExpr, m: Mat): MatExpr;
    augAssignOr(expr: MatExpr, m: Mat): MatExpr;
    augAssignSubtract(expr: MatExpr, m: Mat): MatExpr;
    augAssignXor(expr: MatExpr, m: Mat): MatExpr;
    diag(expr: MatExpr, d: int, res: MatExpr): MatExpr;
    divide(expr1: MatExpr, expr2: MatExpr, res: MatExpr, scale?: double): MatExpr;
    divide(s: double, expr: MatExpr, res: MatExpr): MatExpr;
    elementWise(expr: MatExpr): MatExpr;
    invert(expr: MatExpr, method: int, res: MatExpr): MatExpr;
    matmul(expr1: MatExpr, expr2: MatExpr, res: MatExpr): MatExpr;
    multiply(expr1: MatExpr, expr2: MatExpr, res: MatExpr, scale?: double): MatExpr;
    multiply(expr1: MatExpr, s: double, res: MatExpr): MatExpr;
    roi(expr: MatExpr, rowRange: Range, colRange: Range, res: MatExpr): MatExpr;
    size(expr: MatExpr): Size;
    subtract(expr1: MatExpr, expr2: MatExpr, res: MatExpr): MatExpr;
    subtract(s: Scalar, expr: MatExpr, res: MatExpr): Scalar;
    transpose(expr: MatExpr, res: MatExpr): MatExpr;
    type(expr: MatExpr): MatExpr;
}
