import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardInformative } from "../components/CardInformative";

const meta = {
  title: "Molecules/CardInformative",
  component: CardInformative,
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
} satisfies Meta<typeof CardInformative>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Find a store near you",
    textTitle: "Find a store",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus tortor phasellus nullam vitae aliquet ut dolor quis. Et purus hendrerit ac condimentum morbi.",
    button: { label: "Find a store", url: "#" },
    image: { url: "https://via.placeholder.com/410x230", alt: "Find a store" },
  },
};

export const Horizotal: Story = {
  args: {
    children: "Find a store near you",
    textTitle: "Find a store",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus tortor phasellus nullam vitae aliquet ut dolor quis. Et purus hendrerit ac condimentum morbi.",
    button: { label: "Find a store", url: "#" },
    image: { url: "https://via.placeholder.com/340x196", alt: "Find a store" },
    isHorizonatal: true,
  },
};

export const Small: Story = {
  args: {
    children: "Find a store near you",
    textTitle: "Find a store",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus tortor phasellus nullam vitae aliquet ut dolor quis. Et purus hendrerit ac condimentum morbi.",
    button: { label: "Find a store", url: "#" },
    image: { url: "https://via.placeholder.com/410x230", alt: "Find a store" },
    isSmall: true,
  },
};
