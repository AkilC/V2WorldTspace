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
export default function CalendarSideButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector: {},
        '\uD83E\uDD86 icon "calendar"': {},
        Icons: {},
        TribePic: {},
        Wrapper: {},
        Lorem: {},
        CalendarSideButton: {},
      },
      variantValues: { variation: "Default" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M0.0399429 0L0.0399429 7L28 7L28 0L0.0399429 0ZM0.0399429 10.5L0.0399429 27.685C0.0399429 27.86 0.199715 28 0.399429 28L27.6006 28C27.8003 28 27.9601 27.86 27.9601 27.685L27.9601 10.5L0 10.5L0.0399429 10.5ZM4.03424 14L8.02853 14L8.02853 17.5L4.03424 17.5L4.03424 14ZM12.0228 14L16.0171 14L16.0171 17.5L12.0228 17.5L12.0228 14ZM20.0114 14L24.0057 14L24.0057 17.5L20.0114 17.5L20.0114 14ZM4.03424 21L8.02853 21L8.02853 24.5L4.03424 24.5L4.03424 21ZM12.0228 21L16.0171 21L16.0171 24.5L12.0228 24.5L12.0228 21Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        '\uD83E\uDD86 icon "calendar"': {},
        Icons: {},
        TribePic: {},
        Wrapper: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        Lorem: { fontWeight: "600" },
        CalendarSideButton: { backgroundColor: "rgba(76,84,88,1)" },
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
      {...getOverrideProps(overrides, "CalendarSideButton")}
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
          height="28px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Icons")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="28px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, '\uD83E\uDD86 icon "calendar"')}
          >
            <Icon
              width="28px"
              height="28px"
              viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
              paths={[
                {
                  d: "M0.0399429 0L0.0399429 -2L-1.96006 -2L-1.96006 0L0.0399429 0ZM0.0399429 7L-1.96006 7L-1.96006 9L0.0399429 9L0.0399429 7ZM28 7L28 9L30 9L30 7L28 7ZM28 0L30 0L30 -2L28 -2L28 0ZM0.0399429 10.5L2.03994 10.5L2.03994 8.5L0.0399429 8.5L0.0399429 10.5ZM27.9601 10.5L29.9601 10.5L29.9601 8.5L27.9601 8.5L27.9601 10.5ZM4.03424 14L4.03424 12L2.03424 12L2.03424 14L4.03424 14ZM8.02853 14L10.0285 14L10.0285 12L8.02853 12L8.02853 14ZM8.02853 17.5L8.02853 19.5L10.0285 19.5L10.0285 17.5L8.02853 17.5ZM4.03424 17.5L2.03424 17.5L2.03424 19.5L4.03424 19.5L4.03424 17.5ZM12.0228 14L12.0228 12L10.0228 12L10.0228 14L12.0228 14ZM16.0171 14L18.0171 14L18.0171 12L16.0171 12L16.0171 14ZM16.0171 17.5L16.0171 19.5L18.0171 19.5L18.0171 17.5L16.0171 17.5ZM12.0228 17.5L10.0228 17.5L10.0228 19.5L12.0228 19.5L12.0228 17.5ZM20.0114 14L20.0114 12L18.0114 12L18.0114 14L20.0114 14ZM24.0057 14L26.0057 14L26.0057 12L24.0057 12L24.0057 14ZM24.0057 17.5L24.0057 19.5L26.0057 19.5L26.0057 17.5L24.0057 17.5ZM20.0114 17.5L18.0114 17.5L18.0114 19.5L20.0114 19.5L20.0114 17.5ZM4.03424 21L4.03424 19L2.03424 19L2.03424 21L4.03424 21ZM8.02853 21L10.0285 21L10.0285 19L8.02853 19L8.02853 21ZM8.02853 24.5L8.02853 26.5L10.0285 26.5L10.0285 24.5L8.02853 24.5ZM4.03424 24.5L2.03424 24.5L2.03424 26.5L4.03424 26.5L4.03424 24.5ZM12.0228 21L12.0228 19L10.0228 19L10.0228 21L12.0228 21ZM16.0171 21L18.0171 21L18.0171 19L16.0171 19L16.0171 21ZM16.0171 24.5L16.0171 26.5L18.0171 26.5L18.0171 24.5L16.0171 24.5ZM12.0228 24.5L10.0228 24.5L10.0228 26.5L12.0228 26.5L12.0228 24.5ZM-1.96006 0L-1.96006 7L2.03994 7L2.03994 0L-1.96006 0ZM0.0399429 9L28 9L28 5L0.0399429 5L0.0399429 9ZM30 7L30 0L26 0L26 7L30 7ZM28 -2L0.0399429 -2L0.0399429 2L28 2L28 -2ZM-1.96006 10.5L-1.96006 27.685L2.03994 27.685L2.03994 10.5L-1.96006 10.5ZM-1.96006 27.685C-1.96006 29.2046 -0.648487 30 0.399429 30L0.399429 26C1.04792 26 2.03994 26.5154 2.03994 27.685L-1.96006 27.685ZM0.399429 30L27.6006 30L27.6006 26L0.399429 26L0.399429 30ZM27.6006 30C28.6485 30 29.9601 29.2046 29.9601 27.685L25.9601 27.685C25.9601 26.5154 26.9521 26 27.6006 26L27.6006 30ZM29.9601 27.685L29.9601 10.5L25.9601 10.5L25.9601 27.685L29.9601 27.685ZM27.9601 8.5L0 8.5L0 12.5L27.9601 12.5L27.9601 8.5ZM0 12.5L0.0399429 12.5L0.0399429 8.5L0 8.5L0 12.5ZM4.03424 16L8.02853 16L8.02853 12L4.03424 12L4.03424 16ZM6.02853 14L6.02853 17.5L10.0285 17.5L10.0285 14L6.02853 14ZM8.02853 15.5L4.03424 15.5L4.03424 19.5L8.02853 19.5L8.02853 15.5ZM6.03424 17.5L6.03424 14L2.03424 14L2.03424 17.5L6.03424 17.5ZM12.0228 16L16.0171 16L16.0171 12L12.0228 12L12.0228 16ZM14.0171 14L14.0171 17.5L18.0171 17.5L18.0171 14L14.0171 14ZM16.0171 15.5L12.0228 15.5L12.0228 19.5L16.0171 19.5L16.0171 15.5ZM14.0228 17.5L14.0228 14L10.0228 14L10.0228 17.5L14.0228 17.5ZM20.0114 16L24.0057 16L24.0057 12L20.0114 12L20.0114 16ZM22.0057 14L22.0057 17.5L26.0057 17.5L26.0057 14L22.0057 14ZM24.0057 15.5L20.0114 15.5L20.0114 19.5L24.0057 19.5L24.0057 15.5ZM22.0114 17.5L22.0114 14L18.0114 14L18.0114 17.5L22.0114 17.5ZM4.03424 23L8.02853 23L8.02853 19L4.03424 19L4.03424 23ZM6.02853 21L6.02853 24.5L10.0285 24.5L10.0285 21L6.02853 21ZM8.02853 22.5L4.03424 22.5L4.03424 26.5L8.02853 26.5L8.02853 22.5ZM6.03424 24.5L6.03424 21L2.03424 21L2.03424 24.5L6.03424 24.5ZM12.0228 23L16.0171 23L16.0171 19L12.0228 19L12.0228 23ZM14.0171 21L14.0171 24.5L18.0171 24.5L18.0171 21L14.0171 21ZM16.0171 22.5L12.0228 22.5L12.0228 26.5L16.0171 26.5L16.0171 22.5ZM14.0228 24.5L14.0228 21L10.0228 21L10.0228 24.5L14.0228 24.5Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
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
        children="Calendar"
        {...getOverrideProps(overrides, "Lorem")}
      ></Text>
    </Flex>
  );
}
