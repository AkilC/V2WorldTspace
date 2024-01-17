/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarContentOverridesProps = {
    AvatarContent?: PrimitiveOverrideProps<FlexProps>;
    AvatarPreviewWrapper?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38863732?: PrimitiveOverrideProps<FlexProps>;
    "Avatar Editor"?: PrimitiveOverrideProps<TextProps>;
    PreviewWrapper?: PrimitiveOverrideProps<FlexProps>;
    Preview?: PrimitiveOverrideProps<FlexProps>;
    ColorOptionsWrapper?: PrimitiveOverrideProps<FlexProps>;
    Color1Wrapper?: PrimitiveOverrideProps<FlexProps>;
    ColorBox38863738?: PrimitiveOverrideProps<FlexProps>;
    TextBox38863739?: PrimitiveOverrideProps<FlexProps>;
    "Color 1"?: PrimitiveOverrideProps<TextProps>;
    Color2Wrapper?: PrimitiveOverrideProps<FlexProps>;
    ColorBox38863742?: PrimitiveOverrideProps<FlexProps>;
    TextBox38863743?: PrimitiveOverrideProps<FlexProps>;
    "Color 2"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    AvatarOptionsWrapper?: PrimitiveOverrideProps<FlexProps>;
    AvatarRow?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38863748?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38863750?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863751?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38863752?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863753?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863754?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863755?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863756?: PrimitiveOverrideProps<IconProps>;
    Row38863757?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38863758?: PrimitiveOverrideProps<FlexProps>;
    Headwear?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38863760?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863761?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38863762?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863763?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863764?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863765?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863766?: PrimitiveOverrideProps<IconProps>;
    Row38863767?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38863768?: PrimitiveOverrideProps<FlexProps>;
    Tops?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38863770?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863771?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38863772?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863773?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863774?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863775?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863776?: PrimitiveOverrideProps<IconProps>;
    Row38863777?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38863778?: PrimitiveOverrideProps<FlexProps>;
    Bottoms?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38863780?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863781?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38863782?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863783?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863784?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38863785?: PrimitiveOverrideProps<FlexProps>;
    Arrow38863786?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AvatarContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AvatarContentOverridesProps | undefined | null;
}>;
export default function AvatarContent(props: AvatarContentProps): React.ReactElement;
