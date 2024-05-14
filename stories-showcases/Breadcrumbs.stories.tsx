import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";

import Breadcrumbs from "./Breadcrumbs";

const meta = {
  title: "Molecules/Showcases/Breadcrumbs",
  component: Breadcrumbs,
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
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
