/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import SmallButton from "./SmallButton";
export default function ChatContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1302px"
      height="804px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ChatContent")}
      {...rest}
    >
      <Flex
        gap="922px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Header")}
      >
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
          borderRadius="36px"
          padding="6px 16px 6px 16px"
          backgroundColor="rgba(87,87,87,1)"
          {...getOverrideProps(overrides, "SpaceChaty")}
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
            children="Hub"
            {...getOverrideProps(overrides, "Text")}
          ></Text>
          <Flex
            gap="1.8181815147399902px"
            direction="row"
            width="20px"
            height="20px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="3.6363630294799805px 3.6363630294799805px 3.6363630294799805px 3.6363630294799805px"
            {...getOverrideProps(overrides, "Icons")}
          >
            <View
              width="12.73px"
              height="12.73px"
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
                width="4.55px"
                height="8.64px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.637653886718908,
                  height: 4.547909172964864,
                }}
                paths={[
                  {
                    d: "M4.88983 0.3625L5.25233 0.018125L4.56358 -0.706874L4.20108 -0.3625L4.88983 0.3625ZM4.20108 8.99886L4.56358 9.34324L5.25233 8.61824L4.88983 8.27386L4.20108 8.99886ZM4.20108 -0.3625L0.00251506 3.62614L0.691265 4.35114L4.88983 0.3625L4.20108 -0.3625ZM0.00251492 5.01023L4.20108 8.99886L4.88983 8.27386L0.691264 4.28523L0.00251492 5.01023ZM0.00251506 3.62614C-0.393622 4.00247 -0.393622 4.6339 0.00251492 5.01023L0.691264 4.28523C0.710128 4.30315 0.710128 4.33322 0.691265 4.35114L0.00251506 3.62614Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="calc(50% - 4.32px - 0.23px)"
                left="calc(50% - 2.27px - 0.46px)"
                {...getOverrideProps(overrides, "Vector 13")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <SmallButton
          display="flex"
          gap="24px"
          direction="row"
          width="172px"
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
          {...getOverrideProps(overrides, "SmallButton")}
        ></SmallButton>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(35,35,35,1)"
        {...getOverrideProps(overrides, "ChatWrapper")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 32px 16px 32px"
          {...getOverrideProps(overrides, "MessagesWrapper")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091959")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091960")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091961")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091962")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091963")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091964")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091965")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091966")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091967")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091968")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091969")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091970")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091971")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091972")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091973")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091974")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091975")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091976")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091977")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091978")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091979")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091980")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091981")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091982")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091983")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091984")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091985")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091986")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091987")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091988")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091989")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091990")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091991")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091992")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091993")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39091994")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39091995")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39091996")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39091997")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39091998")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39092001")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39092002")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39092003")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39092004")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39092005")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39092006")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39092007")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39092008")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39092009")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39092010")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39092011")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39092012")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39092013")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39092014")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39092015")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message39092016")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
              {...getOverrideProps(overrides, "Profile39092017")}
            ></Icon>
            <Flex
              gap="4px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Content39092018")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="19.363636016845703px"
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
                children="Name"
                {...getOverrideProps(overrides, "Name39092019")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="16.94318199157715px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="40px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem ipsum dolor sit amet consectetur. Orci praesent."
                {...getOverrideProps(overrides, "Message39092020")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 32px 16px 32px"
          backgroundColor="rgba(23,23,23,1)"
          {...getOverrideProps(overrides, "BottomWrapper")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            border="1px SOLID rgba(98,98,98,1)"
            borderRadius="32px"
            padding="8px 20px 8px 20px"
            backgroundColor="rgba(70,70,70,1)"
            {...getOverrideProps(overrides, "Input")}
          >
            <Image
              width="26px"
              height="26px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="contain"
              {...getOverrideProps(overrides, "Email Send")}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
