import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { StepCounter } from "../components/StepCounter";

const meta = {
  title: "Molecules/StepCounter",
  component: StepCounter,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Providers>
        <Box margin="4">
          <Story />
        </Box>
      </Providers>
    ),
  ],
} satisfies Meta<typeof StepCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
