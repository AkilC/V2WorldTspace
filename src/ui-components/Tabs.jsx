/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import ListItem from "./ListItem";
import { Flex } from "@aws-amplify/ui-react";
export default function Tabs(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="36px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Tabs")}
      {...rest}
    >
      <ListItem
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Inactive"
        {...getOverrideProps(overrides, "List Item38586432")}
      ></ListItem>
      <ListItem
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Inactive"
        {...getOverrideProps(overrides, "List Item38586433")}
      ></ListItem>
    </Flex>
  );
}
