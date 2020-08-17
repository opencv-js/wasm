import { diag_type, int, Matx_AddOp, Matx_DivOp, Matx_MatMulOp, Matx_MulOp, Matx_ScaleOp, Matx_SubOp, Matx_TOp, Vec, _T2, _Tp } from './_types';
/**
 * If you need a more flexible type, use [Mat](#d3/d63/classcv_1_1Mat}) . The elements of the matrix M
 * are accessible using the M(i,j) notation. Most of the common matrix operations (see also
 * [MatrixExpressions](#d1/d10/classcv_1_1MatExpr_1MatrixExpressions}) ) are available. To do an
 * operation on [Matx](#de/de1/classcv_1_1Matx}) that is not implemented, you can easily convert the
 * matrix to [Mat](#d3/d63/classcv_1_1Mat}) and backwards:
 *
 * ```cpp
 * Matx33f m(1, 2, 3,
 *           4, 5, 6,
 *           7, 8, 9);
 * cout << sum(Mat(m*m.t())) << endl;
 * ```
 *
 *  Except of the plain constructor which takes a list of elements, [Matx](#de/de1/classcv_1_1Matx})
 * can be initialized from a C-array:
 *
 * ```cpp
 * float values[] = { 1, 2, 3};
 * Matx31f m(values);
 * ```
 *
 *  In case if C++11 features are available, std::initializer_list can be also used to initialize
 * [Matx](#de/de1/classcv_1_1Matx}):
 *
 * ```cpp
 * Matx31f m = { 1, 2, 3};
 * ```
 *
 * Source:
 * [opencv2/core/matx.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/matx.hpp#L1185).
 *
 */
export declare class Matx {
    val: _Tp;
    constructor();
    constructor(v0: _Tp);
    constructor(v0: _Tp, v1: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp, v8: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp, v8: _Tp, v9: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp, v8: _Tp, v9: _Tp, v10: _Tp, v11: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp, v8: _Tp, v9: _Tp, v10: _Tp, v11: _Tp, v12: _Tp, v13: _Tp);
    constructor(v0: _Tp, v1: _Tp, v2: _Tp, v3: _Tp, v4: _Tp, v5: _Tp, v6: _Tp, v7: _Tp, v8: _Tp, v9: _Tp, v10: _Tp, v11: _Tp, v12: _Tp, v13: _Tp, v14: _Tp, v15: _Tp);
    constructor(vals: any);
    constructor(arg334: any);
    constructor(a: Matx, b: Matx, arg335: Matx_AddOp);
    constructor(a: Matx, b: Matx, arg336: Matx_SubOp);
    constructor(arg337: any, a: Matx, alpha: _T2, arg338: Matx_ScaleOp);
    constructor(a: Matx, b: Matx, arg339: Matx_MulOp);
    constructor(a: Matx, b: Matx, arg340: Matx_DivOp);
    constructor(l: int, a: Matx, b: Matx, arg341: Matx_MatMulOp);
    constructor(a: Matx, arg342: Matx_TOp);
    col(i: int): Matx;
    ddot(v: Matx): Matx;
    diag(): diag_type;
    div(a: Matx): Matx;
    dot(v: Matx): Matx;
    get_minor(m1: int, n1: int, base_row: int, base_col: int): Matx;
    inv(method?: int, p_is_ok?: any): Matx;
    mul(a: Matx): Matx;
    reshape(m1: int, n1: int): Matx;
    row(i: int): Matx;
    solve(l: int, rhs: Matx, flags?: int): Matx;
    solve(rhs: Vec, method: int): Vec;
    t(): Matx;
    static all(alpha: _Tp): Matx;
    static diag(d: diag_type): Matx;
    static eye(): Matx;
    static ones(): Matx;
    static randn(a: _Tp, b: _Tp): Matx;
    static randu(a: _Tp, b: _Tp): Matx;
    static zeros(): Matx;
}
export declare const rows: any;
export declare const cols: any;
export declare const channels: any;
export declare const shortdim: any;
