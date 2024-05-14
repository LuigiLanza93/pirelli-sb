import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Accordions from "./Accordions";

const meta = {
  title: "Organisms/Showcases/Accordions",
  component: Accordions,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Providers>
        <Box margin="8">
          <Story />
        </Box>
      </Providers>
    ),
  ],
} satisfies Meta<typeof Accordions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
