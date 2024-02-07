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
export declare type AvatarUpdateFormInputValues = {
    Profile?: any;
    model?: string;
};
export declare type AvatarUpdateFormValidationValues = {
    Profile?: ValidationFunction<any>;
    model?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarUpdateFormOverridesProps = {
    AvatarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Profile?: PrimitiveOverrideProps<AutocompleteProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvatarUpdateFormProps = React.PropsWithChildren<{
    overrides?: AvatarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    avatar?: any;
    onSubmit?: (fields: AvatarUpdateFormInputValues) => AvatarUpdateFormInputValues;
    onSuccess?: (fields: AvatarUpdateFormInputValues) => void;
    onError?: (fields: AvatarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvatarUpdateFormInputValues) => AvatarUpdateFormInputValues;
    onValidate?: AvatarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AvatarUpdateForm(props: AvatarUpdateFormProps): React.ReactElement;
