"use client";
import { Box } from "@chakra-ui/react";

interface Props {
  children: string;
}

export const Or = ({ children = "OR", ...props }: Props): JSX.Element => {
  return (
    <Box pos="relative" width="100%" textAlign="center" my="6" {...props}>
      <Box
        pos={"absolute"}
        top="50%"
        transform="translateY(-50%)"
        width="100%"
        height="1px"
        bg="neutral.200"
        zIndex="base"
      ></Box>
      <Box
        {...props}
        as={"span"}
        textTransform="uppercase"
        textStyle="xsmall"
        fontWeight={400}
        color="neutral.600"
        px="3"
        bg={"white"}
        pos="relative"
        zIndex="docked"
      >
        {children}
      </Box>
    </Box>
  );
};
