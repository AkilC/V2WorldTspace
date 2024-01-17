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
import EventCard from "./EventCard";
export default function EventPageContent(props) {
  const { event, world, overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EventPageContent")}
      {...rest}
    >
      <Flex
        gap="1023px"
        direction="row"
        width="1199px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Top Bar")}
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
          {...getOverrideProps(overrides, "Back")}
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
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EventWrapper")}
      >
        <View
          width="546px"
          height="286px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 8")}
        ></View>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TextandButtonWrapper")}
        >
          <Flex
            gap="12px"
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
              children={event?.name}
              {...getOverrideProps(overrides, "Event Name")}
            ></Text>
            <Text
              fontFamily="Work Sans"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="18.76799964904785px"
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
              children="12/24/23 - 12/28/23"
              {...getOverrideProps(overrides, "12/24/23 - 12/28/23")}
            ></Text>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text39355221")}
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
                width="626px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. "
                {...getOverrideProps(
                  overrides,
                  "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor."
                )}
              ></Text>
            </Flex>
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
              {...getOverrideProps(overrides, "Stats")}
            >
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
                {...getOverrideProps(overrides, "Favorites")}
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
                  children="80"
                  {...getOverrideProps(overrides, "80")}
                ></Text>
                <Flex
                  gap="2.545454502105713px"
                  direction="row"
                  width="unset"
                  height="28px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="5.090909004211426px 5.090909004211426px 5.090909004211426px 5.090909004211426px"
                  {...getOverrideProps(overrides, "Icons39355226")}
                >
                  <Flex
                    padding="0px 0px 0px 0px"
                    width="17.82px"
                    height="17.82px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    {...getOverrideProps(
                      overrides,
                      '\uD83E\uDD86 icon "star outline"'
                    )}
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
                          d: "M5.86875 5.37919L8.18291 0.472426C8.47994 -0.157475 9.33824 -0.157475 9.63527 0.472426L11.9494 5.37919L17.1246 6.17088C17.7886 6.27246 18.0532 7.12672 17.5726 7.61672L13.8284 11.4335L14.712 16.8254C14.8255 17.5179 14.1311 18.0459 13.5369 17.7189L8.90909 15.1717L4.28124 17.7189C3.68712 18.0459 2.99264 17.5179 3.10611 16.8254L3.98971 11.4335L0.24567 7.61672C-0.235047 7.12672 0.0295976 6.27246 0.693592 6.17088L5.86875 5.37919Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
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
                      {...getOverrideProps(overrides, "Vector39355228")}
                    ></Icon>
                  </Flex>
                </Flex>
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
                {...getOverrideProps(overrides, "Active People")}
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
                  children="45"
                  {...getOverrideProps(overrides, "45")}
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
                  {...getOverrideProps(overrides, "Icons39355231")}
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
                    {...getOverrideProps(overrides, "Vector39355232")}
                  ></Icon>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <LargeButton
            display="flex"
            gap="24px"
            direction="row"
            width="467px"
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
            {...getOverrideProps(overrides, "LargeButton39355233")}
          ></LargeButton>
        </Flex>
      </Flex>
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
        {...getOverrideProps(overrides, "CreatorDetailsWrapper")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="24px"
          fontWeight="700"
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
          children="Creator Details"
          {...getOverrideProps(overrides, "Creator Details")}
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
          {...getOverrideProps(overrides, "ContentWrapper")}
        >
          <View
            width="273px"
            height="160px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 9")}
          ></View>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="160px"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextAndButton")}
          >
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text39355239")}
            >
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
                children={world?.name}
                {...getOverrideProps(overrides, "World Name")}
              ></Text>
              <Text
                fontFamily="Work Sans"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="18.76799964904785px"
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
                children="Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur luctus blandit nulla. Tincidunt tortor ut nisi vel sem ullamcorper neque. Ultricies commodo aliquam ut velit sem."
                {...getOverrideProps(
                  overrides,
                  "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur luctus blandit nulla. Tincidunt tortor ut nisi vel sem ullamcorper neque. Ultricies commodo aliquam ut velit sem."
                )}
              ></Text>
            </Flex>
            <LargeButton
              display="flex"
              gap="24px"
              direction="row"
              width="235px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="36px"
              variation="Secondary"
              {...getOverrideProps(overrides, "LargeButton39355242")}
            ></LargeButton>
          </Flex>
        </Flex>
      </Flex>
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
        {...getOverrideProps(overrides, "SocialsWrapper")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="24px"
          fontWeight="700"
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
          children="Social Links"
          {...getOverrideProps(overrides, "Social Links")}
        ></Text>
        <Flex
          gap="62px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LinksWrapper")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Link1")}
          >
            <View
              width="56px"
              height="56px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Frame 10439355247")}
            ></View>
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
              children="Join for more"
              {...getOverrideProps(overrides, "Join for more39355248")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Link2")}
          >
            <View
              width="56px"
              height="56px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Frame 10439355250")}
            ></View>
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
              children="Join for more"
              {...getOverrideProps(overrides, "Join for more39355251")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Link3")}
          >
            <View
              width="56px"
              height="56px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Frame 10439355253")}
            ></View>
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
              children="Join for more"
              {...getOverrideProps(overrides, "Join for more39355254")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
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
        {...getOverrideProps(overrides, "Recs")}
      >
        <Text
          fontFamily="Work Sans"
          fontSize="24px"
          fontWeight="700"
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
          children="Other Recommendations"
          {...getOverrideProps(overrides, "Other Recommendations")}
        ></Text>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TilesWrapper")}
        >
          <EventCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "EventCard39355258")}
          ></EventCard>
          <EventCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "EventCard39355259")}
          ></EventCard>
          <EventCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "EventCard39355260")}
          ></EventCard>
          <EventCard
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "EventCard39355261")}
          ></EventCard>
        </Flex>
      </Flex>
    </Flex>
  );
}
