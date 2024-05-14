import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { FormWidgetCardDriverPlus } from "../components/FormWidgetCardDriverPlus";

const meta = {
  title: "Organisms/FormWidgetCardDriverPlus",
  component: FormWidgetCardDriverPlus,
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
} satisfies Meta<typeof FormWidgetCardDriverPlus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
