/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TabsProps } from "./Tabs";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HomeEventsOverridesProps = {
    HomeEvents?: PrimitiveOverrideProps<FlexProps>;
    Tabs?: TabsProps;
    EventsPageContent?: PrimitiveOverrideProps<FlexProps>;
    SectionWrapper38581874?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38581875?: PrimitiveOverrideProps<FlexProps>;
    Header38581876?: PrimitiveOverrideProps<TextProps>;
    Tiles38581877?: PrimitiveOverrideProps<FlexProps>;
    EventCard38587398?: EventCardProps;
    EventCard38587411?: EventCardProps;
    EventCard38587424?: EventCardProps;
    EventCard38587437?: EventCardProps;
    SectionWrapper38581882?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38581883?: PrimitiveOverrideProps<FlexProps>;
    Header38581884?: PrimitiveOverrideProps<TextProps>;
    Tiles38581885?: PrimitiveOverrideProps<FlexProps>;
    EventCard38587502?: EventCardProps;
    EventCard38587515?: EventCardProps;
    EventCard38587528?: EventCardProps;
    EventCard38587541?: EventCardProps;
    SectionWrapper38581890?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38581891?: PrimitiveOverrideProps<FlexProps>;
    Header38581892?: PrimitiveOverrideProps<TextProps>;
    Tiles38581893?: PrimitiveOverrideProps<FlexProps>;
    EventCard38587606?: EventCardProps;
    EventCard38587619?: EventCardProps;
    EventCard38587632?: EventCardProps;
    EventCard38587645?: EventCardProps;
    SectionWrapper38581898?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38581899?: PrimitiveOverrideProps<FlexProps>;
    Header38581900?: PrimitiveOverrideProps<TextProps>;
    Tiles38581901?: PrimitiveOverrideProps<FlexProps>;
    EventCard38587710?: EventCardProps;
    EventCard38587723?: EventCardProps;
    EventCard38587736?: EventCardProps;
    EventCard38587749?: EventCardProps;
} & EscapeHatchProps;
export declare type HomeEventsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomeEventsOverridesProps | undefined | null;
}>;
export default function HomeEvents(props: HomeEventsProps): React.ReactElement;
