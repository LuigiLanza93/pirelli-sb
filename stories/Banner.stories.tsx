import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
const meta = {
  title: "Organisms/Banner",
  component: Banner,
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
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alt: "Alternative Text for Image",
    imageLg: "https://via.placeholder.com/954x408",
    imageMd: "https://via.placeholder.com/720x308",
    imageSm: "https://via.placeholder.com/335x418",
  },
};
