import { int, Mat } from './_types';
/**
 * For details, see, for example, *Visual Categorization with Bags of Keypoints* by Gabriella Csurka,
 * Christopher R. Dance, Lixin Fan, Jutta Willamowski, Cedric Bray, 2004. :
 *
 * Source:
 * [opencv2/features2d.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/features2d.hpp#L1339).
 *
 */
export declare class BOWTrainer {
    constructor();
    /**
     *   The training set is clustered using clustermethod to construct the vocabulary.
     *
     * @param descriptors Descriptors to add to a training set. Each row of the descriptors matrix is a
     * descriptor.
     */
    add(descriptors: Mat): Mat;
    clear(): void;
    /**
     *   This is an overloaded member function, provided for convenience. It differs from the above
     * function only in what argument(s) it accepts.
     */
    cluster(): Mat;
    /**
     *   The vocabulary consists of cluster centers. So, this method returns the vocabulary. In the first
     * variant of the method, train descriptors stored in the object are clustered. In the second variant,
     * input descriptors are clustered.
     *
     * @param descriptors Descriptors to cluster. Each row of the descriptors matrix is a descriptor.
     * Descriptors are not added to the inner train descriptor set.
     */
    cluster(descriptors: Mat): Mat;
    descriptorsCount(): int;
    getDescriptors(): Mat;
}
