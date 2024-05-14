import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { RangeSlider } from "../components/RangeSlider";

const meta = {
  title: "Atoms/RangeSlider",
  component: RangeSlider,
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
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "distance",
    minValue: "0Km",
    maxValue: "100Km",
    defaltValue: 50,
  },
};
