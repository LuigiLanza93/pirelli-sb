import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { TextLink } from "../components/TextLink";

const meta = {
  title: "Atoms/TextLink",
  component: TextLink,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "body"],
      control: { type: "radio" },
    },
    isExternal: { control: "boolean" },
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
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alignment: "center",
    href: "https://www.pirelli.com",
    isExternal: true,
    size: "body",
    color: "neutral.700",
    children: "See all services",
  },
};
