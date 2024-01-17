/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HomeSideButtonProps } from "./HomeSideButton";
import { MarketSideButtonProps } from "./MarketSideButton";
import { ProfileSideButtonProps } from "./ProfileSideButton";
import { AvatarSideButtonProps } from "./AvatarSideButton";
import { CalendarSideButtonProps } from "./CalendarSideButton";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TribeSideButtonProps } from "./TribeSideButton";
import { CardsPremiumButtonProps } from "./CardsPremiumButton";
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
export declare type SidebarAuthenticatedOverridesProps = {
    SidebarAuthenticated?: PrimitiveOverrideProps<FlexProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    Pages?: PrimitiveOverrideProps<FlexProps>;
    HomeSideButton?: HomeSideButtonProps;
    MarketSideButton?: MarketSideButtonProps;
    ProfileSideButton?: ProfileSideButtonProps;
    AvatarSideButton?: AvatarSideButtonProps;
    CalendarSideButton?: CalendarSideButtonProps;
    Explore?: PrimitiveOverrideProps<FlexProps>;
    "Frame 187"?: PrimitiveOverrideProps<FlexProps>;
    "My Tribes"?: PrimitiveOverrideProps<TextProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Categories?: PrimitiveOverrideProps<FlexProps>;
    TribeSideButton38911381?: TribeSideButtonProps;
    TribeSideButton38911377?: TribeSideButtonProps;
    TribeSideButton38911385?: TribeSideButtonProps;
    BottomSection?: PrimitiveOverrideProps<FlexProps>;
    "Cards/PremiumButton"?: CardsPremiumButtonProps;
} & EscapeHatchProps;
export declare type SidebarAuthenticatedProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidebarAuthenticatedOverridesProps | undefined | null;
}>;
export default function SidebarAuthenticated(props: SidebarAuthenticatedProps): React.ReactElement;
