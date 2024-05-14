import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import ContentModalLogin from "../content/ContentModalLogin";

const meta = {
  title: "Templates/ContentModalLogin",
  component: ContentModalLogin,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Providers>
        <Box mx="4" my="8">
          <Story />
        </Box>
      </Providers>
    ),
  ],
} satisfies Meta<typeof ContentModalLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Organism: Story = {};
