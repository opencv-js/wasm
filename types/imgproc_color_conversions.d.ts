import { InputArray, int, OutputArray } from './_types';
/**
 * The function converts an input image from one color space to another. In case of a transformation
 * to-from RGB color space, the order of the channels should be specified explicitly (RGB or BGR). Note
 * that the default color format in OpenCV is often referred to as RGB but it is actually BGR (the
 * bytes are reversed). So the first byte in a standard (24-bit) color image will be an 8-bit Blue
 * component, the second byte will be Green, and the third byte will be Red. The fourth, fifth, and
 * sixth bytes would then be the second pixel (Blue, then Green, then Red), and so on.
 *
 * The conventional ranges for R, G, and B channel values are:
 *
 * 0 to 255 for CV_8U images
 * 0 to 65535 for CV_16U images
 * 0 to 1 for CV_32F images
 *
 * In case of linear transformations, the range does not matter. But in case of a non-linear
 * transformation, an input RGB image should be normalized to the proper value range to get the correct
 * results, for example, for RGB `$\\rightarrow$` L*u*v* transformation. For example, if you have a
 * 32-bit floating-point image directly converted from an 8-bit image without any scaling, then it will
 * have the 0..255 value range instead of 0..1 assumed by the function. So, before calling [cvtColor] ,
 * you need first to scale the image down:
 *
 * ```cpp
 * img *= 1./255;
 * cvtColor(img, img, COLOR_BGR2Luv);
 * ```
 *
 *  If you use [cvtColor] with 8-bit images, the conversion will have some information lost. For many
 * applications, this will not be noticeable but it is recommended to use 32-bit images in applications
 * that need the full range of colors or that convert an image before an operation and then convert
 * back.
 *
 * If conversion adds the alpha channel, its value will set to the maximum of corresponding channel
 * range: 255 for CV_8U, 65535 for CV_16U, 1 for CV_32F.
 *
 * [Color conversions]
 *
 * @param src input image: 8-bit unsigned, 16-bit unsigned ( CV_16UC... ), or single-precision
 * floating-point.
 *
 * @param dst output image of the same size and depth as src.
 *
 * @param code color space conversion code (see ColorConversionCodes).
 *
 * @param dstCn number of channels in the destination image; if the parameter is 0, the number of the
 * channels is derived automatically from src and code.
 */
export declare function cvtColor(src: InputArray, dst: OutputArray, code: int, dstCn?: int): void;
/**
 * This function only supports YUV420 to RGB conversion as of now.
 *
 * @param src1 8-bit image (CV_8U) of the Y plane.
 *
 * @param src2 image containing interleaved U/V plane.
 *
 * @param dst output image.
 *
 * @param code Specifies the type of conversion. It can take any of the following values:
 * COLOR_YUV2BGR_NV12COLOR_YUV2RGB_NV12COLOR_YUV2BGRA_NV12COLOR_YUV2RGBA_NV12COLOR_YUV2BGR_NV21COLOR_YUV2RGB_NV21COLOR_YUV2BGRA_NV21COLOR_YUV2RGBA_NV21
 */
export declare function cvtColorTwoPlane(src1: InputArray, src2: InputArray, dst: OutputArray, code: int): void;
/**
 * The function can do the following transformations:
 *
 * Demosaicing using bilinear interpolation[COLOR_BayerBG2BGR] , [COLOR_BayerGB2BGR] ,
 * [COLOR_BayerRG2BGR] , [COLOR_BayerGR2BGR][COLOR_BayerBG2GRAY] , [COLOR_BayerGB2GRAY] ,
 * [COLOR_BayerRG2GRAY] , [COLOR_BayerGR2GRAY]
 * Demosaicing using Variable Number of Gradients.[COLOR_BayerBG2BGR_VNG] , [COLOR_BayerGB2BGR_VNG] ,
 * [COLOR_BayerRG2BGR_VNG] , [COLOR_BayerGR2BGR_VNG]
 * Edge-Aware Demosaicing.[COLOR_BayerBG2BGR_EA] , [COLOR_BayerGB2BGR_EA] , [COLOR_BayerRG2BGR_EA] ,
 * [COLOR_BayerGR2BGR_EA]
 * Demosaicing with alpha channel[COLOR_BayerBG2BGRA] , [COLOR_BayerGB2BGRA] , [COLOR_BayerRG2BGRA] ,
 * [COLOR_BayerGR2BGRA]
 *
 * [cvtColor]
 *
 * @param src input image: 8-bit unsigned or 16-bit unsigned.
 *
 * @param dst output image of the same size and depth as src.
 *
 * @param code Color space conversion code (see the description below).
 *
 * @param dstCn number of channels in the destination image; if the parameter is 0, the number of the
 * channels is derived automatically from src and code.
 */
