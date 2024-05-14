import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);
const baseStyle = definePartsStyle({
  thumb: {
    bg: "neutral.900",
  },
  filledTrack: {
    bg: "neutral.900",
  },
});
const sliderTheme = defineMultiStyleConfig({ baseStyle });

const slider = {
  Slider: {
    ...sliderTheme,
  },
};

export default slider;
