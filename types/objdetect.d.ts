import { double, int, Size } from './_types';
export declare function createFaceDetectionMaskGenerator(): any;
/**
 * The function is a wrapper for the generic function partition . It clusters all the input rectangles
 * using the rectangle equivalence criteria that combines rectangles with similar sizes and similar
 * locations. The similarity is defined by eps. When eps=0 , no clustering is done at all. If
 * `$\\texttt{eps}\\rightarrow +\\inf$` , all the rectangles are put in one cluster. Then, the small
 * clusters containing less than or equal to groupThreshold rectangles are rejected. In each other
 * cluster, the average rectangle is computed and put into the output rectangle list.
 *
 * @param rectList Input/output vector of rectangles. Output vector includes retained and grouped
 * rectangles. (The Python list is not modified in place.)
 *
 * @param groupThreshold Minimum possible number of rectangles minus 1. The threshold is used in a
 * group of rectangles to retain it.
 *
 * @param eps Relative difference between sides of the rectangles to merge them into a group.
 */
export declare function groupRectangles(rectList: any, groupThreshold: int, eps?: double): void;
/**
 * This is an overloaded member function, provided for convenience. It differs from the above function
 * only in what argument(s) it accepts.
 */
export declare function groupRectangles(rectList: any, weights: any, groupThreshold: int, eps?: double): void;
/**
 * This is an overloaded member function, provided for convenience. It differs from the above function
 * only in what argument(s) it accepts.
 */
export declare function groupRectangles(rectList: any, groupThreshold: int, eps: double, weights: any, levelWeights: any): void;
/**
 * This is an overloaded member function, provided for convenience. It differs from the above function
 * only in what argument(s) it accepts.
 */
export declare function groupRectangles(rectList: any, rejectLevels: any, levelWeights: any, groupThreshold: int, eps?: double): void;
/**
 * This is an overloaded member function, provided for convenience. It differs from the above function
 * only in what argument(s) it accepts.
 */
export declare function groupRectangles_meanshift(rectList: any, foundWeights: any, foundScales: any, detectThreshold?: double, winDetSize?: Size): void;
export declare const CASCADE_DO_CANNY_PRUNING: any;
export declare const CASCADE_SCALE_IMAGE: any;
export declare const CASCADE_FIND_BIGGEST_OBJECT: any;
export declare const CASCADE_DO_ROUGH_SEARCH: any;
