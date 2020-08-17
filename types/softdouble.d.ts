import { bool, int, int32_t, int64_t, uint32_t, uint64_t } from './_types';
export declare class softdouble {
    v: uint64_t;
    constructor();
    constructor(c: softdouble);
    constructor(arg159: uint32_t);
    constructor(arg160: uint64_t);
    constructor(arg161: int32_t);
    constructor(arg162: int64_t);
    constructor(a: any);
    getExp(): int;
    /**
     *   Returns a number 1 <= x < 2 with the same significand
     */
    getFrac(): softdouble;
    getSign(): bool;
    isInf(): bool;
    isNaN(): bool;
    isSubnormal(): bool;
    setExp(e: int): softdouble;
    /**
     *   Constructs a copy of a number with significand taken from parameter
     */
    setFrac(s: softdouble): softdouble;
    setSign(sign: bool): softdouble;
    static eps(): softdouble;
    /**
     *   Builds new value from raw binary representation
     */
    static fromRaw(a: uint64_t): softdouble;
    static inf(): softdouble;
    static max(): softdouble;
    static min(): softdouble;
    static nan(): softdouble;
    static one(): softdouble;
    static pi(): softdouble;
    static zero(): softdouble;
}
