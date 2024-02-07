/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SmallButtonProps } from "./SmallButton";
import { LargeButtonProps } from "./LargeButton";
import { EventCardProps } from "./EventCard";
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
export declare type EventPageContentOverridesProps = {
    "45"?: PrimitiveOverrideProps<TextProps>;
    "80"?: PrimitiveOverrideProps<TextProps>;
    EventPageContent?: PrimitiveOverrideProps<FlexProps>;
    "Top Bar"?: PrimitiveOverrideProps<FlexProps>;
    Back?: PrimitiveOverrideProps<FlexProps>;
    Chevron?: PrimitiveOverrideProps<ViewProps>;
    "Vector 13"?: PrimitiveOverrideProps<IconProps>;
    SmallButton?: SmallButtonProps;
    EventWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    TextandButtonWrapper?: PrimitiveOverrideProps<FlexProps>;
    TextWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Event Name"?: PrimitiveOverrideProps<TextProps>;
    "12/24/23 - 12/28/23"?: PrimitiveOverrideProps<TextProps>;
    Text39355221?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor."?: PrimitiveOverrideProps<TextProps>;
    Stats?: PrimitiveOverrideProps<FlexProps>;
    Favorites?: PrimitiveOverrideProps<FlexProps>;
    Icons39355226?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"star outline\""?: PrimitiveOverrideProps<FlexProps>;
    Vector39355228?: PrimitiveOverrideProps<IconProps>;
    "Active People"?: PrimitiveOverrideProps<FlexProps>;
    Icons39355231?: PrimitiveOverrideProps<FlexProps>;
    Vector39355232?: PrimitiveOverrideProps<IconProps>;
    LargeButton39355233?: LargeButtonProps;
    CreatorDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Creator Details"?: PrimitiveOverrideProps<TextProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    TextAndButton?: PrimitiveOverrideProps<FlexProps>;
    Text39355239?: PrimitiveOverrideProps<FlexProps>;
    "World Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur luctus blandit nulla. Tincidunt tortor ut nisi vel sem ullamcorper neque. Ultricies commodo aliquam ut velit sem."?: PrimitiveOverrideProps<TextProps>;
    LargeButton39355242?: LargeButtonProps;
    SocialsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Social Links"?: PrimitiveOverrideProps<TextProps>;
    LinksWrapper?: PrimitiveOverrideProps<FlexProps>;
    Link1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10439355247"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more39355248"?: PrimitiveOverrideProps<TextProps>;
    Link2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10439355250"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more39355251"?: PrimitiveOverrideProps<TextProps>;
    Link3?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10439355253"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more39355254"?: PrimitiveOverrideProps<TextProps>;
    Recs?: PrimitiveOverrideProps<FlexProps>;
    "Other Recommendations"?: PrimitiveOverrideProps<TextProps>;
    TilesWrapper?: PrimitiveOverrideProps<FlexProps>;
    EventCard39355258?: EventCardProps;
    EventCard39355259?: EventCardProps;
    EventCard39355260?: EventCardProps;
    EventCard39355261?: EventCardProps;
} & EscapeHatchProps;
export declare type EventPageContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    event?: any;
    world?: any;
} & {
    overrides?: EventPageContentOverridesProps | undefined | null;
}>;
export default function EventPageContent(props: EventPageContentProps): React.ReactElement;
