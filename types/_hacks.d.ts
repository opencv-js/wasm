export declare class Range {
    start: number;
    end: number;
    constructor(start: number, end: number);
}
export declare class Scalar extends Array<number> {
    static all(...v: number[]): Scalar;
}
export { Mat as InputArray, Mat as InputArrayOfArrays, Mat as InputOutputArray, Mat as InputOutputArrayOfArrays, Mat as MatVector, Mat as OutputArray, Mat as OutputArrayOfArrays } from './Mat';
export { Scalar as GScalar };
export { Point as Point2f };
export { Point as KeyPoint };
export { Point as Point2l };
export { Size as Point2d };
export { Size as Size2d };
export { Size as Size2f };
export { Size as Size2l };
export { Rect as Rect_ };
export declare class Point {
    constructor(x: number, y: number);
    x: number;
    y: number;
}
export declare class Size {
    constructor(width: number, height: number);
    width: number;
    height: number;
}
export declare class Rect {
    constructor();
    constructor(point: Point, size: Size);
    constructor(x: number, y: number, width: number, height: number);
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class TermCriteria {
    type: number;
    maxCount: number;
    epsilon: number;
    constructor();
    constructor(type: number, maxCount: number, epsilon: number);
}
export declare const TermCriteria_EPS: any;
export declare const TermCriteria_COUNT: any;
export declare const TermCriteria_MAX_ITER: any;
export declare class MinMaxLoc {
    minVal: number;
    maxVal: number;
    minLoc: Point;
    maxLoc: Point;
    constructor();
    constructor(minVal: number, maxVal: number, minLoc: Point, maxLoc: Point);
}
export declare function exceptionFromPtr(err: number): any;
export declare function onRuntimeInitialized(): any;
export declare function FS_createDataFile(arg0: string, path: string, data: Uint8Array, arg3: boolean, arg4: boolean, arg5: boolean): any;
import { Algorithm, LineTypes, Mat, NormTypes, RotatedRect } from '.';
/**
 * Base class for Contrast Limited Adaptive Histogram Equalization.
 */
export declare class CLAHE extends Algorithm {
    /**
     * @param clipLimit Threshold for contrast limiting. Default.  40.0,
     * @param totalGridSize Size of grid for histogram equalization. Input image will be divided into equally sized rectangular tiles. tileGridSize defines the number of tiles in row and column. Default: Size(8, 8)
     */
    constructor(clipLimit?: double, totalGridSize?: Size);
    /**
     * Equalizes the histogram of a grayscale image using Contrast Limited Adaptive Histogram Equalization.
     * @param src Source image of type CV_8UC1 or CV_16UC1.
     * @param dst Destination image.
     */
    apply(src: Mat, dst: Mat): void;
    collectGarbage(): void;
    /**
     * Returns threshold value for contrast limiting.
     */
    getClipLimit(): double;
    /**
     * Returns Size defines the number of tiles in row and column.
     */
    getTilesGridSize(): Size;
    /**
     * Sets threshold for contrast limiting.
     */
    setClipLimit(clipLimit: double): void;
    /**
     * Sets size of grid for histogram equalization. Input image will be divided into equally sized rectangular tiles.
     * @param tileGridSize defines the number of tiles in row and column.
     */
    setTilesGridSize(tileGridSize: Size): void;
}
export declare function getInheritedInstanceCount(...a: any[]): any;
export declare function getLiveInheritedInstances(...a: any[]): any;
export declare function flushPendingDeletes(...a: any[]): any;
export declare function setDelayFunction(...a: any[]): any;
export declare class EmscriptenEmbindInstance {
    isAliasOf(...a: any[]): any;
    clone(...a: any[]): any;
    delete(...a: any[]): any;
    isDeleted(...a: any[]): any;
    deleteLater(...a: any[]): any;
}
export declare class InternalError extends Error {
}
export declare class BindingError extends Error {
}
export declare class UnboundTypeError extends Error {
}
export declare class PureVirtualError extends Error {
}
export declare class Vector<T> extends EmscriptenEmbindInstance {
    delete(): void;
    get(i: number): T;
    get(i: number, j: number, data: any): T;
    set(i: number, t: T): void;
    put(i: number, j: number, data: any): any;
    push_back(n: T): any;
    resize(count: number, value?: T): void;
    delete(): void;
}
export declare class Vec3d extends Vector<any> {
}
export declare class IntVector extends Vector<number> {
}
export declare class FloatVector extends Vector<number> {
}
export declare class DoubleVector extends Vector<number> {
}
export declare class PointVector extends Vector<Point> {
}
export declare class KeyPointVector extends Vector<any> {
}
export declare class DMatchVector extends Vector<any> {
}
export declare class DMatchVectorVector extends Vector<Vector<any>> {
}
export declare class RectVector extends Rect implements Vector<Rect> {
    get(i: number): Rect;
    isAliasOf(...a: any[]): any;
    clone(...a: any[]): any;
    delete(...a: any[]): any;
    isDeleted(...a: any[]): any;
    deleteLater(...a: any[]): any;
    set(i: number, t: Rect): void;
    put(i: number, j: number, data: any): any;
    size(): number;
    push_back(n: Rect): void;
    resize(count: number, value?: Rect | undefined): void;
    delete(): void;
}
export declare class VideoCapture {
    constructor(videoSource: HTMLVideoElement | string);
    read(m: Mat): any;
    video: HTMLVideoElement;
}
export declare type MatSize = () => Size;
export declare function matFromImageData(imageData: ImageData): Mat;
export declare function matFromArray(rows: number, cols: number, type: any, array: number[] | ArrayBufferView): Mat;
/** since we don't support inheritance yet we force Mat to extend Mat_ which type defined here: */
export declare class Mat_ extends Vector<Mat> {
    data: Uint8Array;
    data8S: Int8Array;
    data8U: Uint8Array;
    data16U: Uint16Array;
    data16S: Int16Array;
    data32U: Uint32Array;
    data32S: Int32Array;
    data32F: Float32Array;
    data64F: Float64Array;
    ucharPtr(i: any, j: any): any;
    charPtr(i: any, j: any): any;
    shortPtr(i: any, j: any): any;
    ushortPtr(i: any, j: any): any;
    intPtr(i: any, j: any): any;
    ucharAt(i: any): any;
    charAt(i: any): any;
    floatPtr(i: any, j: any): any;
    doublePtr(i: any, j: any): any;
    intPtr(i: any, j: any): any;
    setTo(value: Mat_ | Scalar, mask?: Mat_): Mat_;
    /**
     * Sometimes, you will have to play with certain region of images.
     * For eye detection in images, first face detection is done all
     * over the image and when face is obtained, we select the face region alone and search for eyes inside it instead of searching whole image.
     * It improves accuracy (because eyes are always on faces) and performance (because we search for a small area).
     *
     * Heads up : in JS seems only one argument is expected.
     */
    roi(expr: Rect | Mat_): Mat;
}
export declare class ImageData {
    data: ArrayBufferView;
    width: number;
    height: number;
}
export declare const CV_8U: CVDataType;
export declare const CV_8UC1: CVDataType;
export declare const CV_8UC2: CVDataType;
export declare const CV_8UC3: CVDataType;
export declare const CV_8UC4: CVDataType;
export declare const CV_8S: CVDataType;
export declare const CV_8SC1: CVDataType;
export declare const CV_8SC2: CVDataType;
export declare const CV_8SC3: CVDataType;
export declare const CV_8SC4: CVDataType;
export declare const CV_16U: CVDataType;
export declare const CV_16UC1: CVDataType;
export declare const CV_16UC2: CVDataType;
export declare const CV_16UC3: CVDataType;
export declare const CV_16UC4: CVDataType;
export declare const CV_16S: CVDataType;
export declare const CV_16SC1: CVDataType;
export declare const CV_16SC2: CVDataType;
export declare const CV_16SC3: CVDataType;
export declare const CV_16SC4: CVDataType;
export declare const CV_32S: CVDataType;
export declare const CV_32SC1: CVDataType;
export declare const CV_32SC2: CVDataType;
export declare const CV_32SC3: CVDataType;
export declare const CV_32SC4: CVDataType;
export declare const CV_32F: CVDataType;
export declare const CV_32FC1: CVDataType;
export declare const CV_32FC2: CVDataType;
export declare const CV_32FC3: CVDataType;
export declare const CV_32FC4: CVDataType;
export declare const CV_64F: CVDataType;
export declare const CV_64FC1: CVDataType;
export declare const CV_64FC2: CVDataType;
export declare const CV_64FC3: CVDataType;
export declare const CV_64FC4: CVDataType;
export declare type CVDataType = any;
export declare function ellipse1(dst: Mat, rotatedRect: RotatedRect, ellipseColor: Scalar, arg0: number, line: LineTypes): void;
export declare function imread(canvasOrImageHtmlElement: HTMLElement | string): Mat;
export declare function norm1(a: Mat, b: Mat, type: NormTypes): number;
export declare function imshow(canvasSource: HTMLElement | string, mat: Mat): void;
export declare function matFromArray(rows: number, cols: number, type: any, array: any): Mat;
export declare type Mat4 = any;
export declare type Mat3 = any;
export declare type Vec3 = any;
export declare type float_type = any;
export declare type int = number;
export declare type bool = boolean;
export declare type FileNode = any;
export declare type FileStorage = any;
export declare type Ptr = any;
export declare type size_t = any;
export declare type double = number;
export declare type float = number;
export declare type UMat = any;
export declare type Matrix = any;
export declare type BucketKey = any;
export declare type Bucket = any;
export declare type LshStats = any;
export declare type MatAllocator = any;
export declare type uchar = any;
export declare type MatStep = any;
export declare type UMatData = any;
export declare type typename = any;
export declare type Vec = any;
export declare type Point_ = any;
export declare type Point3_ = any;
export declare type MatCommaInitializer_ = any;
export declare type MatIterator_ = any;
export declare type MatConstIterator_ = any;
export declare type AccessFlag = any;
export declare type UMatUsageFlags = any;
export declare type _Tp = any;
export declare type Matx_AddOp = any;
export declare type Matx_SubOp = any;
export declare type _T2 = any;
export declare type Matx_ScaleOp = any;
export declare type Matx_MulOp = any;
export declare type Matx_DivOp = any;
export declare type Matx_MatMulOp = any;
export declare type Matx_TOp = any;
export declare type diag_type = any;
export declare type _EqPredicate = any;
export declare type cvhalDFT = any;
export declare type schar = any;
export declare type ushort = any;
export declare type short = any;
export declare type int64 = any;
export declare type ErrorCallback = any;
export declare type unsigned = any;
export declare type uint64 = any;
export declare type float16_t = any;
export declare type AsyncArray = any;
export declare type Net = any;
export declare type Moments = any;
export declare type uint64_t = any;
export declare type uint32_t = any;
export declare type int32_t = any;
export declare type int64_t = any;
