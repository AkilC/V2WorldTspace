/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SpaceCreateFormInputValues = {
    title?: string;
    World?: any;
    Events?: any[];
};
export declare type SpaceCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    World?: ValidationFunction<any>;
    Events?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpaceCreateFormOverridesProps = {
    SpaceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    World?: PrimitiveOverrideProps<AutocompleteProps>;
    Events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SpaceCreateFormProps = React.PropsWithChildren<{
    overrides?: SpaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SpaceCreateFormInputValues) => SpaceCreateFormInputValues;
    onSuccess?: (fields: SpaceCreateFormInputValues) => void;
    onError?: (fields: SpaceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpaceCreateFormInputValues) => SpaceCreateFormInputValues;
    onValidate?: SpaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function SpaceCreateForm(props: SpaceCreateFormProps): React.ReactElement;
