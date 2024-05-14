"use client";
import { Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import { TextTitle } from "./TextTitle";

interface Props {
  children: string;
  textTitle: string;
  image: { url: string; alt: string };
  description: string;
  button: { label: string; url: string };
  isSmall?: boolean;
  isHorizonatal?: boolean;
}

export const CardInformative = ({
  children,
  textTitle,
  description,
  image,
  button,
  isSmall = false,
  isHorizonatal = false,
  ...props
}: Props): JSX.Element => {
  const maxWidthHorizontal = ["320px", "352px", "none"];
  const maxWidthVertical = ["320px", "352px", "410px"];
  const maxWidthVerticalSmall = ["320px", "274px", "282px"];

  return (
    <Flex
      direction={isHorizonatal ? ["column", "column", "row"] : "column"}
      bg="neutral.100"
      borderRadius="lg"
      borderColor="neutral.200"
      overflow="hidden"
      maxWidth={
        isHorizonatal
          ? maxWidthHorizontal
          : isSmall
            ? maxWidthVerticalSmall
            : maxWidthVertical
      }
      {...props}
    >
      <Image
        src={image.url}
        alt={image.alt}
        width="100%"
        height="auto"
        maxWidth={isHorizonatal ? { lg: "340px" } : "none"}
        maxHeight={isHorizonatal ? { lg: "196px" } : "auto"}
      />

      <Box p={isSmall ? "3" : "4"}>
        <TextTitle>{textTitle}</TextTitle>

        <Text
          textStyle={isSmall ? "body" : "headline"}
          lineHeight="1"
          fontWeight="600"
          my="2"
        >
          {children}
        </Text>
        <Text textStyle={isSmall ? "small" : "body"} fontWeight="400">
          {description}
        </Text>
      </Box>

      <Flex p={isSmall ? "3" : "4"} align={isHorizonatal ? "flex-end" : "left"}>
        <Button
          as="a"
          variant="primary"
          href="button.url"
          size={isSmall ? "sm" : "md"}
        >
          {button.label}
        </Button>
      </Flex>
    </Flex>
  );
};
