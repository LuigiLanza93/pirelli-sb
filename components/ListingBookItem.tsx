"use client";
import { Text, Box, VStack, HStack, Button, Flex } from "@chakra-ui/react";
import { Price } from "./Price";

interface Props {
  children: string;
  priceVariant: string;
  variant: string;
  description?: string;
  price?: string;
  fromLabel?: string;
  fromPrice?: string;
  toLabel?: string;
  toPrice?: string;
  strokedPrice?: string;
  tagLabel?: string;
  isMultiline?: boolean;
}

export const ListingBookItem = ({
  children,
  description,
  variant,
  priceVariant,
  price,
  fromLabel,
  fromPrice,
  toLabel,
  toPrice,
  strokedPrice,
  tagLabel,
  isMultiline,
  ...props
}: Props): JSX.Element => {
  const listingTitleComponent = (
    <Text textStyle="lead" fontWeight="500">
      {children}
    </Text>
  );

  const listingDescriptionComponent = (
    <Text textStyle="small" color="neutral.700" mt="1">
      {description}
    </Text>
  );

  const priceComponent = (
    <Price
      variant={priceVariant}
      textStyle="body"
      fontWeight="500"
      fromLabel={fromLabel}
      toLabel={toLabel}
      fromPrice={fromPrice}
      toPrice={toPrice}
      strokedPrice={strokedPrice}
      tagLabel={tagLabel}
      isMultiline={isMultiline}
    >
      {price}
    </Price>
  );

  const buttonsGroupComponent = (
    <>
      <Button variant="secondary" size="md" flexGrow={[1, "unset"]}>
        Info
      </Button>
      <Button variant="primary" size="md" minW="84px" flexGrow={[1, "unset"]}>
        Book
      </Button>
    </>
  );

  return (
    <Box
      {...props}
      variant={variant || "informative"}
      borderBottom="1px solid"
      borderColor="neutral.200"
      pb="3"
      mb="4"
    >
      {variant === "informative" && (
        <HStack spacing="2" justify="space-between">
          <Box>
            {listingTitleComponent}
            {listingDescriptionComponent}
          </Box>
          {priceComponent}
        </HStack>
      )}

      {variant === "actions" && (
        <Flex justify="space-between" direction={["column", "row"]}>
          <VStack spacing={1} align="flex-start">
            {listingTitleComponent}
            {priceComponent}
          </VStack>
          <HStack spacing={2} pt={["4"]} pb={["2"]}>
            {buttonsGroupComponent}
          </HStack>
        </Flex>
      )}
    </Box>
  );
};
