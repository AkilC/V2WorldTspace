/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import TribePoints from "./TribePoints";
import IconSet from "./IconSet";
import { Flex } from "@aws-amplify/ui-react";
export default function MenuItems(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="300px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MenuItems")}
      {...rest}
    >
      <TribePoints
        display="flex"
        gap="9px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TribePoints")}
      ></TribePoints>
      <IconSet
        display="flex"
        gap="8px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="48px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(62,68,72,1)"
        {...getOverrideProps(overrides, "Icon Set")}
      ></IconSet>
    </Flex>
  );
}
