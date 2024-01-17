/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { MenuItemsProps } from "./MenuItems";
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
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 85 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 86 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 87 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 89"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 88 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "triber.space"?: PrimitiveOverrideProps<TextProps>;
    "Search Bar"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"magnifying glass\""?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Menu Items"?: MenuItemsProps;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
