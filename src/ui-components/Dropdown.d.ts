/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DropdownOverridesProps = {
    Dropdown?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Text39184477?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    "Option 1"?: PrimitiveOverrideProps<FlexProps>;
    Text39184482?: PrimitiveOverrideProps<TextProps>;
    "Option 2"?: PrimitiveOverrideProps<FlexProps>;
    Text39184484?: PrimitiveOverrideProps<TextProps>;
    "Option 3"?: PrimitiveOverrideProps<FlexProps>;
    Text39184486?: PrimitiveOverrideProps<TextProps>;
    "Option 4"?: PrimitiveOverrideProps<FlexProps>;
    Text39184488?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Closed" | "Open";
} & {
    overrides?: DropdownOverridesProps | undefined | null;
}>;
export default function Dropdown(props: DropdownProps): React.ReactElement;