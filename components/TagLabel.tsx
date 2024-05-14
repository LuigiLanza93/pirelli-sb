"use client";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
}

export const TagLabel = ({
  children,
  bgColor = "neutral.950",
  color = "white",
  ...props
}: Props): JSX.Element => {
  return (
    <Flex
      {...props}
      px="3"
      align="center"
      textStyle="xsmall"
      fontWeight="600"
      borderRadius="md"
      mr="1"
      height="7"
      color={color}
      bgColor={bgColor}
    >
      {children}
    </Flex>
  );
};
