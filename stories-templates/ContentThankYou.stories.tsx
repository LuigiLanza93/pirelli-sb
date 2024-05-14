import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import ContentThankYou from "../content/ContentThankYou";

const meta = {
  title: "Templates/ContentThankYou",
  component: ContentThankYou,
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
} satisfies Meta<typeof ContentThankYou>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Organism: Story = {};
