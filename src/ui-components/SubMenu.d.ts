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
export declare type SubMenuOverridesProps = {
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    SubMenu39204550?: PrimitiveOverrideProps<FlexProps>;
    ItemWrapper?: PrimitiveOverrideProps<FlexProps>;
    "List Item39224806"?: PrimitiveOverrideProps<FlexProps>;
    Lorem39224807?: PrimitiveOverrideProps<TextProps>;
    "List Item39224808"?: PrimitiveOverrideProps<FlexProps>;
    Lorem39224809?: PrimitiveOverrideProps<TextProps>;
    "List Item39224810"?: PrimitiveOverrideProps<FlexProps>;
    Lorem39224811?: PrimitiveOverrideProps<TextProps>;
    "List Item39224812"?: PrimitiveOverrideProps<FlexProps>;
    Lorem39224813?: PrimitiveOverrideProps<TextProps>;
    "List Item39224814"?: PrimitiveOverrideProps<FlexProps>;
    Lorem39224815?: PrimitiveOverrideProps<TextProps>;
    SubMenu39204547?: PrimitiveOverrideProps<FlexProps>;
    "List Item39204548"?: PrimitiveOverrideProps<FlexProps>;
    "Cart (0)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SubMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SubMenuOverridesProps | undefined | null;
}>;
export default function SubMenu(props: SubMenuProps): React.ReactElement;
