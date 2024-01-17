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
export default function HomeSideButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector: {},
        Icons: {},
        TribePic: {},
        Wrapper: {},
        Lorem: {},
        HomeSideButton: {},
      },
      variantValues: { variation: "Default" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M14 0L0 12L3.5 12L3.5 28L10.5 28L10.5 22L17.5 22L17.5 28L24.5 28L24.5 11.88L28 12L14 0Z",
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
        HomeSideButton: { backgroundColor: "rgba(76,84,88,1)" },
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
      {...getOverrideProps(overrides, "HomeSideButton")}
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
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
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
                d: "M14 0L15.3016 -1.51851L14 -2.63416L12.6984 -1.51851L14 0ZM0 12L-1.30158 10.4815L-5.40651 14L0 14L0 12ZM3.5 12L5.5 12L5.5 10L3.5 10L3.5 12ZM3.5 28L1.5 28L1.5 30L3.5 30L3.5 28ZM10.5 28L10.5 30L12.5 30L12.5 28L10.5 28ZM10.5 22L10.5 20L8.5 20L8.5 22L10.5 22ZM17.5 22L19.5 22L19.5 20L17.5 20L17.5 22ZM17.5 28L15.5 28L15.5 30L17.5 30L17.5 28ZM24.5 28L24.5 30L26.5 30L26.5 28L24.5 28ZM24.5 11.88L24.5685 9.88118L22.5 9.81025L22.5 11.88L24.5 11.88ZM28 12L27.9315 13.9988L33.6332 14.1943L29.3016 10.4815L28 12ZM12.6984 -1.51851L-1.30158 10.4815L1.30158 13.5185L15.3016 1.51851L12.6984 -1.51851ZM0 14L3.5 14L3.5 10L0 10L0 14ZM1.5 12L1.5 28L5.5 28L5.5 12L1.5 12ZM3.5 30L10.5 30L10.5 26L3.5 26L3.5 30ZM12.5 28L12.5 22L8.5 22L8.5 28L12.5 28ZM10.5 24L17.5 24L17.5 20L10.5 20L10.5 24ZM15.5 22L15.5 28L19.5 28L19.5 22L15.5 22ZM17.5 30L24.5 30L24.5 26L17.5 26L17.5 30ZM26.5 28L26.5 11.88L22.5 11.88L22.5 28L26.5 28ZM24.4315 13.8788L27.9315 13.9988L28.0685 10.0012L24.5685 9.88118L24.4315 13.8788ZM29.3016 10.4815L15.3016 -1.51851L12.6984 1.51851L26.6984 13.5185L29.3016 10.4815Z",
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
        children="Home"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}
