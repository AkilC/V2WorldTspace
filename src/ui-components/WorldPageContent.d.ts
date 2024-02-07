/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SmallButtonProps } from "./SmallButton";
import { LargeButtonProps } from "./LargeButton";
import { SpaceCardSmallProps } from "./SpaceCardSmall";
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
export declare type WorldPageContentOverridesProps = {
    "35"?: PrimitiveOverrideProps<TextProps>;
    "500"?: PrimitiveOverrideProps<TextProps>;
    WorldPageContent?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Chevron?: PrimitiveOverrideProps<ViewProps>;
    "Vector 13"?: PrimitiveOverrideProps<IconProps>;
    SmallButton?: SmallButtonProps;
    WorldDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    WorldWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 93"?: PrimitiveOverrideProps<IconProps>;
    "World Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur"?: PrimitiveOverrideProps<TextProps>;
    NumbersWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Frame 113"?: PrimitiveOverrideProps<FlexProps>;
    "Tribe Members"?: PrimitiveOverrideProps<TextProps>;
    "Frame 114"?: PrimitiveOverrideProps<FlexProps>;
    "Total Events"?: PrimitiveOverrideProps<TextProps>;
    LargeButton?: LargeButtonProps;
    Divider?: PrimitiveOverrideProps<IconProps>;
    SpacesWrapper?: PrimitiveOverrideProps<FlexProps>;
    "SpaceCard(Small)39405336"?: SpaceCardSmallProps;
    "SpaceCard(Small)39405337"?: SpaceCardSmallProps;
    "SpaceCard(Small)39405338"?: SpaceCardSmallProps;
    "SpaceCard(Small)39405339"?: SpaceCardSmallProps;
    Archive?: PrimitiveOverrideProps<FlexProps>;
    "Event Archive"?: PrimitiveOverrideProps<TextProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type WorldPageContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    world?: any;
} & {
    overrides?: WorldPageContentOverridesProps | undefined | null;
}>;
export default function WorldPageContent(props: WorldPageContentProps): React.ReactElement;
