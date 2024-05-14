import exp from "constants";

const form = {
  Form: {
    variants: {
      floating: {
        container: {
          _focusWithin: {
            label: {
              transform: "scale(0.75) translateY(-11px) translateX(2px)",
            },
          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
            {
              transform: "scale(0.75) translateY(-11px) translateX(2px)",
            },
          "input[data-status='success'], textarea[data-status='success']": {
            borderColor: "success.700",
            _focus: {
              borderColor: "success.700",
              boxShadow: "0 0 0 0 transparent",
            },
          },
          "input[data-status='warning'], textarea[data-status='warning']": {
            borderColor: "warning.700",
            _focus: {
              borderColor: "warning.700",
              boxShadow: "0 0 0 0 transparent",
            },
          },
          ".chakra-input__left-element": {
            left: "2px",
            top: "5px",
          },
          "&.has--leftIcon input": {
            paddingLeft: "12",
          },
          "&.has--leftIcon label": {
            left: "12",
          },
          label: {
            top: "13px",
            left: 4,
            zIndex: 2,
            margin: 0,
            padding: 0,
            position: "absolute",
            backgroundColor: "transparent",
            pointerEvents: "none",
            transformOrigin: "left top",
            color: "neutral.700",
            _disabled: {
              color: "neutral.500",
            },
            _readOnly: {
              color: "neutral.500",
            },
          },
          input: {
            border: "1px solid ",
            borderColor: "neutral.200",
            padding: "22px 16px 8px",
            borderRadius: "lg",
            lineHeight: "22px",
            height: "50px",
            margin: 0,
            _focus: {
              borderColor: "neutral.600",
              boxShadow: "0 0 0 0 transparent",
            },
            _focusVisible: {},
            _invalid: {
              borderColor: "error.700",
            },
            _disabled: {
              bg: "neutral.200",
              color: "neutral.500",
            },
            _readOnly: {
              bg: "neutral.200",
              color: "neutral.500",
              _focus: {
                borderColor: "neutral.200",
                boxShadow: "0 0 0 0 transparent",
              },
            },
          },
          textarea: {
            border: "1px solid ",
            borderColor: "neutral.200",
            padding: "24px 16px 8px",
            borderRadius: "lg",
            lineHeight: "22px",
            height: "56px",
            margin: 0,
            _focus: {
              borderColor: "neutral.600",
              boxShadow: "0 0 0 0 transparent",
            },
            _focusVisible: {},
            _invalid: {
              borderColor: "error.700",
            },
            _disabled: {
              bg: "neutral.200",
              color: "neutral.500",
            },
            _readOnly: {
              bg: "neutral.200",
              color: "neutral.500",
              _focus: {
                borderColor: "neutral.200",
                boxShadow: "0 0 0 0 transparent",
              },
            },
          },
        },
      },
    },
  },
};
export default form;
