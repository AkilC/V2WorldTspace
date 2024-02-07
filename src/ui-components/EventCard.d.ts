/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EventCardOverridesProps = {
    "80"?: PrimitiveOverrideProps<TextProps>;
    EventCard?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    "Content Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    "Title and Detail"?: PrimitiveOverrideProps<FlexProps>;
    "Event Title"?: PrimitiveOverrideProps<TextProps>;
    "Creator Name Wrapper38511931"?: PrimitiveOverrideProps<FlexProps>;
    "By creator name"?: PrimitiveOverrideProps<TextProps>;
    "Creator Name Wrapper38511933"?: PrimitiveOverrideProps<FlexProps>;
    "12/24/23 - 12/28/23"?: PrimitiveOverrideProps<TextProps>;
    "Current Users"?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EventCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    event?: any;
    world?: any;
} & {
    overrides?: EventCardOverridesProps | undefined | null;
}>;
export default function EventCard(props: EventCardProps): React.ReactElement;
