/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type TribeOverviewOverridesProps = {
    "35"?: PrimitiveOverrideProps<TextProps>;
    "500"?: PrimitiveOverrideProps<TextProps>;
    TribeOverview?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
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
    "Frame 189"?: PrimitiveOverrideProps<FlexProps>;
    "SpaceCard(Small)38864211"?: SpaceCardSmallProps;
    "SpaceCard(Small)38864216"?: SpaceCardSmallProps;
    "SpaceCard(Small)38864206"?: SpaceCardSmallProps;
    "SpaceCard(Small)38864221"?: SpaceCardSmallProps;
    Archive?: PrimitiveOverrideProps<FlexProps>;
    "Event Archive"?: PrimitiveOverrideProps<TextProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TribeOverviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TribeOverviewOverridesProps | undefined | null;
}>;
export default function TribeOverview(props: TribeOverviewProps): React.ReactElement;
