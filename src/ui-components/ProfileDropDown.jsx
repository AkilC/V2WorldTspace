/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProfileDropDown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="317px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "ProfileDropDown")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="4px 0px 4px 0px"
        {...getOverrideProps(overrides, "Profile")}
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
          {...getOverrideProps(overrides, "Ellipse 95")}
        ></Icon>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileText")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="16.653060913085938px"
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
            children="name"
            {...getOverrideProps(overrides, "Text40072134")}
          ></Text>
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="16.653060913085938px"
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
            children="@username"
            {...getOverrideProps(overrides, "Text40072135")}
          ></Text>
        </Flex>
      </Flex>
      <Icon
        width="298px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 298, height: 1 }}
        paths={[
          {
            d: "M0 0L298 0L298 -1L0 -1L0 0Z",
            stroke: "rgba(93,93,93,1)",
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
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 0px 8px 0px"
        {...getOverrideProps(overrides, "Settings Frame")}
      >
        <MyIcon
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
          type="Settings"
          {...getOverrideProps(overrides, "MyIcon40072970")}
        ></MyIcon>
        <Text
          fontFamily="Work Sans"
          fontSize="22.204082489013672px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="16.653060913085938px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile Settings"
          {...getOverrideProps(overrides, "Text40072141")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 0px 8px 0px"
        {...getOverrideProps(overrides, "Customize Avatar40072142")}
      >
        <MyIcon
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
          type="AvatarFill"
          {...getOverrideProps(overrides, "MyIcon40072963")}
        ></MyIcon>
        <Text
          fontFamily="Work Sans"
          fontSize="22.204082489013672px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="16.653060913085938px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Customize Avatar"
          {...getOverrideProps(overrides, "Customize Avatar40072145")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 0px 8px 0px"
        {...getOverrideProps(overrides, "Support40072146")}
      >
        <MyIcon
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
          type="Question"
          {...getOverrideProps(overrides, "MyIcon40072968")}
        ></MyIcon>
        <Text
          fontFamily="Work Sans"
          fontSize="22.204082489013672px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="16.653060913085938px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Support"
          {...getOverrideProps(overrides, "Support40072149")}
        ></Text>
      </Flex>
      <Icon
        width="298px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 298, height: 1 }}
        paths={[
          {
            d: "M0 0L298 0L298 -1L0 -1L0 0Z",
            stroke: "rgba(93,93,93,1)",
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
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 0px 8px 0px"
        {...getOverrideProps(overrides, "Frame 176")}
      >
        <MyIcon
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
          type="Sign Out"
          {...getOverrideProps(overrides, "MyIcon40072984")}
        ></MyIcon>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 172")}
        >
          <Text
            fontFamily="Work Sans"
            fontSize="22.204082489013672px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="16.653060913085938px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign Out"
            {...getOverrideProps(overrides, "Sign Out")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
