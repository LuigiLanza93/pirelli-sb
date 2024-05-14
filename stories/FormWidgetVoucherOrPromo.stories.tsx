import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { FormWidgetVoucherOrPromo } from "../components/FormWidgetVoucherOrPromo";

const meta = {
  title: "Organisms/FormWidgetVoucherOrPromo",
  component: FormWidgetVoucherOrPromo,
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
} satisfies Meta<typeof FormWidgetVoucherOrPromo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
