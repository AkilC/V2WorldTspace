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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ProfileSideButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector: {},
        Icons: {},
        TribePic: {},
        Wrapper: {},
        Lorem: {},
        ProfileSideButton: {},
      },
      variantValues: { variation: "Default" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M14 0C10.15 0 7 3.92 7 8.75C7 13.58 10.15 17.5 14 17.5C17.85 17.5 21 13.58 21 8.75C21 3.92 17.85 0 14 0ZM6.685 17.5C2.975 17.675 0 20.72 0 24.5L0 28L28 28L28 24.5C28 20.72 25.06 17.675 21.315 17.5C19.425 19.635 16.835 21 14 21C11.165 21 8.575 19.635 6.685 17.5Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Icons: {},
        TribePic: {},
        Wrapper: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        Lorem: { fontWeight: "600" },
        ProfileSideButton: { backgroundColor: "rgba(76,84,88,1)" },
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
      {...getOverrideProps(overrides, "ProfileSideButton")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Wrapper")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Icons")}
        >
          <Icon
            width="28px"
            height="28px"
            viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
            paths={[
              {
                d: "M6.685 17.5L8.18252 16.1743L7.5476 15.4571L6.59076 15.5022L6.685 17.5ZM0 28L-2 28L-2 30L0 30L0 28ZM28 28L28 30L30 30L30 28L28 28ZM21.315 17.5L21.4084 15.5022L20.452 15.4575L19.8175 16.1743L21.315 17.5ZM14 -2C8.65428 -2 5 3.25216 5 8.75L9 8.75C9 4.58784 11.6457 2 14 2L14 -2ZM5 8.75C5 14.2478 8.65428 19.5 14 19.5L14 15.5C11.6457 15.5 9 12.9122 9 8.75L5 8.75ZM14 19.5C19.3457 19.5 23 14.2478 23 8.75L19 8.75C19 12.9122 16.3543 15.5 14 15.5L14 19.5ZM23 8.75C23 3.25216 19.3457 -2 14 -2L14 2C16.3543 2 19 4.58784 19 8.75L23 8.75ZM6.59076 15.5022C1.82889 15.7268 -2 19.6372 -2 24.5L2 24.5C2 21.8028 4.12111 19.6232 6.77923 19.4978L6.59076 15.5022ZM-2 24.5L-2 28L2 28L2 24.5L-2 24.5ZM0 30L28 30L28 26L0 26L0 30ZM30 28L30 24.5L26 24.5L26 28L30 28ZM30 24.5C30 19.6444 26.2131 15.7267 21.4084 15.5022L21.2216 19.4978C23.9069 19.6233 26 21.7956 26 24.5L30 24.5ZM19.8175 16.1743C18.2398 17.9565 16.1681 19 14 19L14 23C17.5019 23 20.6102 21.3135 22.8125 18.8257L19.8175 16.1743ZM14 19C11.8319 19 9.76018 17.9565 8.18252 16.1743L5.18748 18.8257C7.38982 21.3135 10.4981 23 14 23L14 19Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <View
          width="32px"
          height="32px"
          display="none"
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
        children="Profile"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}
