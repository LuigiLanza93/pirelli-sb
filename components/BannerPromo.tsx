"use client";
import { Flex, Text, Link } from "@chakra-ui/react";
import { ShoppingIcon } from "../icons/SpecialIcon";

interface Props {
  promoLabel: string;
  promoLinkLabel: string;
  promoLink: string;
  isSmall?: boolean;
}

export const BannerPromo = ({
  promoLabel,
  promoLinkLabel,
  promoLink,
  isSmall = false,
  ...props
}: Props): JSX.Element => {
  return (
    <Flex
      textStyle="small"
      bgColor="neutral.950"
      px="2"
      py="10px"
      justify="center"
      align="center"
      {...(isSmall && {
        borderTopRadius: "md",
        margin: "0 auto",
        width: "94%",
        height: "32px",
        py: "1",
      })}
      {...props}
    >
      <ShoppingIcon boxSize={isSmall ? "4" : "5"} />
      <Text
        textStyle={isSmall ? "xsmall" : "small"}
        color="white"
        fontWeight="700"
        px={isSmall ? "2" : [2, 2, 4, 4]}
      >
        {promoLabel}
      </Text>
      <Link
        href={promoLink}
        textStyle="small"
        color="primary.300"
        fontWeight="500"
        textDecoration="underline"
        whiteSpace={isSmall ? "nowrap" : "normal"}
      >
        {promoLinkLabel}
      </Link>
    </Flex>
  );
};
