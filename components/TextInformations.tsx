"use client";
import { Box, HStack } from "@chakra-ui/react";

interface Props {
  alignment?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  value?: string;
}

export const TextInformations = ({
  alignment = "left",
  children,
  icon,
  value,
  ...props
}: Props): JSX.Element => {
  return (
    <HStack spacing="2" align="center" justify={alignment} {...props}>
      {icon && <>{icon}</>}
      {value && (
        <Box textStyle="small" color="neutral.800">
          {value}
        </Box>
      )}
      {children && (
        <Box
          width="4px"
          height="4px"
          bgColor={"neutral.400"}
          borderRadius="full"
        ></Box>
      )}
      <Box textStyle="small" color="neutral.950" fontWeight="500">
        {children}
      </Box>
    </HStack>
  );
};
