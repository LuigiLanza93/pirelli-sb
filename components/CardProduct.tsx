"use client";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { CardProductStatus } from "./CardProductStatus";

interface Props {
  children: string;
  tyreSize: string;
  imageUrl?: string;
  status?: { alertType: string; alertTitle: string; alertDescription: string };
}

export const CardProduct = ({
  children,
  tyreSize,
  imageUrl,
  status,
  ...props
}: Props): JSX.Element => {
  const labels = {
    yourTireSize: "Your tire size:",
  };

  return (
    <Box
      borderRadius="lg"
      border="1px solid"
      borderColor="neutral.200"
      p="4"
      {...props}
    >
      <Flex align="center">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={children}
            width="61px"
            height="61px"
            mr="3"
            borderRadius="md"
          />
        )}

        <Box>
          <Text textStyle="lead" fontWeight="500" mb="1">
            {children}
          </Text>
          <Text textStyle="body" fontWeight="400">
            {labels.yourTireSize} {tyreSize}
          </Text>
        </Box>
      </Flex>

      {status && (
        <CardProductStatus
          mt="4"
          alertType="warning"
          alertDescription="get a quote, click on
            “order new tires”"
          alertTitle="Your tread is 3mm!"
        />
      )}
    </Box>
  );
};
