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
export declare type ClothingOverridesProps = {
    Clothing?: PrimitiveOverrideProps<FlexProps>;
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    Clothing38582065?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    Cards38582070?: PrimitiveOverrideProps<FlexProps>;
    Cards38582071?: PrimitiveOverrideProps<FlexProps>;
    Cards38582072?: PrimitiveOverrideProps<FlexProps>;
    Cards38582073?: PrimitiveOverrideProps<FlexProps>;
    Cards38582074?: PrimitiveOverrideProps<FlexProps>;
    Cards38582075?: PrimitiveOverrideProps<FlexProps>;
    Cards38582076?: PrimitiveOverrideProps<FlexProps>;
    Cards38582077?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ClothingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClothingOverridesProps | undefined | null;
}>;
export default function Clothing(props: ClothingProps): React.ReactElement;
