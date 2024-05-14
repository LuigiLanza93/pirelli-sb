"use client";
import { Text, HStack, Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const TagFeature = ({
  icon,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <HStack
      spacing={"6px"}
      bg="neutral.100"
      py="1"
      px="2"
      borderRadius="4px"
      height="8"
      display={"inline-flex"}
      whiteSpace={"nowrap"}
      {...props}
    >
      <Box>{icon}</Box>
      <Text color="neutral.950" textStyle="xsmall" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
};
