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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Dropdown(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Text39184477: {},
        "Vector 11": {},
        Header: {},
        Divider: {},
        Text39184482: {},
        "Option 1": {},
        Text39184484: {},
        "Option 2": {},
        Text39184486: {},
        "Option 3": {},
        Text39184488: {},
        "Option 4": {},
        Options: {},
        Dropdown: {},
      },
      variantValues: { state: "Closed" },
    },
    {
      overrides: {
        Text39184477: {},
        "Vector 11": {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 18.000000786805685,
            height: 9.000001573609552,
          },
        },
        Header: {},
        Divider: { display: "block" },
        Text39184482: {},
        "Option 1": {},
        Text39184484: {},
        "Option 2": {},
        Text39184486: {},
        "Option 3": {},
        Text39184488: {},
        "Option 4": {},
        Options: { gap: "16px", display: "flex" },
        Dropdown: {},
      },
      variantValues: { state: "Open" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(150,150,150,1)"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Dropdown")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="8px 16px 8px 16px"
        display="flex"
        {...getOverrideProps(overrides, "Header")}
      >
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
          children="Sort by"
          {...getOverrideProps(overrides, "Text39184477")}
        ></Text>
        <Icon
          width="18px"
          height="9px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 9 }}
          paths={[
            {
              d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM18.7071 0.707107C19.0976 0.316583 19.0976 -0.316583 18.7071 -0.707107C18.3166 -1.09763 17.6834 -1.09763 17.2929 -0.707107L18.7071 0.707107ZM-0.707107 0.707107L7.58579 9L9 7.58579L0.707107 -0.707107L-0.707107 0.707107ZM10.4142 9L18.7071 0.707107L17.2929 -0.707107L9 7.58579L10.4142 9ZM7.58579 9C8.36684 9.78105 9.63317 9.78105 10.4142 9L9 7.58579L9 7.58579L7.58579 9Z",
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
          {...getOverrideProps(overrides, "Vector 11")}
        ></Icon>
      </Flex>
      <Icon
        width="unset"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 157, height: 1 }}
        paths={[
          {
            d: "M0 0.5L157 0.5L157 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(150,150,150,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="8px"
        padding="8px 16px 8px 16px"
        display="none"
        {...getOverrideProps(overrides, "Options")}
      >
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Option 1")}
        >
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
            children="Option 1"
            {...getOverrideProps(overrides, "Text39184482")}
          ></Text>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Option 2")}
        >
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
            children="Option 2"
            {...getOverrideProps(overrides, "Text39184484")}
          ></Text>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Option 3")}
        >
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
            children="Option 3"
            {...getOverrideProps(overrides, "Text39184486")}
          ></Text>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Option 4")}
        >
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
            children="Option 3"
            {...getOverrideProps(overrides, "Text39184488")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
