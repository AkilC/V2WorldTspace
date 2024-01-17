/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { ShopCardTallProps } from "./ShopCardTall";
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
export declare type ClothingContentOverridesProps = {
    ClothingContent?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    Clothing?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall39093304"?: ShopCardTallProps;
    "ShopCard-Tall39093314"?: ShopCardTallProps;
    "ShopCard-Tall39093334"?: ShopCardTallProps;
    "ShopCard-Tall39093354"?: ShopCardTallProps;
    "ShopCard-Tall39093324"?: ShopCardTallProps;
    "ShopCard-Tall39093344"?: ShopCardTallProps;
    "ShopCard-Tall39093364"?: ShopCardTallProps;
    "ShopCard-Tall39093374"?: ShopCardTallProps;
} & EscapeHatchProps;
export declare type ClothingContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClothingContentOverridesProps | undefined | null;
}>;
export default function ClothingContent(props: ClothingContentProps): React.ReactElement;
