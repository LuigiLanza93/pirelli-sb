import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Foundations",
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Pages",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
