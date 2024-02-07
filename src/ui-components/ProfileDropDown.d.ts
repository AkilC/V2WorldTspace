/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ProfileDropDownOverridesProps = {
    ProfileDropDown?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 95"?: PrimitiveOverrideProps<IconProps>;
    ProfileText?: PrimitiveOverrideProps<FlexProps>;
    Text40072134?: PrimitiveOverrideProps<TextProps>;
    Text40072135?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Settings Frame"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40072970?: MyIconProps;
    Text40072141?: PrimitiveOverrideProps<TextProps>;
    "Customize Avatar40072142"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40072963?: MyIconProps;
    "Customize Avatar40072145"?: PrimitiveOverrideProps<TextProps>;
    Support40072146?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40072968?: MyIconProps;
    Support40072149?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 176"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40072984?: MyIconProps;
    "Frame 172"?: PrimitiveOverrideProps<FlexProps>;
    "Sign Out"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfileDropDownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProfileDropDownOverridesProps | undefined | null;
}>;
export default function ProfileDropDown(props: ProfileDropDownProps): React.ReactElement;
