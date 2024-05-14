import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardProduct } from "../components/CardProduct";

const meta = {
  title: "Molecules/CardProduct",
  component: CardProduct,
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
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Cinturato SF All Season II",
    tyreSize: "225/45 R17 91W",
    imageUrl: "https://via.placeholder.com/61x61",
  },
};

export const WithStatus: Story = {
  args: {
    children: "Cinturato SF All Season II",
    tyreSize: "225/45 R17 91W",
    imageUrl: "https://via.placeholder.com/61x61",
    status: {
      alertType: "warning",
      alertTitle: "Your tread is 3mm!",
      alertDescription: "get a quote, click on “order new tires”",
    },
  },
};
