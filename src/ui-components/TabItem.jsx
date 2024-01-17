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
import ListItem from "./ListItem";
import { Flex } from "@aws-amplify/ui-react";
export default function TabItem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "List Item": {}, TabItem: {} },
      variantValues: { state: "Default" },
    },
    {
      overrides: { "List Item": { state: "Active" }, TabItem: {} },
      variantValues: { state: "Active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "TabItem")}
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
        {...getOverrideProps(overrides, "List Item")}
      ></ListItem>
    </Flex>
  );
}
