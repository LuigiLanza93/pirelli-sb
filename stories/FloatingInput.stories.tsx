import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { FloatingInput } from "../components/FloatingInput";
import { CloseIcon } from "../icons/InterfaceIcons";

const meta = {
  title: "Molecules/FloatingInput",
  component: FloatingInput,
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
} satisfies Meta<typeof FloatingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: "name",
    label: "First Name",
    hint: {
      is: false,
      text: "Keep it very short and sweet!",
      icon: <CloseIcon boxSize="4" />,
    },
    required: { is: false },
    disabled: { is: false },
    readonly: { is: false },
    invalid: { is: false, text: "Your First name is invalid" },
    success: { is: false, text: "Success message for the user" },
    warning: { is: false, text: "Warning message for the user" },
    info: { is: false, text: "Info message for the user" },
  },
};

export const Required: Story = {
  args: {
    id: "name",
    label: "First Name",
    required: { is: true },
  },
};

export const Disabled: Story = {
  args: {
    id: "name",
    label: "First Name",
    disabled: { is: true },
  },
};

export const ReadOnly: Story = {
  args: {
    id: "name",
    label: "First Name",
    value: "John Doe",
    readonly: { is: true },
  },
};

export const withHint: Story = {
  args: {
    id: "name",
    label: "First Name",
    hint: {
      is: true,
      text: "Keep it very short and sweet!",
    },
  },
};

export const withHintAndIcon: Story = {
  args: {
    id: "name",
    label: "First Name",
    hint: {
      is: true,
      text: "Keep it very short and sweet!",
      icon: <CloseIcon boxSize="4" mr="1" />,
    },
  },
};

export const Error: Story = {
  args: {
    id: "name",
    label: "First Name",
    value: "*#+!@",
    invalid: { is: true, text: "Your First name is invalid" },
    success: { is: false, text: "Success message for the user" },
    warning: { is: false, text: "Warning message for the user" },
    info: { is: false, text: "Info message for the user" },
  },
};

export const Warning: Story = {
  args: {
    id: "name",
    label: "First Name",
    warning: { is: true, text: "Warning message for the user" },
  },
};

export const Success: Story = {
  args: {
    id: "name",
    label: "First Name",
    success: { is: true, text: "Success message for the user" },
  },
};

export const Info: Story = {
  args: {
    id: "name",
    label: "First Name",
    info: { is: true, text: "Info message for the user" },
  },
};

export const WithIcon: Story = {
  args: {
    id: "name",
    label: "First Name",
    leftIcon: <CloseIcon boxSize="5" />,
  },
};
