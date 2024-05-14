"use client";
import { Link, Box } from "@chakra-ui/react";
import { FloatingInput } from "./FloatingInput";
import { TargetIcon } from "../icons/CarIcons";
import { SearchIcon } from "../icons/InterfaceIcons";

interface Props {}

export const FormWidgetSearch = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props}>
      <Box mb="6px">
        <FloatingInput
          id="search"
          label="Search"
          type="text"
          leftIcon={<SearchIcon boxSize="6" />}
        />
      </Box>
      <Link
        href="/#"
        textStyle="xsmall"
        fontWeight="400"
        color="neutral.800"
        textDecoration="none"
      >
        <TargetIcon boxSize="4" mr="1" mt="-1" />
        Use your current location
      </Link>
    </Box>
  );
};
