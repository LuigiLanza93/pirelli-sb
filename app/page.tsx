import {
  Container,
  Text,
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import {
  SwedenIcon,
  GermanyIcon,
  GreeceIcon,
  BelgiumIcon,
  ItalyIcon,
  SwissIcon,
  PolandIcon,
  FranceIcon,
  RomaniaIcon,
  LuxembourgIcon,
  NetherlandIcon,
} from "../icons/FlagIcons";
import { CaretDownIcon } from "../icons/InterfaceIcons";

import {
  SelectSizeIcon,
  SelectTyreIcon,
  DealerLocatorIcon,
  ServicesIcon,
  DateTimeIcon,
  PersonalInfoIcon,
  CartSuccessIcon,
  ConfirmIcon,
} from "../icons/OverviewIcons";

import { StepCounter } from "@/components/StepCounter";

export default function Home() {
  return (
    <Container maxW="container.xl" pb="40">
      <PersonalInfoIcon boxSize="100" color="primary.500" />

      <Text textStyle="body" fontWeight="600" mb="1">
        Overview Icons
      </Text>
      <HStack mb="4">
        <SelectSizeIcon boxSize={66} color="primary.500" />
        <SelectTyreIcon boxSize={66} color="primary.500" />
        <DealerLocatorIcon boxSize={66} color="primary.500" />
        <ServicesIcon boxSize={66} color="primary.500" />
        <DateTimeIcon boxSize={66} color="primary.500" />
        <PersonalInfoIcon boxSize={66} color="primary.500" />
        <CartSuccessIcon boxSize={66} color="success.700" />
        <ConfirmIcon boxSize={66} color="success.700" />
      </HStack>
    </Container>
  );
}
