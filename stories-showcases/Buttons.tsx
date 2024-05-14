import { Stack, Button, IconButton, Container } from "@chakra-ui/react";
import { CloseIcon } from "../icons/InterfaceIcons";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button variant="primary" size="sm" isDisabled>
          Text
        </Button>
        <Button variant="primary" size="sm">
          Text
        </Button>
        <Button variant="primary" size="md">
          Text
        </Button>
        <Button variant="primary" size="lg">
          Text
        </Button>
        <Button variant="primary" size="xl">
          Text
        </Button>
        <Button variant="primary" size="2xl">
          Text
        </Button>
      </Stack>

      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button variant="secondary" size="sm" isDisabled>
          Text
        </Button>
        <Button variant="secondary" size="sm">
          Text
        </Button>
        <Button variant="secondary" size="md">
          Text
        </Button>
        <Button variant="secondary" size="lg">
          Text
        </Button>
        <Button variant="secondary" size="xl">
          Text
        </Button>
        <Button variant="secondary" size="2xl">
          Text
        </Button>
      </Stack>

      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button variant="ghost" size="sm" isDisabled>
          Text
        </Button>
        <Button variant="ghost" size="sm">
          Text
        </Button>
        <Button variant="ghost" size="md">
          Text
        </Button>
        <Button variant="ghost" size="lg">
          Text
        </Button>
        <Button variant="ghost" size="xl">
          Text
        </Button>
        <Button variant="ghost" size="2xl">
          Text
        </Button>
      </Stack>

      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button
          variant="primary"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          rightIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          isDisabled
        >
          Text
        </Button>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="primary"
          size="md"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="primary"
          size="lg"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="primary"
          size="xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="primary"
          size="2xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
      </Stack>
      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          rightIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          isDisabled
        >
          Text
        </Button>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="secondary"
          size="md"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="secondary"
          size="xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="secondary"
          size="2xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
      </Stack>
      <Stack spacing={4} direction="row" align="center" mb="4">
        <Button
          variant="ghost"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          rightIcon={<CloseIcon boxSize="5" sx={{ opacity: 0.2 }} />}
          isDisabled
        >
          Text
        </Button>
        <Button
          variant="ghost"
          size="sm"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="ghost"
          size="md"
          leftIcon={<CloseIcon boxSize="5" />}
          rightIcon={<CloseIcon boxSize="5" />}
        >
          Text
        </Button>
        <Button
          variant="ghost"
          size="lg"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="ghost"
          size="xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
        <Button
          variant="ghost"
          size="2xl"
          leftIcon={<CloseIcon boxSize="6" />}
          rightIcon={<CloseIcon boxSize="6" />}
        >
          Text
        </Button>
      </Stack>
    </Container>
  );
}
