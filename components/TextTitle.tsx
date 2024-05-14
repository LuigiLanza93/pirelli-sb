"use client";
import { Text, Box } from "@chakra-ui/react";

interface Props {
  alignment?: string;
  children: string;
}

export const TextTitle = ({
  alignment = "left",
  ...props
}: Props): JSX.Element => {
  return (
    <Box {...props}>
      <Text
        textAlign={alignment}
        textStyle="body"
        fontWeight="500"
        color="neutral.700"
      >
        {props.children}
      </Text>
    </Box>
  );
};
