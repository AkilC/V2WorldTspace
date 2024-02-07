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
export declare type AvatarCreateFormInputValues = {
    Profile?: any;
    model?: string;
};
export declare type AvatarCreateFormValidationValues = {
    Profile?: ValidationFunction<any>;
    model?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarCreateFormOverridesProps = {
    AvatarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Profile?: PrimitiveOverrideProps<AutocompleteProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvatarCreateFormProps = React.PropsWithChildren<{
    overrides?: AvatarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AvatarCreateFormInputValues) => AvatarCreateFormInputValues;
    onSuccess?: (fields: AvatarCreateFormInputValues) => void;
    onError?: (fields: AvatarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvatarCreateFormInputValues) => AvatarCreateFormInputValues;
    onValidate?: AvatarCreateFormValidationValues;
} & React.CSSProperties>;
export default function AvatarCreateForm(props: AvatarCreateFormProps): React.ReactElement;
