/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LargeButtonProps } from "./LargeButton";
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
export declare type ProfileContentOverridesProps = {
    "35"?: PrimitiveOverrideProps<TextProps>;
    "500"?: PrimitiveOverrideProps<TextProps>;
    ProfileContent?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    LargeButton?: LargeButtonProps;
    ProfileDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    ProfileWrapper?: PrimitiveOverrideProps<FlexProps>;
    Avi?: PrimitiveOverrideProps<IconProps>;
    "First Last"?: PrimitiveOverrideProps<TextProps>;
    "@username38863624"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur"?: PrimitiveOverrideProps<TextProps>;
    NumbersWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Frame 113"?: PrimitiveOverrideProps<FlexProps>;
    "Tribe Members"?: PrimitiveOverrideProps<TextProps>;
    "Frame 114"?: PrimitiveOverrideProps<FlexProps>;
    "Total Events"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    TextSectionWrapper?: PrimitiveOverrideProps<FlexProps>;
    AboutWrapper?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    AboutText?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum. Sed egestas quis ac pretium congue. Condimentum urna sit morbi sapien amet. Dui erat massa et morbi elementum. Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum."?: PrimitiveOverrideProps<TextProps>;
    SocialSectionWrapper?: PrimitiveOverrideProps<FlexProps>;
    InstagramWrapper?: PrimitiveOverrideProps<FlexProps>;
    Instagram?: PrimitiveOverrideProps<TextProps>;
    UsernameField38863642?: PrimitiveOverrideProps<FlexProps>;
    "@username38863643"?: PrimitiveOverrideProps<TextProps>;
    TwitterWrapper?: PrimitiveOverrideProps<FlexProps>;
    Twitter?: PrimitiveOverrideProps<TextProps>;
    UsernameField38863646?: PrimitiveOverrideProps<FlexProps>;
    "@username38863647"?: PrimitiveOverrideProps<TextProps>;
    YoutubeWrapper?: PrimitiveOverrideProps<FlexProps>;
    Youtube?: PrimitiveOverrideProps<TextProps>;
    UsernameField38863650?: PrimitiveOverrideProps<FlexProps>;
    "@username38863651"?: PrimitiveOverrideProps<TextProps>;
    "Avatar Settings"?: PrimitiveOverrideProps<FlexProps>;
    "Avatar Thumbnail"?: PrimitiveOverrideProps<FlexProps>;
    AvatarHeader?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<TextProps>;
    Customize?: PrimitiveOverrideProps<TextProps>;
    Thumbnail?: PrimitiveOverrideProps<FlexProps>;
    InventorySection?: PrimitiveOverrideProps<FlexProps>;
    InventoryHeader?: PrimitiveOverrideProps<FlexProps>;
    Showcase?: PrimitiveOverrideProps<TextProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    InventoryItemsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Frame 65"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 66"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 67"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 68"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 69"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 70"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProfileContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProfileContentOverridesProps | undefined | null;
}>;
export default function ProfileContent(props: ProfileContentProps): React.ReactElement;
