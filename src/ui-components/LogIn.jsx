/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function LogIn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="22px"
      direction="row"
      width="300px"
      height="unset"
      justifyContent="flex-end"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogIn")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="100px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(255,255,255,1)"
        borderRadius="12px"
        padding="13px 21px 13px 21px"
        {...getOverrideProps(overrides, "Button39666049")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="18.76799964904785px"
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
          children="Log In"
          {...getOverrideProps(overrides, "Lorem39666050")}
        ></Text>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="100px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="16px 24px 16px 24px"
        backgroundColor="rgba(62,68,72,1)"
        {...getOverrideProps(overrides, "Button39666039")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="18.76799964904785px"
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
          children="Sign Up"
          {...getOverrideProps(overrides, "Lorem39666040")}
        ></Text>
      </Flex>
    </Flex>
  );
}
