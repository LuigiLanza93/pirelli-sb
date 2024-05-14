import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    marginStart: 4,
    lineHeight: "5",
    _invalid: {
      color: "error.700",
    },
  },
  control: {
    border: "1px solid",
    borderColor: "neutral.400",
    borderRadius: "base",
    backgroundColor: "white",
    alignSelf: "start",
    mt: "px",
    _checked: {
      borderColor: "neutral.950",
      backgroundColor: "neutral.950",
      _hover: {
        borderColor: "neutral.900",
        backgroundColor: "neutral.900",
      },
    },
    _hover: {
      borderColor: "neutral.950",
    },
    _disabled: {
      backgroundColor: "neutral.200",
      borderColor: "neutral.400",
      _hover: {
        backgroundColor: "neutral.200",
        borderColor: "neutral.400",
      },
    },
  },
});

const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    md: definePartsStyle({
      label: defineStyle({ fontSize: ["0.75rem", "0.875rem"] }),
      icon: { fontSize: "8px" },
      control: { w: "4", h: "4" },
    }),
    lg: definePartsStyle({
      label: defineStyle({ fontSize: ["0.75rem", "0.875rem"] }),
      icon: { fontSize: "12px" },
      control: { w: "6", h: "6" },
    }),
  },
});
const checkbox = {
  Checkbox: {
    ...checkboxTheme,
  },
};

export default checkbox;
