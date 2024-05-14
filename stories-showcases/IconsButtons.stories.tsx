import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import IconButtons from "./IconsButtons";

const meta = {
  title: "Atoms/Showcases/IconsButtons",
  component: IconButtons,
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
} satisfies Meta<typeof IconButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
