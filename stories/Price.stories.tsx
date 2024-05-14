import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { Price } from "../components/Price";

const meta = {
  title: "Molecules/Price",
  component: Price,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["standard", "free", "range", "discount", "starting"],
      control: { type: "radio" },
    },
    textStyle: {
      options: ["small", "body", "lead"],
      control: { type: "radio" },
    },
    fontWeight: {
      options: ["400", "500", "600", "700"],
      control: { type: "radio" },
    },
    isMultiline: {
      control: "boolean",
    },
    tagLabel: {
      if: { arg: "variant", eq: "free" },
      control: "text",
    },
    strokedPrice: {
      if: { arg: "variant", eq: "discount" },
      control: "text",
    },
    fromLabel: {
      if: { arg: "variant", eq: "range" },
      control: "text",
    },
    toLabel: {
      if: { arg: "variant", eq: "range" },
      control: "text",
    },
    fromPrice: {
      control: "text",
    },
    toPrice: {
      if: { arg: "variant", eq: "range" },
      control: "text",
    },
    children: {
      control: "text",
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
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    variant: "standard",
    textStyle: "body",
    fontWeight: "900",
    children: "100€",
  },
};

export const Starting: Story = {
  args: {
    variant: "starting",
    textStyle: "body",
    fontWeight: "900",
    fromLabel: "From",
    children: "100€",
  },
};

export const Range: Story = {
  args: {
    variant: "range",
    textStyle: "body",
    fontWeight: "900",
    fromLabel: "From",
    toLabel: "To",
    fromPrice: "100€",
    toPrice: "200€",
  },
};

export const RangeMultiline: Story = {
  args: {
    variant: "range",
    isMultiline: true,
    textStyle: "body",
    fontWeight: "900",
    fromLabel: "From",
    toLabel: "To",
    fromPrice: "100€",
    toPrice: "200€",
  },
};

export const Discount: Story = {
  args: {
    variant: "discount",
    textStyle: "body",
    fontWeight: "900",
    strokedPrice: "100€",
    children: "99€",
  },
};

export const DiscountMultiline: Story = {
  args: {
    variant: "discount",
    isMultiline: true,
    textStyle: "body",
    fontWeight: "900",
    strokedPrice: "100€",
    children: "99€",
  },
};

export const Free: Story = {
  args: {
    variant: "free",
    textStyle: "body",
    fontWeight: "900",
    tagLabel: "FREE",
    children: "0,00€",
  },
};
