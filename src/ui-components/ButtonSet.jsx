/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ButtonSet(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Save: {}, ButtonSet: { backgroundColor: "rgba(0,0,0,1)" } },
      variantValues: { property1: "Active Button" },
    },
    {
      overrides: { Save: {}, ButtonSet: {} },
      variantValues: { property1: "Inactive Button" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="423px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="16px 179px 16px 179px"
      backgroundColor="rgba(169,169,169,1)"
      display="flex"
      {...getOverrideProps(overrides, "ButtonSet")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Save"
        {...getOverrideProps(overrides, "Save")}
      ></Text>
    </Flex>
  );
}
