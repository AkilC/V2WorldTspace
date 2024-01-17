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
export declare type AvatarsContentOverridesProps = {
    AvatarsContent?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    Avatars?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall39093384"?: ShopCardTallProps;
    "ShopCard-Tall39093394"?: ShopCardTallProps;
    "ShopCard-Tall39093404"?: ShopCardTallProps;
    "ShopCard-Tall39093414"?: ShopCardTallProps;
    "ShopCard-Tall39093424"?: ShopCardTallProps;
    "ShopCard-Tall39093434"?: ShopCardTallProps;
    "ShopCard-Tall39093444"?: ShopCardTallProps;
    "ShopCard-Tall39093454"?: ShopCardTallProps;
} & EscapeHatchProps;
export declare type AvatarsContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AvatarsContentOverridesProps | undefined | null;
}>;
export default function AvatarsContent(props: AvatarsContentProps): React.ReactElement;
