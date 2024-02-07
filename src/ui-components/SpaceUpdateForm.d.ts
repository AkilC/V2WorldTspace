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
export declare type SpaceUpdateFormInputValues = {
    title?: string;
    World?: any;
    Events?: any[];
};
export declare type SpaceUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    World?: ValidationFunction<any>;
    Events?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpaceUpdateFormOverridesProps = {
    SpaceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    World?: PrimitiveOverrideProps<AutocompleteProps>;
    Events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SpaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: SpaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    space?: any;
    onSubmit?: (fields: SpaceUpdateFormInputValues) => SpaceUpdateFormInputValues;
    onSuccess?: (fields: SpaceUpdateFormInputValues) => void;
    onError?: (fields: SpaceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SpaceUpdateFormInputValues) => SpaceUpdateFormInputValues;
    onValidate?: SpaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SpaceUpdateForm(props: SpaceUpdateFormProps): React.ReactElement;
