"use client";
import {
  Box,
  UnorderedList,
  ListItem,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { TextTitleDescription } from "./TextTitleDescription";

interface Props {}

export const FormWidgetCardDriverPlus = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props} borderRadius="lg" bg="neutral.100" p={["3", "4", "4"]}>
      <TextTitleDescription
        title="Take advantage of all the advantages reserved for DriverPlus customers:"
        size="body"
        asType="p"
      >
        <UnorderedList>
          <ListItem>Free tire insurance for 2 years</ListItem>
          <ListItem>1% cashback on every purchase made</ListItem>
          <ListItem>Free checks on your vehicle</ListItem>
        </UnorderedList>
      </TextTitleDescription>

      <Box mt="3">
        <CheckboxGroup>
          <Checkbox size="lg">
            I want a <b>Driver Plus card</b>. You will complete your application
            at your branch
          </Checkbox>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};
