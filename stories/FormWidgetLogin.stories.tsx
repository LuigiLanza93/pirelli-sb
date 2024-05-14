import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { FormWidgetLogin } from "../components/FormWidgetLogin";

const meta = {
  title: "Organisms/FormWidgetLogin",
  component: FormWidgetLogin,
  parameters: {
    layout: "fullscreen",
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
} satisfies Meta<typeof FormWidgetLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
