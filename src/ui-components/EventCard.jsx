/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function EventCard(props) {
  const { event, world, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "EventCard")}
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
      ></View>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content Wrapper")}
      >
        <Flex
          gap="53px"
          direction="column"
          width="281.82px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title and Detail")}
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
            children={event?.name}
            {...getOverrideProps(overrides, "Event Title")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Creator Name Wrapper38511931")}
        >
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
            children={world?.name}
            {...getOverrideProps(overrides, "By creator name")}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Creator Name Wrapper38511933")}
        >
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
          {...getOverrideProps(overrides, "Current Users")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="23.459999084472656px"
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
            children="80"
            {...getOverrideProps(overrides, "80")}
          ></Text>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="1.8211748600006104px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icons")}
          >
            <Icon
              width="12.75px"
              height="12.75px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 12.748224258422852,
                height: 12.748224258422852,
              }}
              paths={[
                {
                  d: "M6.37411 0C4.62123 0 3.18706 1.78475 3.18706 3.98382C3.18706 6.18289 4.62123 7.96764 6.37411 7.96764C8.12699 7.96764 9.56117 6.18289 9.56117 3.98382C9.56117 1.78475 8.12699 0 6.37411 0ZM3.04364 7.96764C1.3545 8.04732 0 9.43369 0 11.1547L0 12.7482L12.7482 12.7482L12.7482 11.1547C12.7482 9.43369 11.4097 8.04732 9.70459 7.96764C8.84408 8.93969 7.66487 9.56117 6.37411 9.56117C5.08335 9.56117 3.90414 8.93969 3.04364 7.96764Z",
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
