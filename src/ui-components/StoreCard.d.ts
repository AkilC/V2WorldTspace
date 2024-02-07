/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type StoreCardOverridesProps = {
    StoreCard?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Content Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Name Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Store Name"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StoreCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    store?: any;
    creator?: any;
} & {
    overrides?: StoreCardOverridesProps | undefined | null;
}>;
export default function StoreCard(props: StoreCardProps): React.ReactElement;
