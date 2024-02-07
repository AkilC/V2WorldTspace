/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LargeButton from "./LargeButton";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function ProfileContent(props) {
  const { profile, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="855px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileContent")}
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
          gap="0"
          direction="row"
          width="1200px"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TopBar")}
        >
          <LargeButton
            display="flex"
            gap="24px"
            direction="row"
            width="170px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="36px"
            variation="Secondary"
            {...getOverrideProps(overrides, "LargeButton")}
          ></LargeButton>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileDetailsWrapper")}
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
            {...getOverrideProps(overrides, "ProfileWrapper")}
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
              {...getOverrideProps(overrides, "Avi")}
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
              children="First Last"
              {...getOverrideProps(overrides, "First Last")}
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
              children="@username"
              {...getOverrideProps(overrides, "@username38863624")}
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
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextSectionWrapper")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "AboutWrapper")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="26.803634643554688px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="About"
                {...getOverrideProps(overrides, "About")}
              ></Text>
              <Flex
                gap="10px"
                direction="row"
                width="1140px"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="12px"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "AboutText")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="26.803634643554688px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum. Sed egestas quis ac pretium congue. Condimentum urna sit morbi sapien amet. Dui erat massa et morbi elementum. Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum."
                  {...getOverrideProps(
                    overrides,
                    "Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum. Sed egestas quis ac pretium congue. Condimentum urna sit morbi sapien amet. Dui erat massa et morbi elementum. Lorem ipsum dolor sit amet consectetur. Ipsum ridiculus hendrerit interdum id suspendisse volutpat commodo in bibendum."
                  )}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              width="1140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SocialSectionWrapper")}
            >
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "InstagramWrapper")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="26.803634643554688px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Instagram"
                  {...getOverrideProps(overrides, "Instagram")}
                ></Text>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="56px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(255,255,255,1)"
                  borderRadius="12px"
                  padding="9px 9px 9px 9px"
                  {...getOverrideProps(overrides, "UsernameField38863642")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(255,255,255,1)"
                    lineHeight="26.803634643554688px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={profile?.instagram}
                    {...getOverrideProps(overrides, "@username38863643")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "TwitterWrapper")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="26.803634643554688px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Twitter"
                  {...getOverrideProps(overrides, "Twitter")}
                ></Text>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="56px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(255,255,255,1)"
                  borderRadius="12px"
                  padding="9px 9px 9px 9px"
                  {...getOverrideProps(overrides, "UsernameField38863646")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(255,255,255,1)"
                    lineHeight="26.803634643554688px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={profile?.twitter}
                    {...getOverrideProps(overrides, "@username38863647")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "YoutubeWrapper")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="26.803634643554688px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Youtube"
                  {...getOverrideProps(overrides, "Youtube")}
                ></Text>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="56px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(255,255,255,1)"
                  borderRadius="12px"
                  padding="9px 9px 9px 9px"
                  {...getOverrideProps(overrides, "UsernameField38863650")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(255,255,255,1)"
                    lineHeight="26.803634643554688px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="@username"
                    {...getOverrideProps(overrides, "@username38863651")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="80px"
        direction="row"
        width="1140px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Avatar Settings")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Avatar Thumbnail")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "AvatarHeader")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="26.803634643554688px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Avatar"
              {...getOverrideProps(overrides, "Avatar")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="26.803634643554688px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              textDecoration="underline"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Customize"
              {...getOverrideProps(overrides, "Customize")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="275px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="12px"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Thumbnail")}
          ></Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="530px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InventorySection")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InventoryHeader")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="26.803634643554688px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Showcase"
              {...getOverrideProps(overrides, "Showcase")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="26.803634643554688px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              textDecoration="underline"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Edit"
              {...getOverrideProps(overrides, "Edit")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="274px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InventoryItemsWrapper")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="171px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 65")}
            ></Flex>
            <Flex
              gap="10px"
              direction="row"
              width="172px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 66")}
            ></Flex>
            <Flex
              gap="10px"
              direction="row"
              width="171px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 67")}
            ></Flex>
            <Flex
              gap="10px"
              direction="row"
              width="171px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 68")}
            ></Flex>
            <Flex
              gap="10px"
              direction="row"
              width="171px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 69")}
            ></Flex>
            <Flex
              gap="10px"
              direction="row"
              width="171px"
              height="133px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="10px 10px 10px 10px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Frame 70")}
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
