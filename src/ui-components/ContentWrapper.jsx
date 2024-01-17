/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function ContentWrapper(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="1302px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "ContentWrapper")}
      {...rest}
    ></Flex>
  );
}
