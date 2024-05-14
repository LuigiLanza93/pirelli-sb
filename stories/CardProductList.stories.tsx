import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { CardProductList } from "../components/CardProductList";
import {
  WinterIcon,
  SummerIcon,
  AllSeasonIcon,
  SuvIcon,
  CuvIcon,
  AutomobileIcon,
  TouringIcon,
  SportIcon,
  PMSFIcon,
  AllweatherIcon,
  PerformanceIcon,
  AllterrainIcon,
  UrbanIcon,
  VanIcon,
  EVIcon,
  ExtremeIcon,
} from "../icons/TagIcon";

const meta = {
  title: "Molecules/CardProductList",
  component: CardProductList,
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
} satisfies Meta<typeof CardProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    children: "Pirelli Cinturato™ All Season SF II",
    logo: {
      src: "https://via.placeholder.com/88x23",
      alt: "Pirelli",
    },
    features: [
      { icon: <SummerIcon boxSize="6" />, label: "Summer" },
      { icon: <WinterIcon boxSize="6" />, label: "Winter" },
      { icon: <AllSeasonIcon boxSize="6" />, label: "All Season" },
      { icon: <UrbanIcon boxSize="6" />, label: "Urban" },
      { icon: <ExtremeIcon boxSize="6" />, label: "Extreme" },
      { icon: <SportIcon boxSize="6" />, label: "Sport" },
      { icon: <PMSFIcon boxSize="6" />, label: "3PMSF" },
    ],
    price: {
      variant: "discount",
      value: "€478,00",
      strokedPrice: "€500,00",
    },
    button: { label: "Booking", url: "http://www.google.com" },
    picture: {
      imageSm: "https://via.placeholder.com/320x104",
      alt: "Pirelli Cinturato™ All Season SF II",
    },
    tagLabels: [
      {
        label: "DESIGNED FOR YOUR CAR",
        bgColor: "primary.500",
        color: "neutral.950",
      },
      { label: "INFORMATIVE TAG", bgColor: "neutral.950", color: "white" },
    ],
    specsInfo: [
      { label: "Size", value: "185/60 R15" },
      { label: "Specs", value: "88H" },
      { label: "Technology", value: "Elect" },
    ],
    ecoLabelInfo: ["C", "B", "B"],
    promo: {
      promoLabel: "PROMO",
      promoLinkLabel: 'Discover the 18" Pirelli products',
      promoLink: "http://www.google.com",
    },
  },
};

export const Horizontal: Story = {
  args: {
    isHorizontal: true,
    children: "Pirelli Cinturato™ All Season SF II",
    logo: {
      src: "https://via.placeholder.com/88x23",
      alt: "Pirelli",
    },
    features: [
      { icon: <SummerIcon boxSize="6" />, label: "Summer" },
      { icon: <WinterIcon boxSize="6" />, label: "Winter" },
      { icon: <AllSeasonIcon boxSize="6" />, label: "All Season" },
      { icon: <UrbanIcon boxSize="6" />, label: "Urban" },
      { icon: <ExtremeIcon boxSize="6" />, label: "Extreme" },
      { icon: <SportIcon boxSize="6" />, label: "Sport" },
      { icon: <PMSFIcon boxSize="6" />, label: "3PMSF" },
    ],
    price: {
      variant: "discount",
      value: "€478,00",
      strokedPrice: "€500,00",
    },
    button: { label: "Booking", url: "http://www.google.com" },
    picture: {
      imageSm: "https://via.placeholder.com/328x393",
      alt: "Pirelli Cinturato™ All Season SF II",
    },
    tagLabels: [
      {
        label: "DESIGNED FOR YOUR CAR",
        bgColor: "primary.500",
        color: "neutral.950",
      },
      { label: "INFORMATIVE TAG", bgColor: "neutral.950", color: "white" },
    ],
    specsInfo: [
      { label: "Size", value: "185/60 R15" },
      { label: "Specs", value: "88H" },
      { label: "Technology", value: "Elect" },
    ],
    ecoLabelInfo: ["C", "B", "B"],
    promo: {
      promoLabel: "PROMO",
      promoLinkLabel: 'Discover the 18" Pirelli products',
      promoLink: "http://www.google.com",
    },
  },
};
