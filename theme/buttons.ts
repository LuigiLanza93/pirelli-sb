const buttons = {
  Button: {
    ".chakra-accordion__button": {
      backgroundColor: "transparent",
    },
    sizes: {
      sm: {
        fontSize: "0.875rem",
        h: "36px",
        minW: "36px",
        px: "14px",
      },
      md: {
        fontSize: "0.875rem",
        h: "40px",
        minW: "40px",
        px: "16px",
      },
      lg: {
        fontSize: "1rem",
        h: "44px",
        minW: "44px",
        px: "18px",
      },
      xl: {
        fontSize: "1rem",
        h: "48px",
        minW: "48px",
        px: "20px",
      },
      "2xl": {
        fontSize: "1rem",
        h: "56px",
        minW: "56px",
        px: "28px",
      },
    },
    variants: {
      primary: {
        bg: "primary.500",
        borderWidth: "1px",
        borderColor: "primary.500",
        _hover: {
          bg: "primary.600",
          borderColor: "primary.600",
          _disabled: {
            bg: "primary.100",
            borderColor: "primary.100",
            color: "neutral.400",
          },
        },
        _focusVisible: {
          outline: "1.5px solid #1F1F1F",
          outlineOffset: "1px",
          boxShadow: "0 0 0 transparent",
        },
        _active: {
          bg: "white",
          borderWidth: "1px",
          borderColor: "primary.500",
          transition: "none",
        },
        _disabled: {
          bg: "primary.100",
          borderColor: "primary.100",
          color: "neutral.400",
        },
      },
      secondary: {
        bg: "neutral.100",
        borderWidth: "1px",
        borderColor: "neutral.100",
        _hover: {
          bg: "neutral.200",
          borderColor: "neutral.200",
          _disabled: {
            bg: "neutral.50",
            borderColor: "neutral.50",
            color: "neutral.400",
          },
        },
        _focusVisible: {
          outline: "1.5px solid #1F1F1F",
          outlineOffset: "1px",
          boxShadow: "0 0 0 transparent",
        },
        _active: {
          bg: "neutral.300",
          borderWidth: "1px",
          borderColor: "neutral.500",
          transition: "none",
        },
        _disabled: {
          bg: "neutral.50",
          borderColor: "neutral.50",
          color: "neutral.400",
        },
      },
      ghost: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "transparent",
        _hover: {
          bg: "neutral.200",
          borderColor: "neutral.200",
          _disabled: {
            bg: "neutral.50",
            borderColor: "neutral.50",
            color: "neutral.400",
          },
        },
        _focusVisible: {
          outline: "1.5px solid #1F1F1F",
          outlineOffset: "1px",
          boxShadow: "0 0 0 transparent",
        },
        _active: {
          bg: "neutral.300",
          borderWidth: "1px",
          borderColor: "neutral.500",
          transition: "none",
        },
        _disabled: {
          bg: "neutral.50",
          borderColor: "neutral.50",
          color: "neutral.400",
        },
      },
    },
  },
};

export default buttons;
