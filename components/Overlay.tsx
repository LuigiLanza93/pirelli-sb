"use client";
import { Box } from "@chakra-ui/react";

interface Props {
  bg: string;
}

export const Overlay = ({
  bg = "blackAlpha.300",
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      bg={bg}
      pos="absolute"
      top="0"
      left="0"
      w="100%"
      height="100%"
      minWidth="100px"
      minHeight="100px"
      {...props}
    ></Box>
  );
};
