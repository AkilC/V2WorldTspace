/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import HomeSideButton from "./HomeSideButton";
import MarketSideButton from "./MarketSideButton";
import ProfileSideButton from "./ProfileSideButton";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SidebarUnauthenticated(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="298px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(59,58,58,1)"
      padding="23px 15px 23px 15px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "SidebarUnauthenticated")}
      {...rest}
    >
      <Flex
        gap="48px"
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
        {...getOverrideProps(overrides, "Content Wrapper")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Pages")}
        >
          <HomeSideButton
            display="flex"
            gap="24px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="12px"
            padding="12px 12px 12px 12px"
            backgroundColor="rgba(31,31,31,1)"
            variation="Default"
            {...getOverrideProps(overrides, "HomeSideButton")}
          ></HomeSideButton>
          <MarketSideButton
            display="flex"
            gap="24px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="12px"
            padding="12px 12px 12px 12px"
            backgroundColor="rgba(31,31,31,1)"
            variation="Default"
            {...getOverrideProps(overrides, "MarketSideButton")}
          ></MarketSideButton>
          <ProfileSideButton
            display="flex"
            gap="24px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="12px"
            padding="12px 12px 12px 12px"
            backgroundColor="rgba(31,31,31,1)"
            variation="Default"
            {...getOverrideProps(overrides, "ProfileSideButton")}
          ></ProfileSideButton>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(59,58,58,1)"
          padding="23px 0px 23px 0px"
          {...getOverrideProps(overrides, "Sign In Wrapper38584822")}
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign in to customize your avatar, join tribes, and earn points."
            {...getOverrideProps(
              overrides,
              "Sign in to customize your avatar, join tribes, and earn points."
            )}
          ></Text>
          <Flex
            width="114px"
            height="40px"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Explore")}
        >
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 187")}
          >
            <Text
              fontFamily="Work Sans"
              fontSize="24px"
              fontWeight="600"
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
              children="My Tribes"
              {...getOverrideProps(overrides, "My Tribes")}
            ></Text>
            <Flex
              width="20px"
              height="20px"
              {...getOverrideProps(overrides, "Icons")}
            ></Flex>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(59,58,58,1)"
          padding="23px 0px 23px 0px"
          {...getOverrideProps(overrides, "Sign In Wrapper38584829")}
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="You currently have no tribes joined."
            {...getOverrideProps(
              overrides,
              "You currently have no tribes joined."
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
