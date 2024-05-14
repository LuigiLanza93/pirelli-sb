"use client";
import { Text, Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  address: string;
}

export const CardAddress = ({
  children,
  address,
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      p="4"
      border="1px solid"
      borderColor="neutral.200"
      borderRadius="lg"
      color="neutral.900"
      {...props}
    >
      <Text textStyle="subheadline" fontWeight="600" mb="1">
        {children}
      </Text>
      <Text textStyle="body" fontWeight="400">
        {address}
      </Text>
    </Box>
  );
};
