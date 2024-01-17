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
import AvatarSideButton from "./AvatarSideButton";
import CalendarSideButton from "./CalendarSideButton";
import { Flex, Text } from "@aws-amplify/ui-react";
import TribeSideButton from "./TribeSideButton";
import CardsPremiumButton from "./CardsPremiumButton";
export default function SidebarAuthenticated(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="298px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(59,58,58,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "SidebarAuthenticated")}
      {...rest}
    >
      <Flex
        gap="64px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "ContentWrapper")}
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
          <AvatarSideButton
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
            {...getOverrideProps(overrides, "AvatarSideButton")}
          ></AvatarSideButton>
          <CalendarSideButton
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
            {...getOverrideProps(overrides, "CalendarSideButton")}
          ></CalendarSideButton>
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
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Categories")}
          >
            <TribeSideButton
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
              {...getOverrideProps(overrides, "TribeSideButton38911381")}
            ></TribeSideButton>
            <TribeSideButton
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
              {...getOverrideProps(overrides, "TribeSideButton38911377")}
            ></TribeSideButton>
            <TribeSideButton
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
              {...getOverrideProps(overrides, "TribeSideButton38911385")}
            ></TribeSideButton>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(59,58,58,1)"
        padding="15px 15px 15px 15px"
        {...getOverrideProps(overrides, "BottomSection")}
      >
        <CardsPremiumButton
          display="flex"
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="12px"
          padding="12px 12px 12px 12px"
          backgroundColor="rgba(222,232,237,1)"
          {...getOverrideProps(overrides, "Cards/PremiumButton")}
        ></CardsPremiumButton>
      </Flex>
    </Flex>
  );
}
