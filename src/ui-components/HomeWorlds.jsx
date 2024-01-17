/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Tabs as TabsCustom } from "./Tabs";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import WorldCard from "./WorldCard";
export default function HomeWorlds(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="1302px"
      height="876px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 36px 24px 36px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "HomeWorlds")}
      {...rest}
    >
      <TabsCustom
        display="flex"
        gap="36px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Tabs")}
      ></TabsCustom>
      <Flex
        gap="840px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header and Sort")}
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
          children="All worlds"
          {...getOverrideProps(overrides, "All worlds")}
        ></Text>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(150,150,150,1)"
          borderRadius="8px"
          padding="15px 23px 15px 23px"
          {...getOverrideProps(overrides, "Sort")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="500"
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
            children="Sort by"
            {...getOverrideProps(overrides, "Sort by")}
          ></Text>
          <Icon
            width="18px"
            height="9px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 9 }}
            paths={[
              {
                d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM18.7071 0.707107C19.0976 0.316583 19.0976 -0.316583 18.7071 -0.707107C18.3166 -1.09763 17.6834 -1.09763 17.2929 -0.707107L18.7071 0.707107ZM-0.707107 0.707107L7.58579 9L9 7.58579L0.707107 -0.707107L-0.707107 0.707107ZM10.4142 9L18.7071 0.707107L17.2929 -0.707107L9 7.58579L10.4142 9ZM7.58579 9C8.36684 9.78105 9.63317 9.78105 10.4142 9L9 7.58579L9 7.58579L7.58579 9Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector 11")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 42")}
      >
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587814")}
        ></WorldCard>
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587834")}
        ></WorldCard>
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587844")}
        ></WorldCard>
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587854")}
        ></WorldCard>
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587824")}
        ></WorldCard>
        <WorldCard
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
          {...getOverrideProps(overrides, "WorldCard38587864")}
        ></WorldCard>
      </Flex>
    </Flex>
  );
}
