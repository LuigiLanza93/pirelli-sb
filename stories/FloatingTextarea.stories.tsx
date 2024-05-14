import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { FloatingTextarea } from "../components/FloatingTextarea";
import { CloseIcon } from "../icons/InterfaceIcons";

const meta = {
  title: "Molecules/FloatingTextarea",
  component: FloatingTextarea,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Providers>
        <Box margin="8">
          <Story />
        </Box>
      </Providers>
    ),
  ],
} satisfies Meta<typeof FloatingTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: "Comments",
    label: "Comments",
    hint: {
      is: false,
      text: "Keep it very short and sweet!",
      icon: <CloseIcon boxSize="4" />,
    },
    required: { is: false },
    disabled: { is: false },
    readonly: { is: false },
    invalid: { is: false, text: "Your Comments is invalid" },
    success: { is: false, text: "Success message for the user" },
    warning: { is: false, text: "Warning message for the user" },
    info: { is: false, text: "Info message for the user" },
  },
};

export const Required: Story = {
  args: {
    id: "comme",
    label: "Comments",
    required: { is: true },
  },
};

export const Disabled: Story = {
  args: {
    id: "comme",
    label: "Comments",
    disabled: { is: true },
  },
};

export const ReadOnly: Story = {
  args: {
    id: "comme",
    label: "Comments",
    value: "John Doe",
    readonly: { is: true },
  },
};

export const withHint: Story = {
  args: {
    id: "comme",
    label: "Comments",
    hint: {
      is: true,
      text: "Keep it very short and sweet!",
    },
  },
};

export const withHintAndIcon: Story = {
  args: {
    id: "comme",
    label: "Comments",
    hint: {
      is: true,
      text: "Keep it very short and sweet!",
      icon: <CloseIcon boxSize="4" mr="1" />,
    },
  },
};

export const Error: Story = {
  args: {
    id: "comme",
    label: "Comments",
    value: "*#+!@",
    invalid: { is: true, text: "Your Comments is invalid" },
    success: { is: false, text: "Success message for the user" },
    warning: { is: false, text: "Warning message for the user" },
    info: { is: false, text: "Info message for the user" },
  },
};

export const Warning: Story = {
  args: {
    id: "comme",
    label: "Comments",
    warning: { is: true, text: "Warning message for the user" },
  },
};

export const Success: Story = {
  args: {
    id: "comme",
    label: "Comments",
    success: { is: true, text: "Success message for the user" },
  },
};

export const Info: Story = {
  args: {
    id: "comme",
    label: "Comments",
    info: { is: true, text: "Info message for the user" },
  },
};
