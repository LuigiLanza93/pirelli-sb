import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { TextTitle } from "../components/TextTitle";
import { TextTitleDescription } from "../components/TextTitleDescription";

import {
  SelectSizeIcon,
  SelectTyreIcon,
  DealerLocatorIcon,
  ServicesIcon,
  DateTimeIcon,
  PersonalInfoIcon,
} from "../icons/OverviewIcons";

export default function ContentOverview() {
  const overview = [
    {
      icon: <SelectSizeIcon boxSize="45" />,
      title: "Fitment",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: <SelectTyreIcon boxSize="45" />,
      title: "Select Tyre",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: <DealerLocatorIcon boxSize="45" />,
      title: "Dealer Locator",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: <ServicesIcon boxSize="45" />,
      title: "Services",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: <DateTimeIcon boxSize="45" />,
      title: "Date and Time",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: <PersonalInfoIcon boxSize="45" />,
      title: "Personal Info",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  return (
    <Box maxWidth="450px" margin="0 auto">
      <TextTitle>Overview</TextTitle>
      <TextTitleDescription title="Quick and easy booking" size="headline">
        Lorem ipsum dolor sit amet consectetur. Blandit gravida adipiscing felis
        diam varius vivamus ullamcorper habitasse.
      </TextTitleDescription>

      <SimpleGrid columns={2} spacing={["2", "2", "3"]} mt="6" mx="auto">
        {overview.map((item, index) => (
          <>
            <Box
              textAlign="center"
              borderRadius="md"
              border="1px solid"
              borderColor="neutral.200"
              px="4"
              py="5"
            >
              {item.icon}
              <Text
                textStyle="body"
                fontWeight="500"
                color="neutral.950"
                mb="1"
                mt="2"
              >
                {index + 1}. {item.title}
              </Text>
              <Text textStyle="small" fontWeight="400" color="neutral.800">
                {item.description}
              </Text>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
}
