import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardProductStatus } from "../components/CardProductStatus";

const meta = {
  title: "Molecules/CardProductStatus",
  component: CardProductStatus,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    alertType: {
      control: {
        type: "select",
        options: ["success", "warning", "error"],
      },
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
} satisfies Meta<typeof CardProductStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatusSuccess: Story = {
  args: {
    alertType: "success",
    alertTitle: "Your tread is 4mm!",
    alertDescription: "You're ready to go, book now.",
  },
};

export const StatusWarning: Story = {
  args: {
    alertType: "warning",
    alertTitle: "Your tread is 3mm!",
    alertDescription: "Get a quote, click on “order new tires”",
  },
};

export const StatusDanger: Story = {
  args: {
    alertType: "error",
    alertTitle: "Your tread is 2mm!",
    alertDescription: "Don't risk dangers and fines",
  },
};
