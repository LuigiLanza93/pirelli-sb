"use client";
import { Box } from "@chakra-ui/react";
import { ListingBookItem } from "./ListingBookItem";
import { TextLink } from "./TextLink";

interface Props {}

export const ListingBook = ({ ...props }: Props): JSX.Element => {
  const labels = {
    formLabel: "From",
    toLabel: "To",
    tagLabel: "FREE",
  };

  const services = [
    {
      variant: "informative",
      title: "Air conditioning service (pollen filter not incl.)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priceVariant: "standard",
      price: "100.00€",
    },
    {
      variant: "informative",
      title: "Front geometry adjustment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priceVariant: "range",
      fromPrice: "200.00€",
      toPrice: "300.00€",
      isMultiline: true,
    },
    {
      variant: "informative",
      title: "Assembly package",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priceVariant: "starting",
      price: "200.00€",
    },
    {
      variant: "informative",
      title: "Vehicle sanitation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priceVariant: "discount",
      strokedPrice: "200.00€",
      price: "100.00€",
      isMultiline: true,
    },
    {
      variant: "informative",
      title: "Free check-up",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      priceVariant: "free",
      price: "0.00€",
    },

    {
      variant: "actions",
      title: "Internal cleaning",
      priceVariant: "standard",
      price: "100.00€",
    },
    {
      variant: "actions",
      title: "Air conditioning service (pollen filter not incl.)",
      priceVariant: "range",
      fromPrice: "200.00€",
      toPrice: "300.00€",
    },
    {
      variant: "actions",
      title: "Air conditioning service (pollen filter not incl.)",
      priceVariant: "starting",
      price: "200.00€",
    },
    {
      variant: "actions",
      title: "Assembly package",
      priceVariant: "discount",
      strokedPrice: "200.00€",
      price: "100.00€",
    },
    {
      variant: "actions",
      title: "Free check-up",
      priceVariant: "free",
      price: "0.00€",
    },
  ];

  return (
    <Box>
      {services.map((item, index) => (
        <ListingBookItem
          key={index}
          variant={item.variant}
          description={item.description}
          price={item.price}
          priceVariant={item.priceVariant}
          fromLabel={labels.formLabel}
          toLabel={labels.toLabel}
          tagLabel={labels.tagLabel}
          fromPrice={item?.fromPrice}
          toPrice={item?.toPrice}
          strokedPrice={item?.strokedPrice}
          isMultiline={item?.isMultiline}
        >
          {item.title}
        </ListingBookItem>
      ))}

      <TextLink href="/listing" color="neutral.950">
        See all services
      </TextLink>
    </Box>
  );
};
