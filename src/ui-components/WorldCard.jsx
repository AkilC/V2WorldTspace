/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function WorldCard(props) {
  const { world, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "WorldCard")}
      {...rest}
    >
      <View
        width="282px"
        height="158.63px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Image")}
      >
        <View
          width="282px"
          height="158.63px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 8")}
        ></View>
      </View>
      <Flex
        gap="77px"
        direction="row"
        width="282px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content Wrapper")}
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name Wrapper")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="28.152000427246094px"
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
            children={world?.name}
            {...getOverrideProps(overrides, "World Name")}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Current users")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="28.152000427246094px"
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
            children="40"
            {...getOverrideProps(overrides, "40")}
          ></Text>
          <Flex
            gap="6.363636016845703px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="2.545454502105713px"
            padding="5.090909004211426px 5.090909004211426px 5.090909004211426px 5.090909004211426px"
            {...getOverrideProps(overrides, "Icons")}
          >
            <Icon
              width="17.82px"
              height="17.82px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.81818199157715,
                height: 17.81818199157715,
              }}
              paths={[
                {
                  d: "M8.90909 0C6.45909 0 4.45455 2.49455 4.45455 5.56818C4.45455 8.64182 6.45909 11.1364 8.90909 11.1364C11.3591 11.1364 13.3636 8.64182 13.3636 5.56818C13.3636 2.49455 11.3591 0 8.90909 0ZM4.25409 11.1364C1.89318 11.2477 0 13.1855 0 15.5909L0 17.8182L17.8182 17.8182L17.8182 15.5909C17.8182 13.1855 15.9473 11.2477 13.5641 11.1364C12.3614 12.495 10.7132 13.3636 8.90909 13.3636C7.105 13.3636 5.45682 12.495 4.25409 11.1364Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
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
        </Flex>
      </Flex>
    </Flex>
  );
}
