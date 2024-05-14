import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import ContentServices from "../content/ContentServices";

const meta = {
  title: "Templates/ContentServices",
  component: ContentServices,
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
} satisfies Meta<typeof ContentServices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Organism: Story = {};
