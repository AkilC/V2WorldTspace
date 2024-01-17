/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SmallButtonProps } from "./SmallButton";
import { ShopCardSmallProps } from "./ShopCardSmall";
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
export declare type ShopPageContentOverridesProps = {
    ShopPageContent?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Chevron?: PrimitiveOverrideProps<ViewProps>;
    "Vector 13"?: PrimitiveOverrideProps<IconProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    "Visit World"?: PrimitiveOverrideProps<TextProps>;
    StoreDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    StoreWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 93"?: PrimitiveOverrideProps<IconProps>;
    "Shop Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur"?: PrimitiveOverrideProps<TextProps>;
    CTAGroup?: PrimitiveOverrideProps<FlexProps>;
    SmallButton39092455?: SmallButtonProps;
    SmallButton39092457?: SmallButtonProps;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Current Listings39092055"?: PrimitiveOverrideProps<FlexProps>;
    "Current Listings39092056"?: PrimitiveOverrideProps<TextProps>;
    "Card Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Small39092514"?: ShopCardSmallProps;
    "ShopCard-Small39092524"?: ShopCardSmallProps;
    "ShopCard-Small39092534"?: ShopCardSmallProps;
    "ShopCard-Small39092544"?: ShopCardSmallProps;
    "ShopCard-Small39092554"?: ShopCardSmallProps;
    "ShopCard-Small39092564"?: ShopCardSmallProps;
    "ShopCard-Small39092574"?: ShopCardSmallProps;
    "ShopCard-Small39092584"?: ShopCardSmallProps;
} & EscapeHatchProps;
export declare type ShopPageContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ShopPageContentOverridesProps | undefined | null;
}>;
export default function ShopPageContent(props: ShopPageContentProps): React.ReactElement;
