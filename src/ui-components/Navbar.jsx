/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import MenuItems from "./MenuItems";
export default function Navbar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1600px"
      height="64px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(59,58,58,1)"
      padding="17px 35px 17px 35px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "Navbar")}
      {...rest}
    >
      <Flex
        gap="271px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="9.566346168518066px"
          direction="row"
          width="300px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="42.05px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="21.03px"
              height="4.32px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21.027236938476562,
                height: 4.319066047668457,
              }}
              paths={[
                {
                  d: "M19.4372 2.15953C19.0234 1.9992 18.4564 1.83811 17.7417 1.69131C15.9253 1.31822 13.3692 1.07977 10.5136 1.07977C7.65799 1.07977 5.10192 1.31822 3.28556 1.69131C2.57089 1.83811 2.00388 1.9992 1.59 2.15953C2.00388 2.31987 2.57089 2.48096 3.28556 2.62776C5.10192 3.00084 7.65799 3.2393 10.5136 3.2393C13.3692 3.2393 15.9253 3.00084 17.7417 2.62776C18.4564 2.48096 19.0234 2.31987 19.4372 2.15953ZM10.5136 4.31907C16.3201 4.31907 21.0272 3.35221 21.0272 2.15953C21.0272 0.966856 16.3201 0 10.5136 0C4.70711 0 0 0.966856 0 2.15953C0 3.35221 4.70711 4.31907 10.5136 4.31907Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="6.89px"
              left="10.46px"
              {...getOverrideProps(overrides, "Ellipse 85 (Stroke)")}
            ></Icon>
            <Icon
              width="10.46px"
              height="2.22px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.45914363861084,
                height: 2.2178986072540283,
              }}
              paths={[
                {
                  d: "M9.64713 1.70272C9.64637 1.70297 9.64562 1.70323 9.64486 1.70348C8.71687 2.01273 7.08621 2.2179 5.22957 2.2179C3.37294 2.2179 1.74228 2.01273 0.814288 1.70348C0.813529 1.70323 0.81277 1.70297 0.812011 1.70272C0.297805 1.53105 0 1.32738 0 1.10895C0 0.890522 0.297805 0.686845 0.812011 0.515179C0.812769 0.514925 0.813528 0.514672 0.814288 0.514419C1.74228 0.205168 3.37293 0 5.22957 0C7.08621 0 8.71687 0.205168 9.64486 0.514419C9.64562 0.514673 9.64637 0.514925 9.64713 0.515179C10.1613 0.686845 10.4591 0.890522 10.4591 1.10895C10.4591 1.32738 10.1613 1.53105 9.64713 1.70272Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="15.47px"
              {...getOverrideProps(overrides, "Ellipse 86 (Stroke)")}
            ></Icon>
            <Icon
              width="31.49px"
              height="4.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 31.48638153076172,
                height: 4.669260501861572,
              }}
              paths={[
                {
                  d: "M30.6335 1.7943C30.6343 1.79436 30.6288 1.80001 30.6149 1.81104C30.6258 1.79974 30.6327 1.79423 30.6335 1.7943ZM29.2589 2.33463C28.5985 2.15901 27.7511 1.99132 26.7366 1.84087C23.9464 1.4271 20.0591 1.16732 15.7432 1.16732C11.4272 1.16732 7.53998 1.4271 4.74979 1.84087C3.73525 1.99132 2.88788 2.15901 2.22752 2.33463C2.88788 2.51025 3.73525 2.67794 4.74979 2.82839C7.53998 3.24216 11.4272 3.50195 15.7432 3.50195C20.0591 3.50195 23.9464 3.24216 26.7366 2.82839C27.7511 2.67794 28.5985 2.51025 29.2589 2.33463ZM0.852877 1.7943C0.853639 1.79423 0.860622 1.79976 0.871538 1.81108C0.857573 1.80002 0.852115 1.79436 0.852877 1.7943ZM0.852877 2.87496C0.852115 2.8749 0.857573 2.86924 0.871539 2.85819C0.860622 2.86951 0.853639 2.87503 0.852877 2.87496ZM30.6149 2.85821C30.6288 2.86924 30.6343 2.8749 30.6335 2.87496C30.6327 2.87503 30.6258 2.86951 30.6149 2.85821ZM15.7432 4.66926C24.4379 4.66926 31.4864 3.62401 31.4864 2.33463C31.4864 1.04525 24.4379 0 15.7432 0C7.04847 0 0 1.04525 0 2.33463C0 3.62401 7.04847 4.66926 15.7432 4.66926Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15.64px"
              left="5.01px"
              {...getOverrideProps(overrides, "Ellipse 87 (Stroke)")}
            ></Icon>
            <Icon
              width="42.05px"
              height="4.32px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 42.054473876953125,
                height: 4.319066047668457,
              }}
              paths={[
                {
                  d: "M42.0545 2.15953C42.0545 3.35221 32.6403 4.31907 21.0272 4.31907C9.41421 4.31907 0 3.35221 0 2.15953C0 0.966856 9.41421 0 21.0272 0C32.6403 0 42.0545 0.966856 42.0545 2.15953Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="25.68px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse 89")}
            ></Icon>
            <Icon
              width="42.05px"
              height="4.32px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 42.054473876953125,
                height: 4.319066047668457,
              }}
              paths={[
                {
                  d: "M39.1504 2.15953C38.2501 1.99642 37.1201 1.84341 35.7911 1.70692C32.0305 1.32069 26.8102 1.07977 21.0272 1.07977C15.2442 1.07977 10.024 1.32069 6.26335 1.70692C4.93438 1.84341 3.80434 1.99642 2.90406 2.15953C3.80434 2.32265 4.93438 2.47566 6.26335 2.61215C10.024 2.99837 15.2442 3.2393 21.0272 3.2393C26.8102 3.2393 32.0305 2.99837 35.7911 2.61215C37.1201 2.47566 38.2501 2.32265 39.1504 2.15953ZM21.0272 4.31907C32.6403 4.31907 42.0545 3.35221 42.0545 2.15953C42.0545 0.966856 32.6403 0 21.0272 0C9.41421 0 0 0.966856 0 2.15953C0 3.35221 9.41421 4.31907 21.0272 4.31907Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="25.68px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse 88 (Stroke)")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Work Sans"
            fontSize="28.699039459228516px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="28.699039459228516px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.17px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="triber.space"
            {...getOverrideProps(overrides, "triber.space")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="36px"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          borderRadius="64px"
          padding="12px 26px 12px 26px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Search Bar")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="16px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(
              overrides,
              '\uD83E\uDD86 icon "magnifying glass"'
            )}
          >
            <Icon
              width="16px"
              height="16px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16,
                height: 16.000003814697266,
              }}
              paths={[
                {
                  d: "M6.9372 0.0198206C3.11183 0.0198206 0 3.13165 0 6.95702C0 10.7824 3.11183 13.8942 6.9372 13.8942C8.10661 13.8942 9.2562 13.6167 10.2274 13.0816C10.3052 13.1752 10.3915 13.2614 10.4851 13.3392L12.4671 15.3213C12.6501 15.5272 12.8733 15.6936 13.123 15.8102C13.3726 15.9267 13.6434 15.991 13.9188 15.9991C14.1942 16.0072 14.4683 15.959 14.7244 15.8573C14.9805 15.7556 15.213 15.6027 15.4079 15.4079C15.6027 15.213 15.7556 14.9805 15.8573 14.7244C15.959 14.4683 16.0072 14.1942 15.9991 13.9188C15.991 13.6434 15.9267 13.3726 15.8101 13.123C15.6936 12.8733 15.5272 12.6502 15.3213 12.4671L13.3392 10.4851C13.2427 10.3885 13.1364 10.3021 13.0221 10.2274C13.5573 9.2562 13.8942 8.12643 13.8942 6.9372C13.8942 3.11183 10.7824 0 6.95702 0L6.9372 0.0198206ZM6.9372 2.00188C9.69225 2.00188 11.8923 4.20196 11.8923 6.95702C11.8923 8.26517 11.4166 9.47423 10.5842 10.3662C10.5644 10.386 10.5445 10.4058 10.5247 10.4256C10.4311 10.5034 10.3448 10.5897 10.267 10.6833C9.39495 11.4761 8.20571 11.932 6.91738 11.932C4.16232 11.932 1.96224 9.7319 1.96224 6.97684C1.96224 4.22178 4.16232 2.0217 6.91738 2.0217L6.9372 2.00188Z",
                  fill: "rgba(74,74,74,1)",
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
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <MenuItems
          display="flex"
          gap="16px"
          direction="row"
          width="300px"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Menu Items")}
        ></MenuItems>
      </Flex>
    </Flex>
  );
}
