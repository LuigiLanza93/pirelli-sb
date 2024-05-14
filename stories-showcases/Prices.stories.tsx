import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Prices from "./Prices";

const meta = {
  title: "Molecules/Showcases/Prices",
  component: Prices,
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
} satisfies Meta<typeof Prices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
