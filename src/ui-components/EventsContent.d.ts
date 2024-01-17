/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type EventsContentOverridesProps = {
    EventsContent?: PrimitiveOverrideProps<FlexProps>;
    SectionWrapper38723182?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38723183?: PrimitiveOverrideProps<FlexProps>;
    Header38723184?: PrimitiveOverrideProps<TextProps>;
    Tiles38723185?: PrimitiveOverrideProps<FlexProps>;
    EventCard38723186?: EventCardProps;
    EventCard38723187?: EventCardProps;
    EventCard38723188?: EventCardProps;
    EventCard38723189?: EventCardProps;
    SectionWrapper38723190?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38723191?: PrimitiveOverrideProps<FlexProps>;
    Header38723192?: PrimitiveOverrideProps<TextProps>;
    Tiles38723193?: PrimitiveOverrideProps<FlexProps>;
    EventCard38723194?: EventCardProps;
    EventCard38723195?: EventCardProps;
    EventCard38723196?: EventCardProps;
    EventCard38723197?: EventCardProps;
    SectionWrapper38723198?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38723199?: PrimitiveOverrideProps<FlexProps>;
    Header38723200?: PrimitiveOverrideProps<TextProps>;
    Tiles38723201?: PrimitiveOverrideProps<FlexProps>;
    EventCard38723202?: EventCardProps;
    EventCard38723203?: EventCardProps;
    EventCard38723204?: EventCardProps;
    EventCard38723205?: EventCardProps;
    SectionWrapper38723206?: PrimitiveOverrideProps<FlexProps>;
    HeaderWrapper38723207?: PrimitiveOverrideProps<FlexProps>;
    Header38723208?: PrimitiveOverrideProps<TextProps>;
    Tiles38723209?: PrimitiveOverrideProps<FlexProps>;
    EventCard38723210?: EventCardProps;
    EventCard38723211?: EventCardProps;
    EventCard38723212?: EventCardProps;
    EventCard38723213?: EventCardProps;
} & EscapeHatchProps;
export declare type EventsContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EventsContentOverridesProps | undefined | null;
}>;
export default function EventsContent(props: EventsContentProps): React.ReactElement;
