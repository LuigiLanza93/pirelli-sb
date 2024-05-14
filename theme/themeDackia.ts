import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const StepperBaseStyle = definePartsStyle({
  indicator: {
    width: "6",
    height: "6",
    "&[data-status=complete], &[data-status=active]": {
      color: "white",
    },
  },
});

const dackiaThemeToken = {
  colors: {
    primary: {
      50: "#F8D3D1",
      100: "#F2A6A4",
      200: "#ED8582",
      300: "#E96F6B",
      400: "#E65854",
      500: "#DE211B",
      600: "#B21A16",
      700: "#851410",
      800: "#640F0C",
      900: "#4E0C09",
      950: "#1F1F1F",
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          color: "white",
        },
      },
    },
    Stepper: defineMultiStyleConfig({ baseStyle: StepperBaseStyle }),
  },
};

export default dackiaThemeToken;
