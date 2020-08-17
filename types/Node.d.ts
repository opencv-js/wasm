import { double, int } from './_types';
export declare class Node {
    /**
     *   Class index normalized to 0..class_count-1 range and assigned to the node. It is used internally
     * in classification trees and tree ensembles.
     *
     */
    classIdx: int;
    /**
     *   Default direction where to go (-1: left or +1: right). It helps in the case of missing values.
     *
     */
    defaultDir: int;
    left: int;
    parent: int;
    right: int;
    split: int;
    /**
     *   Value at the node: a class label in case of classification or estimated function value in case of
     * regression.
     *
     */
    value: double;
    constructor();
}
