import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { AlertMessage } from "../components/AlertMessage";

const meta = {
  title: "Molecules/AlertMessage",
  component: AlertMessage,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    alertType: {
      options: ["info", "success", "warning", "error"],
      control: { type: "select" },
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
} satisfies Meta<typeof AlertMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: "Select your services",
    description: "Lorem ipsum dolor sit amet consectetur.",
    alertType: "info",
  },
};

export const Success: Story = {
  args: {
    ...Info.args,
    alertType: "success",
  },
};

export const warning: Story = {
  args: {
    ...Info.args,
    alertType: "warning",
  },
};

export const Error: Story = {
  args: {
    ...Info.args,
    alertType: "error",
  },
};
