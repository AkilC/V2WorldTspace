/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TabsProps } from "./Tabs";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { WorldCardProps } from "./WorldCard";
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
export declare type HomeWorldsOverridesProps = {
    HomeWorlds?: PrimitiveOverrideProps<FlexProps>;
    Tabs?: TabsProps;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    "All worlds"?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Frame 42"?: PrimitiveOverrideProps<FlexProps>;
    WorldCard38587814?: WorldCardProps;
    WorldCard38587834?: WorldCardProps;
    WorldCard38587844?: WorldCardProps;
    WorldCard38587854?: WorldCardProps;
    WorldCard38587824?: WorldCardProps;
    WorldCard38587864?: WorldCardProps;
} & EscapeHatchProps;
export declare type HomeWorldsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomeWorldsOverridesProps | undefined | null;
}>;
export default function HomeWorlds(props: HomeWorldsProps): React.ReactElement;
