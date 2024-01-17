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
import LargeButton from "./LargeButton";
import SpaceCardSmall from "./SpaceCardSmall";
export default function World(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1302px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "World")}
      {...rest}
    >
      <Flex
        gap="-40px"
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
                    d: "M10.8149 1.71936L12.5342 -0.0955201L8.90448 -3.53424L7.18512 -1.71936L10.8149 1.71936ZM7.18512 20.7194L8.90448 22.5342L12.5342 19.0955L10.8149 17.2806L7.18512 20.7194ZM7.18512 -1.71936L-1.16333 7.09289L2.46643 10.5316L10.8149 1.71936L7.18512 -1.71936ZM-1.16333 11.9071L7.18512 20.7194L10.8149 17.2806L2.46643 8.46838L-1.16333 11.9071ZM-1.16333 7.09289C-2.44222 8.44283 -2.44222 10.5572 -1.16333 11.9071L2.46643 8.46838C3.01453 9.04693 3.01452 9.95307 2.46643 10.5316L-1.16333 7.09289Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeWidth: 5,
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
          <SmallButton
            display="flex"
            gap="24px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="36px"
            variation="Secondary"
            {...getOverrideProps(overrides, "SmallButton")}
          ></SmallButton>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          width="1040px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "WorldDetailsWrapper")}
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
            {...getOverrideProps(overrides, "WorldWrapper")}
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
              children="World Name"
              {...getOverrideProps(overrides, "World Name")}
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
              gap="27px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "NumbersWrapper")}
            >
              <Flex
                gap="4px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(165,165,165,1)"
                borderRadius="8px"
                padding="3px 7px 3px 7px"
                {...getOverrideProps(overrides, "Frame 113")}
              >
                <Text
                  fontFamily="Work Sans"
                  fontSize="20px"
                  fontWeight="700"
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
                  children="500"
                  {...getOverrideProps(overrides, "500")}
                ></Text>
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
                  children="Tribe Members"
                  {...getOverrideProps(overrides, "Tribe Members")}
                ></Text>
              </Flex>
              <Flex
                gap="4px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(165,165,165,1)"
                borderRadius="8px"
                padding="3px 7px 3px 7px"
                {...getOverrideProps(overrides, "Frame 114")}
              >
                <Text
                  fontFamily="Work Sans"
                  fontSize="20px"
                  fontWeight="700"
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
                  children="35"
                  {...getOverrideProps(overrides, "35")}
                ></Text>
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
                  children="Total Events"
                  {...getOverrideProps(overrides, "Total Events")}
                ></Text>
              </Flex>
            </Flex>
            <LargeButton
              display="flex"
              gap="24px"
              direction="row"
              width="356px"
              height="40px"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="36px"
              padding="12px 12px 12px 12px"
              backgroundColor="rgba(222,232,237,1)"
              variation="Primary"
              {...getOverrideProps(overrides, "LargeButton")}
            ></LargeButton>
          </Flex>
          <Icon
            width="unset"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 1040, height: 1 }}
            paths={[
              {
                d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1040 1C1040.55 1 1041 0.552285 1041 0C1041 -0.552285 1040.55 -1 1040 -1L1040 1ZM0 1L1040 1L1040 -1L0 -1L0 1Z",
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
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "SpacesWrapper")}
          >
            <SpaceCardSmall
              display="flex"
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SpaceCard(Small)38588249")}
            ></SpaceCardSmall>
            <SpaceCardSmall
              display="flex"
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SpaceCard(Small)38588233")}
            ></SpaceCardSmall>
            <SpaceCardSmall
              display="flex"
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SpaceCard(Small)38588257")}
            ></SpaceCardSmall>
            <SpaceCardSmall
              display="flex"
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SpaceCard(Small)38588241")}
            ></SpaceCardSmall>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="1169px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(109,109,109,1)"
        padding="15px 0px 15px 0px"
        {...getOverrideProps(overrides, "Archive")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="20px"
          fontWeight="700"
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
          children="Event Archive"
          {...getOverrideProps(overrides, "Event Archive")}
        ></Text>
        <Icon
          width="18px"
          height="9px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 9 }}
          paths={[
            {
              d: "M9 9L8.64645 9.35355L9 9.70711L9.35355 9.35355L9 9ZM-0.353553 0.353553L8.64645 9.35355L9.35355 8.64645L0.353553 -0.353553L-0.353553 0.353553ZM9.35355 9.35355L18.3536 0.353553L17.6464 -0.353553L8.64645 8.64645L9.35355 9.35355Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector 3")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
