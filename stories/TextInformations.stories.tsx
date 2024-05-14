import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box, Link } from "@chakra-ui/react";
import { MapPin } from "../icons/InterfaceIcons";
import { TextInformations } from "../components/TextInformations";

const meta = {
  title: "Atoms/TextInformations",
  component: TextInformations,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    icon: {
      control: { type: "object" },
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
} satisfies Meta<typeof TextInformations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alignment: "left",
    icon: <MapPin boxSize="4" />,
    value: "Lorem Ipsum",
    children: "Lorem Ipsum",
  },
};

export const Centered: Story = {
  args: {
    alignment: "center",
    icon: <MapPin boxSize="4" />,
    value: "Lorem Ipsum",
    children: "Lorem Ipsum",
  },
};

export const WithLink: Story = {
  args: {
    alignment: "center",
    icon: <MapPin boxSize="4" />,
    value: "Lorem Ipsum",
    children: (
      <Link href="www.pirelli.com" textDecoration={"underline"}>
        Lorem Ipsum
      </Link>
    ),
  },
};

export const NoChild: Story = {
  args: {
    icon: <MapPin />,

    alignment: "center",
    value: "Lorem Ipsum",
  },
};
