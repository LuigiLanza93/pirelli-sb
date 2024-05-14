import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Colors from "./Colors";

const meta = {
  title: "Foundations/Colors",
  component: Colors,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Providers>
        <Box padding="8" bgColor="neutral.200">
          <Story />
        </Box>
      </Providers>
    ),
  ],
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
