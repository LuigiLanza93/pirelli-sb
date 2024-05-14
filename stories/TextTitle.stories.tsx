import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { TextTitle } from "../components/TextTitle";

const meta = {
  title: "Atoms/TextTitle",
  component: TextTitle,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
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
} satisfies Meta<typeof TextTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alignment: "left",
    children: "Lorem Ipsum",
  },
};
