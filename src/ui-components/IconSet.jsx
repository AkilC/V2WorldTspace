/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import { Flex } from "@aws-amplify/ui-react";
export default function IconSet(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="40px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="48px"
      padding="8px 16px 8px 16px"
      backgroundColor="rgba(62,68,72,1)"
      {...getOverrideProps(overrides, "IconSet")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "Icons40073271")}
      >
        <MyIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="Dashboard"
          {...getOverrideProps(overrides, "MyIcon40073272")}
        ></MyIcon>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "Icons40073273")}
      >
        <MyIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="Notif2"
          {...getOverrideProps(overrides, "MyIcon40073274")}
        ></MyIcon>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="2.909090757369995px"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "Icons40073275")}
      >
        <MyIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="PersonFill"
          {...getOverrideProps(overrides, "MyIcon40073276")}
        ></MyIcon>
      </Flex>
    </Flex>
  );
}
