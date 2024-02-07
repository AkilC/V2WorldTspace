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
export declare type WorldCardOverridesProps = {
    "40"?: PrimitiveOverrideProps<TextProps>;
    WorldCard?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Content Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Name Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "World Name"?: PrimitiveOverrideProps<TextProps>;
    "Current users"?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type WorldCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    world?: any;
} & {
    overrides?: WorldCardOverridesProps | undefined | null;
}>;
export default function WorldCard(props: WorldCardProps): React.ReactElement;
