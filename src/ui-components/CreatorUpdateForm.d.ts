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
export declare type CreatorUpdateFormInputValues = {
    World?: any;
    Store?: any;
    name?: string;
};
export declare type CreatorUpdateFormValidationValues = {
    World?: ValidationFunction<any>;
    Store?: ValidationFunction<any>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorUpdateFormOverridesProps = {
    CreatorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    World?: PrimitiveOverrideProps<AutocompleteProps>;
    Store?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreatorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creator?: any;
    onSubmit?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onSuccess?: (fields: CreatorUpdateFormInputValues) => void;
    onError?: (fields: CreatorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onValidate?: CreatorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorUpdateForm(props: CreatorUpdateFormProps): React.ReactElement;
