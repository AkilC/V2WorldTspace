/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { StoreCardProps } from "./StoreCard";
import { LargeButtonProps } from "./LargeButton";
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
export declare type ShopsContentOverridesProps = {
    ShopsContent?: PrimitiveOverrideProps<FlexProps>;
    PageContent?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    "All stores"?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    StoreCard38792159?: StoreCardProps;
    StoreCard38792165?: StoreCardProps;
    StoreCard38792171?: StoreCardProps;
    StoreCard38792177?: StoreCardProps;
    StoreCard38792183?: StoreCardProps;
    StoreCard38792189?: StoreCardProps;
    StoreCard38792195?: StoreCardProps;
    StoreCard38792201?: StoreCardProps;
    "Coming Soon"?: PrimitiveOverrideProps<FlexProps>;
    "More stores coming soon :)"?: PrimitiveOverrideProps<TextProps>;
    LargeButton?: LargeButtonProps;
} & EscapeHatchProps;
export declare type ShopsContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ShopsContentOverridesProps | undefined | null;
}>;
export default function ShopsContent(props: ShopsContentProps): React.ReactElement;
