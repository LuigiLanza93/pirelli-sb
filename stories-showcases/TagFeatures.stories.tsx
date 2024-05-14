import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import TagFeatures from "./TagFeatures";

const meta = {
  title: "Atoms/Showcases/TagFeatures",
  component: TagFeatures,
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
} satisfies Meta<typeof TagFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
