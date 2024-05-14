import { Stack, Button, IconButton, Container } from "@chakra-ui/react";
import { TagLabel } from "../components/TagLabel";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Stack direction="row" align="center" mb="4">
        <TagLabel
          bg="success.800"
          textStyle="xsmall"
          color="white"
          fontWeight="600"
        >
          FREE
        </TagLabel>

        <TagLabel
          bg="neutral.900"
          textStyle="xsmall"
          color="white"
          fontWeight="600"
        >
          PRODUCT TAG
        </TagLabel>

        <TagLabel
          bg="linear-gradient(149.25deg, #204FAA 16.11%, #156FED 98.52%);"
          textStyle="xsmall"
          color="white"
          fontWeight="600"
        >
          DESIGNED FOR YOUR CAR
        </TagLabel>
      </Stack>
    </Container>
  );
}
