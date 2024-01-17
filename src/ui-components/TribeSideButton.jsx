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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TribeSideButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        TribePic: {},
        Wrapper: {},
        "Tribe Name": {},
        TribeSideButton: {},
      },
      variantValues: { variation: "Default" },
    },
    {
      overrides: {
        TribePic: {},
        Wrapper: {},
        "Tribe Name": { fontWeight: "600" },
        TribeSideButton: { backgroundColor: "rgba(76,84,88,1)" },
      },
      variantValues: { variation: "Active" },
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
      width="258px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(31,31,31,1)"
      display="flex"
      {...getOverrideProps(overrides, "TribeSideButton")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Wrapper")}
      >
        <View
          width="28px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="36px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "TribePic")}
        ></View>
      </Flex>
      <Text
        fontFamily="Work Sans"
        fontSize="24px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.11px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tribe Name"
        {...getOverrideProps(overrides, "Tribe Name")}
      ></Text>
    </Flex>
  );
}
