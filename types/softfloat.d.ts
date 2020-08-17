import { bool, int, int32_t, int64_t, uint32_t, uint64_t } from './_types';
export declare class softfloat {
    v: uint32_t;
    constructor();
    constructor(c: softfloat);
    constructor(arg174: uint32_t);
    constructor(arg175: uint64_t);
    constructor(arg176: int32_t);
    constructor(arg177: int64_t);
    constructor(a: any);
    getExp(): int;
    /**
     *   Returns a number 1 <= x < 2 with the same significand
     */
    getFrac(): softfloat;
    getSign(): bool;
    isInf(): bool;
    isNaN(): bool;
    isSubnormal(): bool;
    setExp(e: int): softfloat;
    /**
     *   Constructs a copy of a number with significand taken from parameter
     */
    setFrac(s: softfloat): softfloat;
    setSign(sign: bool): softfloat;
    static eps(): softfloat;
    /**
     *   Builds new value from raw binary representation
     */
    static fromRaw(a: uint32_t): softfloat;
    static inf(): softfloat;
    static max(): softfloat;
    static min(): softfloat;
    static nan(): softfloat;
    static one(): softfloat;
    static pi(): softfloat;
    static zero(): softfloat;
}
