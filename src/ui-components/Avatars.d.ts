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
export declare type AvatarsOverridesProps = {
    Avatars?: PrimitiveOverrideProps<FlexProps>;
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Header and Sort"?: PrimitiveOverrideProps<FlexProps>;
    Avatars38582048?: PrimitiveOverrideProps<TextProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    "Sort by"?: PrimitiveOverrideProps<TextProps>;
    "Vector 11"?: PrimitiveOverrideProps<IconProps>;
    "Tile Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    Cards38582053?: PrimitiveOverrideProps<FlexProps>;
    Cards38582054?: PrimitiveOverrideProps<FlexProps>;
    Cards38582055?: PrimitiveOverrideProps<FlexProps>;
    Cards38582056?: PrimitiveOverrideProps<FlexProps>;
    Cards38582057?: PrimitiveOverrideProps<FlexProps>;
    Cards38582058?: PrimitiveOverrideProps<FlexProps>;
    Cards38582059?: PrimitiveOverrideProps<FlexProps>;
    Cards38582060?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type AvatarsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AvatarsOverridesProps | undefined | null;
}>;
export default function Avatars(props: AvatarsProps): React.ReactElement;
