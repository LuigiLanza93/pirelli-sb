import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { BannerPromo } from "../components/BannerPromo";

const meta = {
  title: "Molecules/BannerPromo",
  component: BannerPromo,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    promoLabel: {
      control: {
        type: "text",
      },
    },
    promoLinkLabel: {
      control: {
        type: "text",
      },
    },
    promoLink: {
      control: {
        type: "text",
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
} satisfies Meta<typeof BannerPromo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    promoLabel: "PROMO",
    promoLinkLabel: 'Discover the 18" Pirelli products',
    promoLink: "#",
  },
};

export const Small: Story = {
  args: {
    promoLabel: "PROMO",
    promoLinkLabel: 'Discover the 18" Pirelli products',
    promoLink: "#",
    isSmall: true,
  },
};
