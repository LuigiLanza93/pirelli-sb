"use client";
import { Text, Box, Tooltip, SimpleGrid } from "@chakra-ui/react";
import { FormWidgetCardDriverPlus } from "./FormWidgetCardDriverPlus";
import { FloatingInput } from "./FloatingInput";
import { CircleInfoIcon } from "../icons/InterfaceIcons";

interface Props {}

export const FormWidgetDriverPlus = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props} borderRadius="lg" bg="neutral.50" p={["3", "4", "4"]}>
      <Box mb="4">
        <Text as="span" textStyle="body" fontWeight="700" pr="5px">
          Select Services
        </Text>
        <Tooltip
          hasArrow
          label="A tooltip content for a close icon"
          placement="top-start"
          borderRadius="base"
          color="white"
          bg="neutral.950"
          fontSize={["0.75rem", "0.75rem", "0.75rem"]}
          fontWeight="500"
          px="3"
          py="1"
          aria-label="A tooltip"
        >
          <Box as="span">
            <CircleInfoIcon cursor="pointer" boxSize="4" />
          </Box>
        </Tooltip>
      </Box>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={[2, 2, 4]} mb="4">
        <FloatingInput
          id="client-code"
          label="Client Code"
          required={{ is: true }}
        />
        <FloatingInput
          id="first-three-letters-of-your-surname"
          label="First three letters of your surname"
          required={{ is: true }}
        />
      </SimpleGrid>

      <FormWidgetCardDriverPlus />
    </Box>
  );
};
