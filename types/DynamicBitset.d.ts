import { bool, size_t } from './_types';
/**
 * Class re-implementing the boost version of it This helps not depending on boost, it also does not do
 * the bound checks and has a way to reset a block for speed
 *
 * Source:
 * [opencv2/flann/dynamic_bitset.h](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/flann/dynamic_bitset.h#L150).
 *
 */
export declare class DynamicBitset {
    /**
     *   default constructor
     */
    constructor();
    /**
     *   only constructor we use in our code
     *
     * @param sz the size of the bitset (in bits)
     */
    constructor(sz: size_t);
    /**
     *   Sets all the bits to 0
     */
    clear(): void;
    /**
     *   true if the bitset is empty
     */
    empty(): bool;
    /**
     *   set all the bits to 0
     */
    reset(): void;
    reset(index: size_t): void;
    reset_block(index: size_t): void;
    /**
     *   resize the bitset so that it contains at least sz bits
     */
    resize(sz: size_t): void;
    /**
     *   set a bit to true
     *
     * @param index the index of the bit to set to 1
     */
    set(index: size_t): void;
    /**
     *   gives the number of contained bits
     */
    size(): size_t;
    /**
     *   check if a bit is set
     *
     *   true if the bit is set
     *
     * @param index the index of the bit to check
     */
    test(index: size_t): bool;
}
