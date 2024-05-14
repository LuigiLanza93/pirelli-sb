import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import ContentOverview from "../content/ContentOverview";

const meta = {
  title: "Templates/ContentOverview",
  component: ContentOverview,
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
} satisfies Meta<typeof ContentOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Organism: Story = {};
