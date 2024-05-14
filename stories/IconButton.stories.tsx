import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "../icons/InterfaceIcons";

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "secondary", "ghost"],
      control: { type: "select" },
    },
    isDisabled: { control: "boolean" },
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    variant: "primary",
    isDisabled: false,
    icon: <CloseIcon boxSize="5" />,
  },
};
export const Secondary: Story = {
  args: {
    size: "md",
    variant: "secondary",
    isDisabled: false,
    icon: <CloseIcon boxSize="5" />,
  },
};

export const Ghost: Story = {
  args: {
    size: "md",
    variant: "ghost",
    isDisabled: false,
    icon: <CloseIcon boxSize="5" />,
  },
};
