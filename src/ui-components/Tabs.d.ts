/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ListItemProps } from "./ListItem";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type TabsOverridesProps = {
    Tabs?: PrimitiveOverrideProps<FlexProps>;
    "List Item38586432"?: ListItemProps;
    "List Item38586433"?: ListItemProps;
} & EscapeHatchProps;
export declare type TabsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TabsOverridesProps | undefined | null;
}>;
export default function Tabs(props: TabsProps): React.ReactElement;
