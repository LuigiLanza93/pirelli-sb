import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts";
import textStyles from "./textStyles";
import radii from "./radii";
import buttons from "./buttons";
import form from "./form";
import checkbox from "./checkbox";
import radio from "./radio";
import stepper from "./stepper";
import accordion from "./accordion";
import slider from "./slider";

import dackiaThemeToken from "./themeDackia";
import driverThemeToken from "./themeDriver";

export const theme = extendTheme({
  ...fonts,
  ...colors,
  ...textStyles,
  ...radii,
  components: {
    ...buttons,
    ...form,
    ...checkbox,
    ...radio,
    ...stepper,
    ...accordion,
    ...slider,
  },
});

export const dackiaTheme = extendTheme(
  {
    ...dackiaThemeToken,
  },
  theme
);

export const driverTheme = extendTheme(
  {
    ...driverThemeToken,
  },
  theme
);