export declare function demosaicing(src: InputArray, dst: OutputArray, code: int, dstCn?: int): void;
export declare const COLOR_BGR2BGRA: ColorConversionCodes;
export declare const COLOR_RGB2RGBA: ColorConversionCodes;
export declare const COLOR_BGRA2BGR: ColorConversionCodes;
export declare const COLOR_RGBA2RGB: ColorConversionCodes;
export declare const COLOR_BGR2RGBA: ColorConversionCodes;
export declare const COLOR_RGB2BGRA: ColorConversionCodes;
export declare const COLOR_RGBA2BGR: ColorConversionCodes;
export declare const COLOR_BGRA2RGB: ColorConversionCodes;
export declare const COLOR_BGR2RGB: ColorConversionCodes;
export declare const COLOR_RGB2BGR: ColorConversionCodes;
export declare const COLOR_BGRA2RGBA: ColorConversionCodes;
export declare const COLOR_RGBA2BGRA: ColorConversionCodes;
export declare const COLOR_BGR2GRAY: ColorConversionCodes;
export declare const COLOR_RGB2GRAY: ColorConversionCodes;
export declare const COLOR_GRAY2BGR: ColorConversionCodes;
export declare const COLOR_GRAY2RGB: ColorConversionCodes;
export declare const COLOR_GRAY2BGRA: ColorConversionCodes;
export declare const COLOR_GRAY2RGBA: ColorConversionCodes;
export declare const COLOR_BGRA2GRAY: ColorConversionCodes;
export declare const COLOR_RGBA2GRAY: ColorConversionCodes;
export declare const COLOR_BGR2BGR565: ColorConversionCodes;
export declare const COLOR_RGB2BGR565: ColorConversionCodes;
export declare const COLOR_BGR5652BGR: ColorConversionCodes;
export declare const COLOR_BGR5652RGB: ColorConversionCodes;
export declare const COLOR_BGRA2BGR565: ColorConversionCodes;
export declare const COLOR_RGBA2BGR565: ColorConversionCodes;
export declare const COLOR_BGR5652BGRA: ColorConversionCodes;
export declare const COLOR_BGR5652RGBA: ColorConversionCodes;
export declare const COLOR_GRAY2BGR565: ColorConversionCodes;
export declare const COLOR_BGR5652GRAY: ColorConversionCodes;
export declare const COLOR_BGR2BGR555: ColorConversionCodes;
export declare const COLOR_RGB2BGR555: ColorConversionCodes;
export declare const COLOR_BGR5552BGR: ColorConversionCodes;
export declare const COLOR_BGR5552RGB: ColorConversionCodes;
export declare const COLOR_BGRA2BGR555: ColorConversionCodes;
export declare const COLOR_RGBA2BGR555: ColorConversionCodes;
export declare const COLOR_BGR5552BGRA: ColorConversionCodes;
export declare const COLOR_BGR5552RGBA: ColorConversionCodes;
export declare const COLOR_GRAY2BGR555: ColorConversionCodes;
export declare const COLOR_BGR5552GRAY: ColorConversionCodes;
export declare const COLOR_BGR2XYZ: ColorConversionCodes;
export declare const COLOR_RGB2XYZ: ColorConversionCodes;
export declare const COLOR_XYZ2BGR: ColorConversionCodes;
export declare const COLOR_XYZ2RGB: ColorConversionCodes;
export declare const COLOR_BGR2YCrCb: ColorConversionCodes;
export declare const COLOR_RGB2YCrCb: ColorConversionCodes;
export declare const COLOR_YCrCb2BGR: ColorConversionCodes;
export declare const COLOR_YCrCb2RGB: ColorConversionCodes;
export declare const COLOR_BGR2HSV: ColorConversionCodes;
export declare const COLOR_RGB2HSV: ColorConversionCodes;
export declare const COLOR_BGR2Lab: ColorConversionCodes;
export declare const COLOR_RGB2Lab: ColorConversionCodes;
export declare const COLOR_BGR2Luv: ColorConversionCodes;
export declare const COLOR_RGB2Luv: ColorConversionCodes;
export declare const COLOR_BGR2HLS: ColorConversionCodes;
export declare const COLOR_RGB2HLS: ColorConversionCodes;
export declare const COLOR_HSV2BGR: ColorConversionCodes;
export declare const COLOR_HSV2RGB: ColorConversionCodes;
export declare const COLOR_Lab2BGR: ColorConversionCodes;
export declare const COLOR_Lab2RGB: ColorConversionCodes;
export declare const COLOR_Luv2BGR: ColorConversionCodes;
export declare const COLOR_Luv2RGB: ColorConversionCodes;
export declare const COLOR_HLS2BGR: ColorConversionCodes;
export declare const COLOR_HLS2RGB: ColorConversionCodes;
export declare const COLOR_BGR2HSV_FULL: ColorConversionCodes;
export declare const COLOR_RGB2HSV_FULL: ColorConversionCodes;
export declare const COLOR_BGR2HLS_FULL: ColorConversionCodes;
export declare const COLOR_RGB2HLS_FULL: ColorConversionCodes;
export declare const COLOR_HSV2BGR_FULL: ColorConversionCodes;
export declare const COLOR_HSV2RGB_FULL: ColorConversionCodes;
export declare const COLOR_HLS2BGR_FULL: ColorConversionCodes;
export declare const COLOR_HLS2RGB_FULL: ColorConversionCodes;
export declare const COLOR_LBGR2Lab: ColorConversionCodes;
export declare const COLOR_LRGB2Lab: ColorConversionCodes;
export declare const COLOR_LBGR2Luv: ColorConversionCodes;
export declare const COLOR_LRGB2Luv: ColorConversionCodes;
export declare const COLOR_Lab2LBGR: ColorConversionCodes;
export declare const COLOR_Lab2LRGB: ColorConversionCodes;
export declare const COLOR_Luv2LBGR: ColorConversionCodes;
export declare const COLOR_Luv2LRGB: ColorConversionCodes;
export declare const COLOR_BGR2YUV: ColorConversionCodes;
export declare const COLOR_RGB2YUV: ColorConversionCodes;
export declare const COLOR_YUV2BGR: ColorConversionCodes;
export declare const COLOR_YUV2RGB: ColorConversionCodes;
export declare const COLOR_YUV2RGB_NV12: ColorConversionCodes;
export declare const COLOR_YUV2BGR_NV12: ColorConversionCodes;
export declare const COLOR_YUV2RGB_NV21: ColorConversionCodes;
export declare const COLOR_YUV2BGR_NV21: ColorConversionCodes;
export declare const COLOR_YUV420sp2RGB: ColorConversionCodes;
export declare const COLOR_YUV420sp2BGR: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_NV12: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_NV12: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_NV21: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_NV21: ColorConversionCodes;
export declare const COLOR_YUV420sp2RGBA: ColorConversionCodes;
export declare const COLOR_YUV420sp2BGRA: ColorConversionCodes;
export declare const COLOR_YUV2RGB_YV12: ColorConversionCodes;
export declare const COLOR_YUV2BGR_YV12: ColorConversionCodes;
export declare const COLOR_YUV2RGB_IYUV: ColorConversionCodes;
export declare const COLOR_YUV2BGR_IYUV: ColorConversionCodes;
export declare const COLOR_YUV2RGB_I420: ColorConversionCodes;
export declare const COLOR_YUV2BGR_I420: ColorConversionCodes;
export declare const COLOR_YUV420p2RGB: ColorConversionCodes;
export declare const COLOR_YUV420p2BGR: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_YV12: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_YV12: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_IYUV: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_IYUV: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_I420: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_I420: ColorConversionCodes;
export declare const COLOR_YUV420p2RGBA: ColorConversionCodes;
export declare const COLOR_YUV420p2BGRA: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_420: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_NV21: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_NV12: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_YV12: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_IYUV: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_I420: ColorConversionCodes;
export declare const COLOR_YUV420sp2GRAY: ColorConversionCodes;
export declare const COLOR_YUV420p2GRAY: ColorConversionCodes;
export declare const COLOR_YUV2RGB_UYVY: ColorConversionCodes;
export declare const COLOR_YUV2BGR_UYVY: ColorConversionCodes;
export declare const COLOR_YUV2RGB_Y422: ColorConversionCodes;
export declare const COLOR_YUV2BGR_Y422: ColorConversionCodes;
export declare const COLOR_YUV2RGB_UYNV: ColorConversionCodes;
export declare const COLOR_YUV2BGR_UYNV: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_UYVY: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_UYVY: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_Y422: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_Y422: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_UYNV: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_UYNV: ColorConversionCodes;
export declare const COLOR_YUV2RGB_YUY2: ColorConversionCodes;
export declare const COLOR_YUV2BGR_YUY2: ColorConversionCodes;
export declare const COLOR_YUV2RGB_YVYU: ColorConversionCodes;
export declare const COLOR_YUV2BGR_YVYU: ColorConversionCodes;
export declare const COLOR_YUV2RGB_YUYV: ColorConversionCodes;
export declare const COLOR_YUV2BGR_YUYV: ColorConversionCodes;
export declare const COLOR_YUV2RGB_YUNV: ColorConversionCodes;
export declare const COLOR_YUV2BGR_YUNV: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_YUY2: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_YUY2: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_YVYU: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_YVYU: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_YUYV: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_YUYV: ColorConversionCodes;
export declare const COLOR_YUV2RGBA_YUNV: ColorConversionCodes;
export declare const COLOR_YUV2BGRA_YUNV: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_UYVY: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_YUY2: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_Y422: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_UYNV: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_YVYU: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_YUYV: ColorConversionCodes;
export declare const COLOR_YUV2GRAY_YUNV: ColorConversionCodes;
export declare const COLOR_RGBA2mRGBA: ColorConversionCodes;
export declare const COLOR_mRGBA2RGBA: ColorConversionCodes;
export declare const COLOR_RGB2YUV_I420: ColorConversionCodes;
export declare const COLOR_BGR2YUV_I420: ColorConversionCodes;
export declare const COLOR_RGB2YUV_IYUV: ColorConversionCodes;
export declare const COLOR_BGR2YUV_IYUV: ColorConversionCodes;
export declare const COLOR_RGBA2YUV_I420: ColorConversionCodes;
export declare const COLOR_BGRA2YUV_I420: ColorConversionCodes;
export declare const COLOR_RGBA2YUV_IYUV: ColorConversionCodes;
export declare const COLOR_BGRA2YUV_IYUV: ColorConversionCodes;
export declare const COLOR_RGB2YUV_YV12: ColorConversionCodes;
export declare const COLOR_BGR2YUV_YV12: ColorConversionCodes;
export declare const COLOR_RGBA2YUV_YV12: ColorConversionCodes;
export declare const COLOR_BGRA2YUV_YV12: ColorConversionCodes;
export declare const COLOR_BayerBG2BGR: ColorConversionCodes;
export declare const COLOR_BayerGB2BGR: ColorConversionCodes;
export declare const COLOR_BayerRG2BGR: ColorConversionCodes;
export declare const COLOR_BayerGR2BGR: ColorConversionCodes;
export declare const COLOR_BayerBG2RGB: ColorConversionCodes;
export declare const COLOR_BayerGB2RGB: ColorConversionCodes;
export declare const COLOR_BayerRG2RGB: ColorConversionCodes;
export declare const COLOR_BayerGR2RGB: ColorConversionCodes;
export declare const COLOR_BayerBG2GRAY: ColorConversionCodes;
export declare const COLOR_BayerGB2GRAY: ColorConversionCodes;
export declare const COLOR_BayerRG2GRAY: ColorConversionCodes;
export declare const COLOR_BayerGR2GRAY: ColorConversionCodes;
export declare const COLOR_BayerBG2BGR_VNG: ColorConversionCodes;
export declare const COLOR_BayerGB2BGR_VNG: ColorConversionCodes;
export declare const COLOR_BayerRG2BGR_VNG: ColorConversionCodes;
export declare const COLOR_BayerGR2BGR_VNG: ColorConversionCodes;
export declare const COLOR_BayerBG2RGB_VNG: ColorConversionCodes;
export declare const COLOR_BayerGB2RGB_VNG: ColorConversionCodes;
export declare const COLOR_BayerRG2RGB_VNG: ColorConversionCodes;
export declare const COLOR_BayerGR2RGB_VNG: ColorConversionCodes;
export declare const COLOR_BayerBG2BGR_EA: ColorConversionCodes;
export declare const COLOR_BayerGB2BGR_EA: ColorConversionCodes;
export declare const COLOR_BayerRG2BGR_EA: ColorConversionCodes;
export declare const COLOR_BayerGR2BGR_EA: ColorConversionCodes;
export declare const COLOR_BayerBG2RGB_EA: ColorConversionCodes;
export declare const COLOR_BayerGB2RGB_EA: ColorConversionCodes;
export declare const COLOR_BayerRG2RGB_EA: ColorConversionCodes;
export declare const COLOR_BayerGR2RGB_EA: ColorConversionCodes;
export declare const COLOR_BayerBG2BGRA: ColorConversionCodes;
export declare const COLOR_BayerGB2BGRA: ColorConversionCodes;
export declare const COLOR_BayerRG2BGRA: ColorConversionCodes;
export declare const COLOR_BayerGR2BGRA: ColorConversionCodes;
export declare const COLOR_BayerBG2RGBA: ColorConversionCodes;
export declare const COLOR_BayerGB2RGBA: ColorConversionCodes;
export declare const COLOR_BayerRG2RGBA: ColorConversionCodes;
export declare const COLOR_BayerGR2RGBA: ColorConversionCodes;
export declare const COLOR_COLORCVT_MAX: ColorConversionCodes;
/**
 * the color conversion codes
 *
 * [Color conversions]
 *
 */
export declare type ColorConversionCodes = any;
