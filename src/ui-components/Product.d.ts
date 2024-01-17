/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProductOverridesProps = {
    Product?: PrimitiveOverrideProps<FlexProps>;
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Top Bar"?: PrimitiveOverrideProps<FlexProps>;
    Back?: PrimitiveOverrideProps<FlexProps>;
    Button38582083?: PrimitiveOverrideProps<FlexProps>;
    PageContent?: PrimitiveOverrideProps<FlexProps>;
    ProductWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Product Images Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 186"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    TextandButtonWrapper?: PrimitiveOverrideProps<FlexProps>;
    TextWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Product Name"?: PrimitiveOverrideProps<TextProps>;
    "Creator Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. Turpis amet tristique amet metus. Eu vel in semper enim quam. At"?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<FlexProps>;
    "TRD Logo"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "400 ($80)"?: PrimitiveOverrideProps<TextProps>;
    "CTA Stack"?: PrimitiveOverrideProps<FlexProps>;
    Button38582102?: PrimitiveOverrideProps<FlexProps>;
    Button38582103?: PrimitiveOverrideProps<FlexProps>;
    CreatorDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Creator Details"?: PrimitiveOverrideProps<TextProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    TextAndButton?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    "Tribe Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur luctus blandit nulla. Tincidunt tortor ut nisi vel sem ullamcorper neque. Ultricies commodo aliquam ut velit sem."?: PrimitiveOverrideProps<TextProps>;
    Button38582112?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProductProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductOverridesProps | undefined | null;
}>;
export default function Product(props: ProductProps): React.ReactElement;
