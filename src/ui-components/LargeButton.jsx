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
export default function LargeButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Lorem: {}, LargeButton: {} },
      variantValues: { variation: "Primary" },
    },
    {
      overrides: {
        Lorem: { color: "rgba(255,255,255,1)" },
        LargeButton: {
          padding: "9px 9px 9px 9px",
          border: "3px SOLID rgba(255,255,255,1)",
        },
      },
      variantValues: { variation: "Secondary" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="row"
      width="474px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="36px"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(222,232,237,1)"
      display="flex"
      {...getOverrideProps(overrides, "LargeButton")}
      {...rest}
    >
      <Text
        fontFamily="Work Sans"
        fontSize="20px"
        fontWeight="600"
        color="rgba(31,31,31,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.07px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}