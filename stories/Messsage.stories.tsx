import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "../app/providers";
import { Box } from "@chakra-ui/react";
import { Message } from "../components/Message";
import { PersonalInfoIcon } from "../icons/OverviewIcons";
const meta = {
  title: "Molecules/Message",
  component: Message,
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
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "You have no booking yet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae quis aliquet posuere sed.",
    icon: <PersonalInfoIcon boxSize="60px" color="primary.500" />,
  },
};

export const Big: Story = {
  args: {
    isBig: true,
    title: "Oops! We can't find what you're looking for.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae quis aliquet posuere sed.",
    icon: <PersonalInfoIcon boxSize="120px" color="primary.500" />,
    buttonLabel: "Go back to homepage",
    buttonUrl: "/",
  },
};
