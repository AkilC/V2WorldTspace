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
export default function AvatarSideButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector: {},
        Icons: {},
        TribePic: {},
        Wrapper: {},
        Lorem: {},
        AvatarSideButton: {},
      },
      variantValues: { variation: "Default" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M5.25 0C7.18298 0 8.75 1.56702 8.75 3.5C8.75 5.43298 7.18298 7 5.25 7C3.31702 7 1.75 5.43298 1.75 3.5C1.75 1.56702 3.31702 0 5.25 0ZM7.875 7.875L7.25375 7.875C6.01174 8.4461 4.5418 8.47077 3.24625 7.875L2.625 7.875C1.17523 7.875 0 9.05023 0 10.5L0 17.9375C0 18.6624 0.587617 19.25 1.3125 19.25L2.1875 19.25L2.1875 26.6875C2.1875 27.4124 2.77512 28 3.5 28L7 28C7.72488 28 8.3125 27.4124 8.3125 26.6875L8.3125 19.25L9.1875 19.25C9.91238 19.25 10.5 18.6624 10.5 17.9375L10.5 10.5C10.5 9.05023 9.32477 7.875 7.875 7.875Z",
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
        AvatarSideButton: { backgroundColor: "rgba(76,84,88,1)" },
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
      {...getOverrideProps(overrides, "AvatarSideButton")}
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
          gap="4px"
          direction="row"
          width="28px"
          height="28px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Icons")}
        >
          <Icon
            width="10.5px"
            height="28px"
            viewBox={{ minX: 0, minY: 0, width: 10.5, height: 28 }}
            paths={[
              {
                d: "M7.25375 7.875L7.25375 5.875L6.81596 5.875L6.41821 6.0579L7.25375 7.875ZM3.24625 7.875L4.08185 6.05792L3.68407 5.875L3.24625 5.875L3.24625 7.875ZM2.1875 19.25L4.1875 19.25L4.1875 17.25L2.1875 17.25L2.1875 19.25ZM8.3125 19.25L8.3125 17.25L6.3125 17.25L6.3125 19.25L8.3125 19.25ZM5.25 2C6.07841 2 6.75 2.67159 6.75 3.5L10.75 3.5C10.75 0.462446 8.28755 -2 5.25 -2L5.25 2ZM6.75 3.5C6.75 4.32841 6.07841 5 5.25 5L5.25 9C8.28755 9 10.75 6.53755 10.75 3.5L6.75 3.5ZM5.25 5C4.42159 5 3.75 4.32841 3.75 3.5L-0.25 3.5C-0.25 6.53755 2.21245 9 5.25 9L5.25 5ZM3.75 3.5C3.75 2.67159 4.42159 2 5.25 2L5.25 -2C2.21245 -2 -0.25 0.462446 -0.25 3.5L3.75 3.5ZM7.875 5.875L7.25375 5.875L7.25375 9.875L7.875 9.875L7.875 5.875ZM6.41821 6.0579C5.69445 6.39069 4.83506 6.40429 4.08185 6.05792L2.41065 9.69208C4.24854 10.5372 6.32903 10.5015 8.08929 9.6921L6.41821 6.0579ZM3.24625 5.875L2.625 5.875L2.625 9.875L3.24625 9.875L3.24625 5.875ZM2.625 5.875C0.0706649 5.875 -2 7.94566 -2 10.5L2 10.5C2 10.1548 2.2798 9.875 2.625 9.875L2.625 5.875ZM-2 10.5L-2 17.9375L2 17.9375L2 10.5L-2 10.5ZM-2 17.9375C-2 19.767 -0.516952 21.25 1.3125 21.25L1.3125 17.25C1.69219 17.25 2 17.5578 2 17.9375L-2 17.9375ZM1.3125 21.25L2.1875 21.25L2.1875 17.25L1.3125 17.25L1.3125 21.25ZM0.1875 19.25L0.1875 26.6875L4.1875 26.6875L4.1875 19.25L0.1875 19.25ZM0.1875 26.6875C0.1875 28.517 1.67055 30 3.5 30L3.5 26C3.87969 26 4.1875 26.3078 4.1875 26.6875L0.1875 26.6875ZM3.5 30L7 30L7 26L3.5 26L3.5 30ZM7 30C8.82945 30 10.3125 28.517 10.3125 26.6875L6.3125 26.6875C6.3125 26.3078 6.62031 26 7 26L7 30ZM10.3125 26.6875L10.3125 19.25L6.3125 19.25L6.3125 26.6875L10.3125 26.6875ZM8.3125 21.25L9.1875 21.25L9.1875 17.25L8.3125 17.25L8.3125 21.25ZM9.1875 21.25C11.017 21.25 12.5 19.767 12.5 17.9375L8.5 17.9375C8.5 17.5578 8.80781 17.25 9.1875 17.25L9.1875 21.25ZM12.5 17.9375L12.5 10.5L8.5 10.5L8.5 17.9375L12.5 17.9375ZM12.5 10.5C12.5 7.94566 10.4293 5.875 7.875 5.875L7.875 9.875C8.2202 9.875 8.5 10.1548 8.5 10.5L12.5 10.5Z",
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
        children="Avatar"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}
