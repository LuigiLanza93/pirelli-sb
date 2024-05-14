import { Text, Container, HStack } from "@chakra-ui/react";

import {
  CloseIcon,
  CircleErrorIcon,
  CircleInfoIcon,
  CircleQuestionIcon,
  AddIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  CaretDownIcon,
  CaretUpIcon,
  CaretLeftIcon,
  CaretRightIcon,
  SearchIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserProfileIcon,
  MenuBurgerIcon,
  CloseSmallIcon,
  DownloadIcon,
  SupportIcon,
  DirectionIcon,
  PlayIcon,
  CartIcon,
  LoadingIcon,
  EditIcon,
  CheckIcon,
} from "../icons/InterfaceIcons";

import {
  WinterIcon,
  SummerIcon,
  AllSeasonIcon,
  SuvIcon,
  CuvIcon,
  AutomobileIcon,
  TouringIcon,
  SportIcon,
  PMSFIcon,
  AllweatherIcon,
  PerformanceIcon,
  AllterrainIcon,
  UrbanIcon,
  VanIcon,
  EVIcon,
  ExtremeIcon,
} from "../icons/TagIcon";

import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
} from "../icons/AlertIcons";

import {
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "../icons/SocialIcon";

import {
  GermanyIcon,
  GreeceIcon,
  SwedenIcon,
  SwissIcon,
  ItalyIcon,
  FranceIcon,
  BelgiumIcon,
  LuxembourgIcon,
  NetherlandIcon,
  RomaniaIcon,
  PolandIcon,
} from "../icons/FlagIcons";

import {
  TargetIcon,
  TyreSizeIcon,
  PlateIcon,
  MSIcon,
  TyresIcon,
  SelectShopIcon,
  FreeDeliveryIcon,
  AvailableDealersIcon,
  EstimatedDeliveryIcon,
  ReccomendedInstallerIcon,
  ShipToMeIcon,
  InstallationFromIcon,
  Plate2Icon,
} from "../icons/CarIcons";

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

import { ConsumoIcon, SoundIcon, GripIcon } from "../icons/EcolabelIcons";

import { ShoppingIcon } from "../icons/SpecialIcon";

export default function Typography() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Text textStyle="body" fontWeight="600" mb="1">
        Interface Icons
      </Text>
      <HStack mb="4">
        <ArrowUpRightIcon boxSize="6" />
        <ArrowDownRightIcon boxSize="6" />
        <ArrowLeftIcon boxSize="6" />
        <ArrowRightIcon boxSize="6" />
        <CaretUpIcon boxSize="6" />
        <CaretDownIcon boxSize="6" />
        <CaretLeftIcon boxSize="6" />
        <CaretRightIcon boxSize="6" />
        <CloseIcon boxSize="6" />
        <CloseSmallIcon boxSize="6" />
        <SearchIcon boxSize="6" />
        <CircleInfoIcon boxSize="6" />
        <CircleErrorIcon boxSize="6" />
        <CircleQuestionIcon boxSize="6" />
        <MailIcon boxSize="6" />
        <PhoneIcon boxSize="6" />
        <MapPinIcon boxSize="6" />
        <UserProfileIcon boxSize="6" />
        <MenuBurgerIcon boxSize="6" />
        <DownloadIcon boxSize="6" />
        <SupportIcon boxSize="6" />
        <DirectionIcon boxSize="6" />
        <CartIcon boxSize="6" />
        <PlayIcon boxSize="6" />
        <AddIcon boxSize="6" />
        <MinusIcon boxSize="6" />
        <LoadingIcon boxSize="6" />
        <EditIcon boxSize="6" />
        <CheckIcon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Tag Icons
      </Text>
      <HStack mb="4">
        <SummerIcon boxSize="6" />
        <WinterIcon boxSize="6" />
        <AllSeasonIcon boxSize="6" />
        <AutomobileIcon boxSize="6" />
        <CuvIcon boxSize="6" />
        <SuvIcon boxSize="6" />
        <TouringIcon boxSize="6" />
        <SportIcon boxSize="6" />
        <PMSFIcon boxSize="6" />
        <AllweatherIcon boxSize="6" />
        <PerformanceIcon boxSize="6" />
        <UrbanIcon boxSize="6" />
        <VanIcon boxSize="6" />
        <EVIcon boxSize="6" />
        <AllterrainIcon boxSize="6" />
        <ExtremeIcon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Social Icons
      </Text>
      <HStack mb="4" py="2" px="2" bg="neutral.900">
        <FacebookIcon boxSize="6" />
        <XIcon boxSize="6" />
        <YoutubeIcon boxSize="6" />
        <LinkedinIcon boxSize="6" />
        <InstagramIcon boxSize="6" />
        <WhatsappIcon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Car Icons
      </Text>
      <HStack mb="4">
        <TargetIcon boxSize="6" />
        <TyreSizeIcon boxSize="6" />
        <PlateIcon boxSize="6" />
        <MSIcon boxSize="6" />
        <TyresIcon boxSize="6" />
        <SelectShopIcon boxSize="6" />
        <FreeDeliveryIcon boxSize="6" />
        <AvailableDealersIcon boxSize="6" />
        <EstimatedDeliveryIcon boxSize="6" />
        <ReccomendedInstallerIcon boxSize="6" />
        <ShipToMeIcon boxSize="6" />
        <InstallationFromIcon boxSize="6" />
        <Plate2Icon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        EcoLabel Icons
      </Text>
      <HStack mb="4">
        <ConsumoIcon boxSize="4" />
        <GripIcon boxSize="4" />
        <SoundIcon boxSize="4" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Alert Icons
      </Text>
      <HStack mb="4">
        <InfoIcon boxSize="6" />
        <SuccessIcon boxSize="6" />
        <ErrorIcon boxSize="6" />
        <WarningIcon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Special Icons
      </Text>
      <HStack mb="4" py="2" px="2" bg="neutral.900">
        <ShoppingIcon boxSize="6" />
      </HStack>

      <Text textStyle="body" fontWeight="600" mb="1">
        Flag Icons
      </Text>
      <HStack mb="4">
        <GermanyIcon boxSize="6" />
        <GreeceIcon boxSize="6" />
        <SwedenIcon boxSize="6" />
        <SwissIcon boxSize="6" />
        <ItalyIcon boxSize="6" />
        <FranceIcon boxSize="6" />
        <BelgiumIcon boxSize="6" />
        <LuxembourgIcon boxSize="6" />
        <NetherlandIcon boxSize="6" />
        <RomaniaIcon boxSize="6" />
        <PolandIcon boxSize="6" />
      </HStack>

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
