import { size_t } from './_types';
/**
 * The class is used for temporary buffers in functions and methods. If a temporary buffer is usually
 * small (a few K's of memory), but its size depends on the parameters, it makes sense to create a
 * small fixed-size array on stack and use it if it's large enough. If the required buffer size is
 * larger than the fixed size, another buffer of sufficient size is allocated dynamically and released
 * after the processing. Therefore, in typical cases, when the buffer size is small, there is no
 * overhead associated with malloc()/free(). At the same time, there is no limit on the size of
 * processed data.
 *
 * This is what [AutoBuffer](#d8/dd0/classcv_1_1AutoBuffer}) does. The template takes 2 parameters -
 * type of the buffer elements and the number of stack-allocated elements. Here is how the class is
 * used:
 *
 * ```cpp
 * void my_func(const cv::Mat& m)
 * {
 *    cv::AutoBuffer<float> buf(1000); // create automatic buffer containing 1000 floats
 *
 *    buf.allocate(m.rows); // if m.rows <= 1000, the pre-allocated buffer is used,
 *                          // otherwise the buffer of "m.rows" floats will be allocated
 *                          // dynamically and deallocated in cv::AutoBuffer destructor
 *    ...
 * }
 * ```
 *
 * Source:
 * [opencv2/core/utility.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/utility.hpp#L128).
 *
 */
export declare class AutoBuffer {
    constructor();
    constructor(_size: size_t);
    constructor(buf: AutoBuffer);
    allocate(_size: size_t): void;
    data(): any;
    data(): any;
    deallocate(): void;
    resize(_size: size_t): void;
    size(): size_t;
}
