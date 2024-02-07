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
export declare type CreatorCreateFormInputValues = {
    World?: any;
    Store?: any;
    name?: string;
};
export declare type CreatorCreateFormValidationValues = {
    World?: ValidationFunction<any>;
    Store?: ValidationFunction<any>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorCreateFormOverridesProps = {
    CreatorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    World?: PrimitiveOverrideProps<AutocompleteProps>;
    Store?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorCreateFormProps = React.PropsWithChildren<{
    overrides?: CreatorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onSuccess?: (fields: CreatorCreateFormInputValues) => void;
    onError?: (fields: CreatorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onValidate?: CreatorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorCreateForm(props: CreatorCreateFormProps): React.ReactElement;
