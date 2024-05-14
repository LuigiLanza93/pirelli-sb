"use client";
import {
  Text,
  Box,
  VStack,
  Button,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { TextInformations } from "./TextInformations";
import { TagLabel } from "./TagLabel";
import { BannerPromo } from "./BannerPromo";
import { MapPinIcon } from "../icons/InterfaceIcons";

interface Props {
  children: React.ReactNode;
  address: string;
  openingHours: [{ days: string; hours: string }];
  url: string;
  logos?: [{ src: string; alt: string }];
  isSelected?: boolean;
  promo?: { promoLabel: string; promoLinkLabel: string; promoLink: string };
}

export const CardDealer = ({
  children,
  address,
  openingHours,
  url,
  logos,
  promo,
  isSelected = false,
  ...props
}: Props): JSX.Element => {
  const labels = {
    nearestYou: "Nearest you",
    buttonLabel: "Select",
  };

  return (
    <Box maxWidth="450px" {...props}>
      {promo && (
        <BannerPromo
          promoLabel={promo.promoLabel}
          promoLinkLabel={promo.promoLinkLabel}
          promoLink={promo.promoLink}
          isSmall={true}
        />
      )}

      <Box
        p="3"
        border="1px solid"
        borderColor="neutral.200"
        borderRadius="lg"
        {...(isSelected ? { bgColor: "white" } : { bgColor: "transparent" })}
        {...props}
      >
        <Flex
          justify={logos.length > 1 ? "space-between" : "flex-end"}
          h="28px"
        >
          {logos && logos.length > 1 && (
            <Flex>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  mr="2"
                  borderRadius="md"
                  width="63px"
                  height="28px"
                />
              ))}
            </Flex>
          )}

          <TagLabel color="white" bgColor="neutral.950">
            {labels.nearestYou}
          </TagLabel>
        </Flex>

        <Text textStyle="lead" fontWeight={500} mt="3" mb="1">
          {children}
        </Text>
        <TextInformations
          icon={<MapPinIcon boxSize="16px" opacity="0.6" />}
          value="4.5km"
        >
          {address}
        </TextInformations>

        <Divider my="3" />

        <Flex
          direction={["column", "column", "row"]}
          justify="Space-between"
          align={["flex-start", "flex-start", "flex-end"]}
        >
          <VStack spacing={1} align="flex-start">
            {openingHours.map((openingHour, index) => (
              <TextInformations key="" value={openingHour.days}>
                {openingHour.hours}
              </TextInformations>
            ))}
          </VStack>

          <Button
            mt="3"
            variant="primary"
            size="sm"
            w={["100%", "100%", "auto"]}
            minWidth={["none", "none", "106px"]}
            as="a"
            href={url}
            target="_blank"
          >
            {labels.buttonLabel}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
