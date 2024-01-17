/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ShopCardSmall(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="288px"
      height="210px"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(217,217,217,1)"
      {...getOverrideProps(overrides, "ShopCardSmall")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="12px 8px 12px 8px"
        backgroundColor="rgba(0,0,0,0.6)"
        {...getOverrideProps(overrides, "Content")}
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TextWrapper")}
        >
          <Flex
            gap="0"
            direction="row"
            width="147px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Name Wrapper")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="20px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.07px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Item name"
              {...getOverrideProps(overrides, "Item name")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.03px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Creator name"
            {...getOverrideProps(overrides, "Creator name")}
          ></Text>
        </Flex>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PriceWrapper")}
        >
          <View
            width="12px"
            height="14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TRD Logo")}
          >
            <Icon
              width="11.68px"
              height="13.74px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.675657272338867,
                height: 13.73843765258789,
              }}
              paths={[
                {
                  d: "M0.529139 0L0 2.43289L4.14108 2.43289L2.69013 9.10511L5.58807 9.10511L7.03896 2.43289L11.1549 2.43289L11.6757 1.34164e-06L0.529139 0ZM1.71671 13.7384L4.61464 13.7384L5.16639 11.1019L2.26846 11.1019L1.71671 13.7384Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0.93%"
              bottom="0.93%"
              left="1.35%"
              right="1.35%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.03px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="400 ($80)"
            {...getOverrideProps(overrides, "400 ($80)")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
