import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { TagFeature } from "../components/TagFeature";
import { WinterIcon } from "../icons/TagIcon";
import { SummerIcon } from "../icons/TagIcon";
import { AllSeasonIcon } from "../icons/TagIcon";

const meta = {
  title: "Atoms/TagFeature",
  component: TagFeature,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
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
} satisfies Meta<typeof TagFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Winter: Story = {
  args: {
    children: "Winter",
    icon: <WinterIcon boxSize="6" />,
  },
};

export const Summer: Story = {
  args: {
    children: "Summer",
    icon: <SummerIcon boxSize="6" />,
  },
};

export const AllSeason: Story = {
  args: {
    children: "AllSeason",
    icon: <AllSeasonIcon boxSize="6" />,
  },
};
