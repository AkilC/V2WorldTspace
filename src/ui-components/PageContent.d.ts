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
export declare type PageContentOverridesProps = {
    PageContent?: PrimitiveOverrideProps<FlexProps>;
    AvatarPreviewWrapper?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38582249?: PrimitiveOverrideProps<FlexProps>;
    "Avatar Editor"?: PrimitiveOverrideProps<TextProps>;
    PreviewWrapper?: PrimitiveOverrideProps<FlexProps>;
    Preview?: PrimitiveOverrideProps<FlexProps>;
    ColorOptionsWrapper?: PrimitiveOverrideProps<FlexProps>;
    Color1Wrapper?: PrimitiveOverrideProps<FlexProps>;
    ColorBox38582255?: PrimitiveOverrideProps<FlexProps>;
    TextBox38582256?: PrimitiveOverrideProps<FlexProps>;
    "Color 1"?: PrimitiveOverrideProps<TextProps>;
    Color2Wrapper?: PrimitiveOverrideProps<FlexProps>;
    ColorBox38582259?: PrimitiveOverrideProps<FlexProps>;
    TextBox38582260?: PrimitiveOverrideProps<FlexProps>;
    "Color 2"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    AvatarOptionsWrapper?: PrimitiveOverrideProps<FlexProps>;
    AvatarRow?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38582265?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38582267?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582268?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38582269?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582270?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582271?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582272?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582273?: PrimitiveOverrideProps<IconProps>;
    Row38582274?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38582275?: PrimitiveOverrideProps<FlexProps>;
    Headwear?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38582277?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582278?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38582279?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582280?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582281?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582282?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582283?: PrimitiveOverrideProps<IconProps>;
    Row38582284?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38582285?: PrimitiveOverrideProps<FlexProps>;
    Tops?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38582287?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582288?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38582289?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582290?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582291?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582292?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582293?: PrimitiveOverrideProps<IconProps>;
    Row38582294?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38582295?: PrimitiveOverrideProps<FlexProps>;
    Bottoms?: PrimitiveOverrideProps<TextProps>;
    CarouselWrapper38582297?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582298?: PrimitiveOverrideProps<IconProps>;
    ThumbnailWrapper38582299?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582300?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582301?: PrimitiveOverrideProps<FlexProps>;
    Thumbnail38582302?: PrimitiveOverrideProps<FlexProps>;
    Arrow38582303?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PageContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PageContentOverridesProps | undefined | null;
}>;
export default function PageContent(props: PageContentProps): React.ReactElement;
