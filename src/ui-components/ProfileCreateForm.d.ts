/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProfileCreateFormInputValues = {
    username?: string;
    name?: string;
    instagram?: string;
    twitter?: string;
};
export declare type ProfileCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCreateFormOverridesProps = {
    ProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onSuccess?: (fields: ProfileCreateFormInputValues) => void;
    onError?: (fields: ProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onValidate?: ProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileCreateForm(props: ProfileCreateFormProps): React.ReactElement;
