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
export declare type ShopCardSmallOverridesProps = {
    ShopCardSmall?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TextWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Name Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Item name"?: PrimitiveOverrideProps<TextProps>;
    "Creator name"?: PrimitiveOverrideProps<TextProps>;
    PriceWrapper?: PrimitiveOverrideProps<FlexProps>;
    "TRD Logo"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "400 ($80)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ShopCardSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ShopCardSmallOverridesProps | undefined | null;
}>;
export default function ShopCardSmall(props: ShopCardSmallProps): React.ReactElement;