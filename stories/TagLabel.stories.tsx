import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { TagLabel } from "../components/TagLabel";

const meta = {
  title: "Atoms/TagLabel",
  component: TagLabel,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
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
} satisfies Meta<typeof TagLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "PRODUCT TAG",
    bg: "blackAlpha.300",
    color: "white",
    fontWeight: "600",
    textStyle: "xsmall",
  },
};
