import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Tooltips from "./Tooltips";

const meta = {
  title: "Atoms/Showcases/Tooltips",
  component: Tooltips,
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
} satisfies Meta<typeof Tooltips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
