/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { DropdownProps } from "./Dropdown";
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
export declare type WorldsContentOverridesProps = {
    WorldsContent?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    "All worlds"?: PrimitiveOverrideProps<TextProps>;
    Dropdown?: DropdownProps;
    "Frame 42"?: PrimitiveOverrideProps<FlexProps>;
    WorldCard38723946?: WorldCardProps;
    WorldCard38723947?: WorldCardProps;
    WorldCard38723948?: WorldCardProps;
    WorldCard38723949?: WorldCardProps;
    WorldCard38723950?: WorldCardProps;
    WorldCard38723951?: WorldCardProps;
} & EscapeHatchProps;
export declare type WorldsContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WorldsContentOverridesProps | undefined | null;
}>;
export default function WorldsContent(props: WorldsContentProps): React.ReactElement;
