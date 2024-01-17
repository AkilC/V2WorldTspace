/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HomeSideButtonProps } from "./HomeSideButton";
import { MarketSideButtonProps } from "./MarketSideButton";
import { ProfileSideButtonProps } from "./ProfileSideButton";
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
export declare type SidebarUnauthenticatedOverridesProps = {
    SidebarUnauthenticated?: PrimitiveOverrideProps<FlexProps>;
    "Content Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    Pages?: PrimitiveOverrideProps<FlexProps>;
    HomeSideButton?: HomeSideButtonProps;
    MarketSideButton?: MarketSideButtonProps;
    ProfileSideButton?: ProfileSideButtonProps;
    "Sign In Wrapper38584822"?: PrimitiveOverrideProps<FlexProps>;
    "Sign in to customize your avatar, join tribes, and earn points."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Explore?: PrimitiveOverrideProps<FlexProps>;
    "Frame 187"?: PrimitiveOverrideProps<FlexProps>;
    "My Tribes"?: PrimitiveOverrideProps<TextProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    "Sign In Wrapper38584829"?: PrimitiveOverrideProps<FlexProps>;
    "You currently have no tribes joined."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SidebarUnauthenticatedProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidebarUnauthenticatedOverridesProps | undefined | null;
}>;
export default function SidebarUnauthenticated(props: SidebarUnauthenticatedProps): React.ReactElement;
