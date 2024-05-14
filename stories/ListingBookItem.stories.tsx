import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { ListingBookItem } from "../components/ListingBookItem";

const meta = {
  title: "Molecules/ListingBookItem",
  component: ListingBookItem,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    priceVariant: {
      control: { type: "radio" },
      options: ["standard", "range", "discounted", "free", "starting"],
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
} satisfies Meta<typeof ListingBookItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InformativeStandard: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "standard",
    price: "100.00€",
  },
};

export const InformativeRange: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "range",
    price: "100.00€",
    fromLabel: "From",
    toLabel: "To",
    fromPrice: "100.00€",
    toPrice: "200.00€",
  },
};

export const InformativeRangeMultiline: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "range",
    price: "100.00€",
    fromLabel: "From",
    toLabel: "To",
    fromPrice: "100.00€",
    toPrice: "200.00€",
    isMultiline: true,
  },
};

export const InformativeStarting: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "starting",
    price: "100.00€",
    fromLabel: "From",
  },
};

export const InformativeDiscount: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "discount",
    price: "100.00€",
    strokedPrice: "200.00€",
  },
};

export const InformativeDiscountMultiline: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "discount",
    price: "100.00€",
    strokedPrice: "200.00€",
    isMultiline: true,
  },
};

export const InformativeFree: Story = {
  args: {
    variant: "informative",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "free",
    price: "0,00€",
    tagLabel: "FREE",
  },
};

export const ActionsStandard: Story = {
  args: {
    variant: "actions",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "standard",
    price: "100.00€",
  },
};

export const ActionsRange: Story = {
  args: {
    variant: "actions",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "range",
    price: "100.00€",
    fromLabel: "From",
    toLabel: "To",
    fromPrice: "100.00€",
    toPrice: "200.00€",
  },
};

export const ActionsStarting: Story = {
  args: {
    variant: "actions",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "starting",
    price: "100.00€",
    fromLabel: "From",
  },
};

export const ActionsDiscount: Story = {
  args: {
    variant: "actions",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "discount",
    price: "100.00€",
    strokedPrice: "200.00€",
  },
};

export const ActionsFree: Story = {
  args: {
    variant: "actions",
    children: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur",
    priceVariant: "free",
    price: "0,00€",
    tagLabel: "FREE",
  },
};
