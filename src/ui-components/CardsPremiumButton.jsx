/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CardsPremiumButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="266px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(222,232,237,1)"
      {...getOverrideProps(overrides, "CardsPremiumButton")}
      {...rest}
    >
      <Text
        fontFamily="Work Sans"
        fontSize="24px"
        fontWeight="600"
        color="rgba(31,31,31,1)"
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
        children="Get Premium"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}
