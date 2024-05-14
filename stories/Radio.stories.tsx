import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box, Radio } from "@chakra-ui/react";

const meta = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["lg", "md"],
      control: { type: "select" },
    },
    isDisabled: { control: "boolean" },
    isInvalid: { control: "boolean" },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: "md",
    children:
      "I want a Driver Plus card. You will complete your application at your branch",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children:
      "I want a Driver Plus card. You will complete your application at your branch",
  },
};
