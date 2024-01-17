/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type LogInOverridesProps = {
    LogIn?: PrimitiveOverrideProps<FlexProps>;
    Button39666049?: PrimitiveOverrideProps<FlexProps>;
    Lorem39666050?: PrimitiveOverrideProps<TextProps>;
    Button39666039?: PrimitiveOverrideProps<FlexProps>;
    Lorem39666040?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogInProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LogInOverridesProps | undefined | null;
}>;
export default function LogIn(props: LogInProps): React.ReactElement;
