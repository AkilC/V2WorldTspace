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
export declare type TribePointsOverridesProps = {
    TribePoints?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector38621270?: PrimitiveOverrideProps<IconProps>;
    Vector38621271?: PrimitiveOverrideProps<IconProps>;
    Vector38621273?: PrimitiveOverrideProps<IconProps>;
    Vector38621274?: PrimitiveOverrideProps<IconProps>;
    Vector38621276?: PrimitiveOverrideProps<IconProps>;
    Vector38621277?: PrimitiveOverrideProps<IconProps>;
    Vector38621279?: PrimitiveOverrideProps<IconProps>;
    Vector38621280?: PrimitiveOverrideProps<IconProps>;
    Vector38621282?: PrimitiveOverrideProps<IconProps>;
    Vector38621283?: PrimitiveOverrideProps<IconProps>;
    Vector38621284?: PrimitiveOverrideProps<IconProps>;
    Vector38621285?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    "60 TP"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TribePointsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TribePointsOverridesProps | undefined | null;
}>;
export default function TribePoints(props: TribePointsProps): React.ReactElement;
