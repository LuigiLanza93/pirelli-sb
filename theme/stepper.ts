const baseStyle = {
  stepper: {
    gap: 2,
  },
  number: {
    fontSize: "12px",
  },
  step: {},
  separator: {
    bgColor: "neutral.200",
    "&[data-status=active]": {
      borderWidth: "0",
      borderColor: "transparent",
    },
    "&[data-status=complete]": {
      bg: "neutral.200",
    },
    "&[data-status=incomplete]": {
      borderWidth: "0",
      borderColor: "transparent",
    },
    "&[data-orientation=horizontal]": {
      height: "1px",
      marginStart: "0",
    },
  },
  indicator: {
    "&[data-status=complete], &[data-status=active]": {
      bg: "primary.500",
      color: "black",
      borderWidth: "0",
      borderColor: "transparent",
    },
    "&[data-status=incomplete]": {
      bg: "neutral.200",
      borderWidth: "0",
      borderColor: "transparent",
    },
  },
};

const stepperTheme = {
  baseStyle,
};

const stepper = {
  Stepper: {
    ...stepperTheme,
  },
};

export default stepper;
