import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { BannerCTA } from "../components/BannerCTA";

const meta = {
  title: "Organisms/BannerCTA",
  component: BannerCTA,
  parameters: {
    layout: "centered",
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
} satisfies Meta<typeof BannerCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alt: "Alternative Text for Image",
    imageLg: "https://via.placeholder.com/954x90",
    imageMd: "https://via.placeholder.com/720x90",
    imageSm: "https://via.placeholder.com/335x160",
  },
};
