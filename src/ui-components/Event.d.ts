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
export declare type EventOverridesProps = {
    "45"?: PrimitiveOverrideProps<TextProps>;
    "80"?: PrimitiveOverrideProps<TextProps>;
    Event?: PrimitiveOverrideProps<FlexProps>;
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
    Text38581932?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor."?: PrimitiveOverrideProps<TextProps>;
    Stats?: PrimitiveOverrideProps<FlexProps>;
    Favorites?: PrimitiveOverrideProps<FlexProps>;
    Icons38589373?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"star outline\""?: PrimitiveOverrideProps<FlexProps>;
    Vector38589375?: PrimitiveOverrideProps<IconProps>;
    "Active People"?: PrimitiveOverrideProps<FlexProps>;
    Icons38589371?: PrimitiveOverrideProps<FlexProps>;
    Vector38589372?: PrimitiveOverrideProps<IconProps>;
    LargeButton38587897?: LargeButtonProps;
    CreatorDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Creator Details"?: PrimitiveOverrideProps<TextProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    TextAndButton?: PrimitiveOverrideProps<FlexProps>;
    Text38581947?: PrimitiveOverrideProps<FlexProps>;
    "World Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur luctus blandit nulla. Tincidunt tortor ut nisi vel sem ullamcorper neque. Ultricies commodo aliquam ut velit sem."?: PrimitiveOverrideProps<TextProps>;
    LargeButton38589186?: LargeButtonProps;
    SocialsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Social Links"?: PrimitiveOverrideProps<TextProps>;
    LinksWrapper?: PrimitiveOverrideProps<FlexProps>;
    Link1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10438581955"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more38581956"?: PrimitiveOverrideProps<TextProps>;
    Link2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10438581958"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more38581959"?: PrimitiveOverrideProps<TextProps>;
    Link3?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10438581961"?: PrimitiveOverrideProps<ViewProps>;
    "Join for more38581962"?: PrimitiveOverrideProps<TextProps>;
    Recs?: PrimitiveOverrideProps<FlexProps>;
    "Other Recommendations"?: PrimitiveOverrideProps<TextProps>;
    TilesWrapper?: PrimitiveOverrideProps<FlexProps>;
    EventCard38589134?: EventCardProps;
    EventCard38589147?: EventCardProps;
    EventCard38589160?: EventCardProps;
    EventCard38589173?: EventCardProps;
} & EscapeHatchProps;
export declare type EventProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EventOverridesProps | undefined | null;
}>;
export default function Event(props: EventProps): React.ReactElement;
