import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { TextTitleDescription } from "../components/TextTitleDescription";
import { Box } from "@chakra-ui/react";

const meta = {
  title: "Atoms/TextTitleDescription",
  component: TextTitleDescription,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [
        "colossus",
        "uber",
        "hero",
        "title",
        "headline",
        "subheadline",
        "lead",
        "body",
      ],
      control: { type: "select" },
    },
    weight: {
      options: ["900", "700", "600", "500", "300"],
      control: { type: "select" },
    },
    alignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    asType: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
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
} satisfies Meta<typeof TextTitleDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Lorem ipsum",
    size: "hero",
    weight: "600",
    alignment: "left",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
};

export const NoTitle: Story = {
  args: {
    alignment: "left",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
};
