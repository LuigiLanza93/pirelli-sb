"use client";
import { Box, VStack, Checkbox, CheckboxGroup } from "@chakra-ui/react";

interface Props {}

export const PrivacyCheckboxes = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props}>
      <CheckboxGroup>
        <VStack align="flex-start" spacing="4">
          <Checkbox size="lg">
            By clicking on "book" the Retailer will be informed that you have
            booked the appointment and will wait for you on the day and time you
            have chosen
          </Checkbox>
          <Checkbox size="lg">I have a car with a leasing agreement</Checkbox>
          <Checkbox size="lg">
            I would like to receive direct marketing communications from Driver
            (via e-mail) in accordance with the Privacy Policy
          </Checkbox>
        </VStack>
      </CheckboxGroup>
    </Box>
  );
};
