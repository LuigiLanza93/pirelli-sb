import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  root: {
    ".chakra-accordion__item:first-child": {
      borderTopWidth: "0",
    },
  },
  container: {
    paddingTop: "4",
  },
  button: {
    paddingLeft: "0",
    paddingRight: "4",
    paddingTop: "4",
    paddingBottom: "4",
    _hover: {
      bg: "transparent",
    },
  },
  panel: {
    paddingLeft: "0",
    paddingRight: "0",
    paddingTop: "4",
    paddingBottom: "4",
  },
});

const pill = definePartsStyle({
  root: {
    bg: "neutral.100",
    borderRadius: "lg",
  },
  container: {
    padding: "0",
  },
  button: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "4",
    paddingRight: "4",
    height: "47px",
    border: "1px solid",
    borderColor: "neutral.100",
    borderRadius: "lg",

    _hover: {
      bg: "transparent",
    },
    _focusVisible: {
      outline: "1px solid #1F1F1F",
      outlineOffset: "0",
      boxShadow: "0 0 0 transparent",
    },
  },
  panel: {
    paddingLeft: "4",
    paddingRight: "4",
    paddingTop: "0",
    paddingBottom: "0",
  },
});

const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { pill },
});

const accordion = {
  Accordion: {
    ...accordionTheme,
  },
};

export default accordion;
