/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import LargeButton from "./LargeButton";
import SpaceCardSmall from "./SpaceCardSmall";
export default function TribeOverview(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TribeOverview")}
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
          gap="16px"
          direction="column"
          width="unset"
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
              width="350px"
              height="unset"
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
            viewBox={{ minX: 0, minY: 0, width: 1064, height: 1 }}
            paths={[
              {
                d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1064 1C1064.55 1 1065 0.552285 1065 0C1065 -0.552285 1064.55 -1 1064 -1L1064 1ZM0 1L1064 1L1064 -1L0 -1L0 1Z",
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
            gap="28px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 189")}
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
              {...getOverrideProps(overrides, "SpaceCard(Small)38864211")}
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
              {...getOverrideProps(overrides, "SpaceCard(Small)38864216")}
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
              {...getOverrideProps(overrides, "SpaceCard(Small)38864206")}
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
              {...getOverrideProps(overrides, "SpaceCard(Small)38864221")}
            ></SpaceCardSmall>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
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
