/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import SmallButton from "./SmallButton";
import ShopCardSmall from "./ShopCardSmall";
export default function ShopPageContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 0px 24px 0px"
      {...getOverrideProps(overrides, "ShopPageContent")}
      {...rest}
    >
      <Flex
        gap="-16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="1024px"
          direction="row"
          width="1200px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TopBar")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icons")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Chevron")}
            >
              <Icon
                width="9px"
                height="19px"
                viewBox={{ minX: 0, minY: 0, width: 9, height: 19 }}
                paths={[
                  {
                    d: "M9.72595 0.687745L10.4137 -0.0382081L8.96179 -1.4137L8.27405 -0.687745L9.72595 0.687745ZM0.651548 8.81225L-0.0744044 8.12451L-0.0744046 8.12451L0.651548 8.81225ZM0.651548 10.1877L-0.0744053 10.8755L-0.0744051 10.8755L0.651548 10.1877ZM8.27405 19.6877L8.96179 20.4137L10.4137 19.0382L9.72595 18.3123L8.27405 19.6877ZM8.27405 -0.687745L-0.0744044 8.12451L1.3775 9.5L9.72595 0.687745L8.27405 -0.687745ZM-0.0744051 10.8755L8.27405 19.6877L9.72595 18.3123L1.3775 9.5L-0.0744051 10.8755ZM-0.0744046 8.12451C-0.805196 8.8959 -0.805199 10.1041 -0.0744053 10.8755L1.3775 9.5L1.3775 9.5L-0.0744046 8.12451Z",
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
                top="calc(50% - 9.5px - 0.5px)"
                left="calc(50% - 4.5px - 0.5px)"
                {...getOverrideProps(overrides, "Vector 13")}
              ></Icon>
            </View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            border="3px SOLID rgba(240,240,240,1)"
            borderRadius="64px"
            padding="5px 21px 5px 21px"
            {...getOverrideProps(overrides, "Frame 39")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="20px"
              fontWeight="400"
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
              children="Visit World"
              {...getOverrideProps(overrides, "Visit World")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "StoreDetailsWrapper")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "StoreWrapper")}
          >
            <Icon
              width="80px"
              height="80px"
              viewBox={{ minX: 0, minY: 0, width: 80, height: 80 }}
              paths={[
                {
                  d: "M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z",
                  fill: "rgba(217,217,217,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Ellipse 93")}
            ></Icon>
            <Text
              fontFamily="Work Sans"
              fontSize="32px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.2px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shop Name"
              {...getOverrideProps(overrides, "Shop Name")}
            ></Text>
            <Text
              fontFamily="Work Sans"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="18.76799964904785px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.03px"
              width="778px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur "
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur"
              )}
            ></Text>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CTAGroup")}
            >
              <SmallButton
                display="flex"
                gap="24px"
                direction="row"
                width="220px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="36px"
                padding="12px 24px 12px 24px"
                backgroundColor="rgba(222,232,237,1)"
                variation="Primary"
                {...getOverrideProps(overrides, "SmallButton39092455")}
              ></SmallButton>
              <SmallButton
                display="flex"
                gap="24px"
                direction="row"
                width="220px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="36px"
                variation="Secondary"
                {...getOverrideProps(overrides, "SmallButton39092457")}
              ></SmallButton>
            </Flex>
          </Flex>
          <Icon
            width="unset"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
            paths={[
              {
                d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1200 1C1200.55 1 1201 0.552285 1201 0C1201 -0.552285 1200.55 -1 1200 -1L1200 1ZM0 1L1200 1L1200 -1L0 -1L0 1Z",
                stroke: "rgba(59,58,58,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "Divider")}
          ></Icon>
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Current Listings39092055")}
          >
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
              children="Current Listings"
              {...getOverrideProps(overrides, "Current Listings39092056")}
            ></Text>
            <Flex
              gap="16px"
              direction="row"
              width="1200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Card Wrapper")}
            >
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092514")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092524")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092534")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092544")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092554")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092564")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092574")}
              ></ShopCardSmall>
              <ShopCardSmall
                display="flex"
                gap="16px"
                direction="column"
                width="288px"
                height="210px"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(217,217,217,1)"
                {...getOverrideProps(overrides, "ShopCard-Small39092584")}
              ></ShopCardSmall>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
