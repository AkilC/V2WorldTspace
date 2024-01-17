/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type EmotesContentOverridesProps = {
    EmotesContent?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    Emotes?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Small39204725"?: ShopCardSmallProps;
    "ShopCard-Small39204735"?: ShopCardSmallProps;
    "ShopCard-Small39204755"?: ShopCardSmallProps;
    "ShopCard-Small39204775"?: ShopCardSmallProps;
    "ShopCard-Small39204745"?: ShopCardSmallProps;
    "ShopCard-Small39204765"?: ShopCardSmallProps;
    "ShopCard-Small39204785"?: ShopCardSmallProps;
    "ShopCard-Small39204795"?: ShopCardSmallProps;
} & EscapeHatchProps;
export declare type EmotesContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EmotesContentOverridesProps | undefined | null;
}>;
export default function EmotesContent(props: EmotesContentProps): React.ReactElement;
