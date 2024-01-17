/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DiscoverContentOverridesProps = {
    DiscoverContent?: PrimitiveOverrideProps<FlexProps>;
    "Top Section"?: PrimitiveOverrideProps<FlexProps>;
    FeaturedWrapper38791802?: PrimitiveOverrideProps<FlexProps>;
    Featured?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791804?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall39093204"?: ShopCardTallProps;
    "ShopCard-Tall39093254"?: ShopCardTallProps;
    "ShopCard-Tall39093234"?: ShopCardTallProps;
    "ShopCard-Tall39093284"?: ShopCardTallProps;
    FeaturedWrapper38791809?: PrimitiveOverrideProps<FlexProps>;
    "New Releases"?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791811?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall39093224"?: ShopCardTallProps;
    "ShopCard-Tall39093264"?: ShopCardTallProps;
    "ShopCard-Tall39093194"?: ShopCardTallProps;
    "ShopCard-Tall39093244"?: ShopCardTallProps;
    FeaturedWrapper38791816?: PrimitiveOverrideProps<FlexProps>;
    "Top Selling"?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791818?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall39093294"?: ShopCardTallProps;
    "ShopCard-Tall39093184"?: ShopCardTallProps;
    "ShopCard-Tall39093274"?: ShopCardTallProps;
    "ShopCard-Tall39093214"?: ShopCardTallProps;
} & EscapeHatchProps;
export declare type DiscoverContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DiscoverContentOverridesProps | undefined | null;
}>;
export default function DiscoverContent(props: DiscoverContentProps): React.ReactElement;
