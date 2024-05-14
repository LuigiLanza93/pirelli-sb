import { Container, Tooltip, Box } from "@chakra-ui/react";
import { CircleInfoIcon } from "../icons/InterfaceIcons";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40" pt="40">
      <Tooltip
        hasArrow
        label="A tooltip content for a close icon"
        placement="top-start"
        borderRadius="base"
        color="white"
        bg="neutral.950"
        fontSize={["0.75rem", "0.75rem", "0.75rem"]}
        fontWeight="500"
        maxWidth="260px"
        px="3"
        py="2"
        aria-label="A tooltip"
      >
        <Box as="span" px="2">
          <CircleInfoIcon boxSize="4" />
        </Box>
      </Tooltip>
      <Tooltip
        hasArrow
        label="Lorem ipsum dolor sit amet consectetur."
        placement="top-start"
        borderRadius="base"
        color="white"
        bg="neutral.950"
        fontSize={["0.75rem", "0.75rem", "0.75rem"]}
        fontWeight="500"
        maxWidth="260px"
        px="3"
        py="2"
        aria-label="A tooltip"
      >
        <Box as="span" px="2">
          <CircleInfoIcon boxSize="4" />
        </Box>
      </Tooltip>
      <Tooltip
        hasArrow
        placement="top-start"
        label="Lorem ipsum dolor sit amet consectetur. Aliquet et diam purus sem mollis ultricies fermentum. "
        borderRadius="base"
        color="white"
        bg="neutral.950"
        fontSize={["0.75rem", "0.75rem", "0.75rem"]}
        fontWeight="500"
        maxWidth="260px"
        px="3"
        py="2"
        aria-label="A tooltip"
      >
        <Box as="span" px="2">
          <CircleInfoIcon boxSize="4" />
        </Box>
      </Tooltip>
      <Tooltip
        hasArrow
        placement="top-start"
        label="Lorem ipsum dolor sit amet consectetur. Aliquet et diam purus sem mollis ultricies fermentum. Lorem ipsum dolor sit amet consectetur. Aliquet et diam purus sem mollis ultricies fermentum. "
        borderRadius="base"
        color="white"
        bg="neutral.950"
        fontSize={["0.75rem", "0.75rem", "0.75rem"]}
        fontWeight="500"
        maxWidth="260px"
        px="3"
        py="2"
        aria-label="A tooltip"
      >
        <Box as="span" px="2">
          <CircleInfoIcon boxSize="4" />
        </Box>
      </Tooltip>
    </Container>
  );
}
