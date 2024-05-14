"use client";
import { Text, Box, VStack } from "@chakra-ui/react";
import { AlertMessage } from "./AlertMessage";
interface Props {
  alertType: string;
  alertTitle: string;
  alertDescription: string;
}

export const CardProductStatus = ({
  alertType,
  alertTitle,
  alertDescription,
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      borderRadius="lg"
      border="1px solid"
      borderColor="neutral.200"
      p="4"
      {...props}
    >
      <AlertMessage
        alertType={alertType}
        title={alertTitle}
        description={alertDescription}
      ></AlertMessage>

      <VStack align="flex-start" mt="2" spacing={3}>
        <Box>
          <Text
            as="span"
            textStyle="small"
            fontWeight="700"
            color="success.500"
            pr="2"
          >
            6-4.1mm
          </Text>
          <Text as="span" textStyle="small" fontWeight="400">
            You are ready to go, book a seasonal change!
          </Text>
        </Box>
        <Box>
          <Text
            as="span"
            textStyle="small"
            fontWeight="700"
            color="warning.500"
            pr="2"
          >
            4-3mm
          </Text>
          <Text as="span" textStyle="small" fontWeight="400">
            You will soon need to change your tires: get a quote, click on
            “order new tires”
          </Text>
        </Box>
        <Box>
          <Text
            as="span"
            textStyle="small"
            fontWeight="700"
            color="error.500"
            pr="2"
          >
            2.9-01mm
          </Text>
          <Text as="span" textStyle="small" fontWeight="400">
            Don't risk dangers and fines, order a new tires!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
