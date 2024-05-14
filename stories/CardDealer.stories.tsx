import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardDealer } from "../components/CardDealer";

const meta = {
  title: "Molecules/CardDealer",
  component: CardDealer,
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
} satisfies Meta<typeof CardDealer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Driver Center Stansstad",
    address: "Stanserstrasse 11, 6362 Stansstad",
    url: "https://www.google.com",
    openingHours: [
      { days: "Mon - Fri", hours: "08:00 - 18:00" },
      { days: "Sat", hours: "08:00 - 12:00" },
      { days: "Sun", hours: "Closed" },
      { days: "Public Holidays", hours: "Closed" },
    ],
    promo: {
      promoLabel: "PROMO X3",
      promoLinkLabel: "Discover All Promo",
      promoLink: "https://www.google.com",
    },
    logos: [
      {
        src: "https://via.placeholder.com/63x28",
        alt: "Driver Center Stansstad",
      },
      {
        src: "https://via.placeholder.com/63x28",
        alt: "Driver Center Stansstad",
      },
    ],
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    children: "Driver Center Stansstad",
    address: "Stanserstrasse 11, 6362 Stansstad",
    url: "https://www.google.com",
    openingHours: [
      { days: "Mon - Fri", hours: "08:00 - 18:00" },
      { days: "Sat", hours: "08:00 - 12:00" },
      { days: "Sun", hours: "Closed" },
      { days: "Public Holidays", hours: "Closed" },
    ],
    promo: {
      promoLabel: "PROMO X3",
      promoLinkLabel: "Discover All Promo",
      promoLink: "https://www.google.com",
    },
    logos: [
      {
        src: "https://via.placeholder.com/63x28",
        alt: "Driver Center Stansstad",
      },
      {
        src: "https://via.placeholder.com/63x28",
        alt: "Driver Center Stansstad",
      },
    ],
    isSelected: true,
  },
};

export const NoLogos: Story = {
  args: {
    children: "Driver Center Stansstad",
    address: "Stanserstrasse 11, 6362 Stansstad",
    url: "https://www.google.com",
    logos: [],
    openingHours: [
      { days: "Mon - Fri", hours: "08:00 - 18:00" },
      { days: "Sat", hours: "08:00 - 12:00" },
      { days: "Sun", hours: "Closed" },
      { days: "Public Holidays", hours: "Closed" },
    ],
    promo: {
      promoLabel: "PROMO X3",
      promoLinkLabel: "Discover All Promo",
      promoLink: "https://www.google.com",
    },
    isSelected: true,
  },
};
