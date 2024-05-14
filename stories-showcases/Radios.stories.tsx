import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Radios from "./Radios";

const meta = {
  title: "Atoms/Showcases/Radios",
  component: Radios,
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
} satisfies Meta<typeof Radios>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
