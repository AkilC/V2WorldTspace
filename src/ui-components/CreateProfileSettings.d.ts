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
export declare type CreateProfileSettingsInputValues = {
    username?: string;
    name?: string;
    instagram?: string;
    twitter?: string;
    Avatar?: any;
    bio?: string;
    baseAvatarColor?: string;
};
export declare type CreateProfileSettingsValidationValues = {
    username?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    Avatar?: ValidationFunction<any>;
    bio?: ValidationFunction<string>;
    baseAvatarColor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateProfileSettingsOverridesProps = {
    CreateProfileSettingsGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    Avatar?: PrimitiveOverrideProps<AutocompleteProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    baseAvatarColor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateProfileSettingsProps = React.PropsWithChildren<{
    overrides?: CreateProfileSettingsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateProfileSettingsInputValues) => CreateProfileSettingsInputValues;
    onSuccess?: (fields: CreateProfileSettingsInputValues) => void;
    onError?: (fields: CreateProfileSettingsInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateProfileSettingsInputValues) => CreateProfileSettingsInputValues;
    onValidate?: CreateProfileSettingsValidationValues;
} & React.CSSProperties>;
export default function CreateProfileSettings(props: CreateProfileSettingsProps): React.ReactElement;
