/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
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
export declare type IconSetOverridesProps = {
    IconSet?: PrimitiveOverrideProps<FlexProps>;
    Icons40073271?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40073272?: MyIconProps;
    Icons40073273?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40073274?: MyIconProps;
    Icons40073275?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40073276?: MyIconProps;
} & EscapeHatchProps;
export declare type IconSetProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: IconSetOverridesProps | undefined | null;
}>;
export default function IconSet(props: IconSetProps): React.ReactElement;
