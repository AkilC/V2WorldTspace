/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import StoreCard from "./StoreCard";
import LargeButton from "./LargeButton";
export default function ShopsContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="148px"
      direction="column"
      width="1158px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 0px 24px 0px"
      {...getOverrideProps(overrides, "ShopsContent")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PageContent")}
      >
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
            children="All stores"
            {...getOverrideProps(overrides, "All stores")}
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
            padding="11px 23px 11px 23px"
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
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tile Wrapper")}
        >
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792159")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792165")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792171")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792177")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792183")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792189")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792195")}
          ></StoreCard>
          <StoreCard
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
            {...getOverrideProps(overrides, "StoreCard38792201")}
          ></StoreCard>
        </Flex>
      </Flex>
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
        {...getOverrideProps(overrides, "Coming Soon")}
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
          children="More stores coming soon :)"
          {...getOverrideProps(overrides, "More stores coming soon :)")}
        ></Text>
        <LargeButton
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
          borderRadius="36px"
          padding="12px 12px 12px 12px"
          backgroundColor="rgba(222,232,237,1)"
          variation="Primary"
          {...getOverrideProps(overrides, "LargeButton")}
        ></LargeButton>
      </Flex>
    </Flex>
  );
}
