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
export declare type WorldUpdateFormInputValues = {
    name?: string;
    Spaces?: any[];
    Creator?: any;
};
export declare type WorldUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Spaces?: ValidationFunction<any>;
    Creator?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorldUpdateFormOverridesProps = {
    WorldUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Spaces?: PrimitiveOverrideProps<AutocompleteProps>;
    Creator?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WorldUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorldUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    world?: any;
    onSubmit?: (fields: WorldUpdateFormInputValues) => WorldUpdateFormInputValues;
    onSuccess?: (fields: WorldUpdateFormInputValues) => void;
    onError?: (fields: WorldUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorldUpdateFormInputValues) => WorldUpdateFormInputValues;
    onValidate?: WorldUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorldUpdateForm(props: WorldUpdateFormProps): React.ReactElement;
