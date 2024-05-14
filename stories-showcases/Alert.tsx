import { VStack, Container } from "@chakra-ui/react";
import { AlertMessage } from "../components/AlertMessage";

export default function Typography() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <VStack spacing={4} align="stretch">
        <AlertMessage
          alertType="info"
          title="Select your services"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="success"
          title="Select your services"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="warning"
          title="Select your services"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="error"
          title="Select your services"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="info"
          description="Lorem ipsum dolor sit amet consectetur. "
        />
        <AlertMessage
          alertType="success"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="warning"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <AlertMessage
          alertType="error"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </VStack>
    </Container>
  );
}
