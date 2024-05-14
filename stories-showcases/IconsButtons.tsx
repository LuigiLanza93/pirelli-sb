import { Stack, IconButton, Container } from "@chakra-ui/react";
import { CloseIcon } from "../icons/InterfaceIcons";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Stack spacing={4} direction="row" align="center" mb="4">
        <IconButton
          variant="primary"
          size="sm"
          aria-label="Close"
          isDisabled
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="primary"
          size="sm"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="primary"
          size="md"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="primary"
          size="lg"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="primary"
          size="xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="primary"
          size="2xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />
      </Stack>

      <Stack spacing={4} direction="row" align="center" mb="4">
        <IconButton
          variant="secondary"
          size="sm"
          aria-label="Close"
          isDisabled
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="secondary"
          size="sm"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="secondary"
          size="md"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="secondary"
          size="lg"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="secondary"
          size="xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="secondary"
          size="2xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />
      </Stack>

      <Stack spacing={4} direction="row" align="center" mb="4">
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Close"
          isDisabled
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="ghost"
          size="md"
          aria-label="Close"
          icon={<CloseIcon boxSize="5" />}
        />

        <IconButton
          variant="ghost"
          size="lg"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="ghost"
          size="xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />

        <IconButton
          variant="ghost"
          size="2xl"
          aria-label="Close"
          icon={<CloseIcon boxSize="6" />}
        />
      </Stack>
    </Container>
  );
}
