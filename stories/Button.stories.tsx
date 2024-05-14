import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box, Button } from "@chakra-ui/react";
import { CloseIcon } from "../icons/InterfaceIcons";

const meta = {
  title: "Atoms/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    variant: "primary",
    children: "Text",
    isDisabled: false,
  },
};
export const Secondary: Story = {
  args: {
    size: "md",
    variant: "secondary",
    children: "Text",
    isDisabled: false,
  },
};

export const Ghost: Story = {
  args: {
    size: "md",
    variant: "ghost",
    children: "Text",
    isDisabled: false,
  },
};

export const WithIconsLeft: Story = {
  args: {
    size: "md",
    variant: "primary",
    children: "Text",
    isDisabled: false,
    leftIcon: <CloseIcon boxSize="5" />,
  },
};

export const WithIconsRight: Story = {
  args: {
    size: "md",
    variant: "primary",
    children: "Text",
    isDisabled: false,
    rightIcon: <CloseIcon boxSize="5" />,
  },
};
