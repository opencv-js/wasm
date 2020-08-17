import { Bucket, BucketKey, LshStats, Matrix, size_t } from './_types';
/**
 * Lsh hash table. As its key is a sub-feature, and as usually the size of it is pretty small, we keep
 * it as a continuous memory array. The value is an index in the corpus of features (we keep it as an
 * unsigned int for pure memory reasons, it could be a size_t)
 *
 * Source:
 * [opencv2/flann/lsh_table.h](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/flann/lsh_table.h#L261).
 *
 */
export declare class LshTable {
    /**
     *   Default constructor
     */
    constructor();
    /**
     *   Default constructor Create the mask and allocate the memory
     *
     * @param feature_size is the size of the feature (considered as a ElementType[])
     *
     * @param key_size is the number of bits that are turned on in the feature
     */
    constructor(feature_size: any, key_size: any);
    constructor(feature_size: any, subsignature_size: any);
    /**
     *   Add a feature to the table
     *
     * @param value the value to store for that feature
     *
     * @param feature the feature itself
     */
    add(value: any, feature: any): void;
    /**
     *   Add a set of features to the table
     *
     * @param dataset the values to store
     */
    add(dataset: Matrix): Matrix;
    /**
     *   Get a bucket given the key
     */
    getBucketFromKey(key: BucketKey): Bucket;
    /**
     *   Compute the sub-signature of a feature
     */
    getKey(arg50: any): size_t;
    /**
     *   Return the Subsignature of a feature
     *
     * @param feature the feature to analyze
     */
    getKey(feature: any): size_t;
    /**
     *   Get statistics about the table
     */
    getStats(): LshStats;
    getStats(): LshStats;
}
export declare const kArray: SpeedLevel;
export declare const kBitsetHash: SpeedLevel;
export declare const kHash: SpeedLevel;
/**
 * defines the speed fo the implementation kArray uses a vector for storing data kBitsetHash uses a
 * hash map but checks for the validity of a key with a bitset kHash uses a hash map only
 *
 */
export declare type SpeedLevel = any;
