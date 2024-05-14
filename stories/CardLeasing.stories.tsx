import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardLeasing } from "../components/CardLeasing";

const meta = {
  title: "Molecules/CardLeasing",
  component: CardLeasing,
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
} satisfies Meta<typeof CardLeasing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    phone: "+39 123456789",
    mail: "sendanemail@gmail.com",
    children: "Leasing Company",
    url: "https://www.example.com",
    image: "https://via.placeholder.com/135x71",
  },
};
