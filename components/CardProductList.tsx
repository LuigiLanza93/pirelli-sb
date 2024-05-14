"use client";
import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BannerPromo } from "./BannerPromo";
import { TagFeature } from "./TagFeature";
import { TagLabel } from "./TagLabel";
import { Picture } from "./Picture";

import { Price } from "./Price";

import { ConsumoIcon, SoundIcon, GripIcon } from "../icons/EcolabelIcons";

interface Props {
  children: string;
  logo?: { src: string; alt: string };
  features?: [{ icon: React.ReactNode; label: string }];
  price: {
    variant: string;
    value: string;
    tagLabel?: string;
    strokedPrice?: string;
    fromLabel?: string;
    toLabel?: string;
    fromPrice?: string;
    toPrice?: string;
  };
  button: { label: string; url: string };
  picture: { imageSm: string; alt: string };
  tagLabels?: [{ label: string; color: string; bgColor: string }];
  promo: { promoLabel: string; promoLinkLabel: string; promoLink: string };
  specsInfo: [{ label: string; value: string }];
  ecoLabelInfo: [string, string, string];
  isHorizontal?: boolean;
}

const SpecsInfoPartial = ({ specsInfo, ecoLabelInfo }: Props): JSX.Element => {
  return (
    <VStack align="flex-start" spacing={1} mb="4">
      {specsInfo.map((spec, index) => (
        <Flex
          key={index}
          justify="space-between"
          width="100%"
          borderBottom="1px solid"
          borderColor="neutral.200"
          py="2"
        >
          <Text textStyle="small" color="neutral.700">
            {spec.label}:
          </Text>
          <Text textStyle="small" color="neutral.900">
            {spec.value}
          </Text>
        </Flex>
      ))}

      {ecoLabelInfo && (
        <Flex
          justify="space-between"
          width="100%"
          borderBottom="1px solid"
          borderColor="neutral.200"
          py="2"
        >
          <Text as="u" textStyle="small" color="neutral.700" fontWeight="500">
            Ecolabel:
          </Text>
          <HStack spacing={4}>
            <Text textStyle="small" color="neutral.700" fontWeight="500">
              <ConsumoIcon boxSize="4" mr="1" />
              {ecoLabelInfo[0]}
            </Text>
            <Text textStyle="small" color="neutral.700" fontWeight="500">
              <GripIcon boxSize="4" mr="1" />
              {ecoLabelInfo[1]}
            </Text>
            <Text textStyle="small" color="neutral.700" fontWeight="500">
              <SoundIcon boxSize="4" mr="1" />
              {ecoLabelInfo[2]}
            </Text>
          </HStack>
        </Flex>
      )}
    </VStack>
  );
};

const PicturePartial = ({ picture, tagLabels, ...props }: Props) => {
  return (
    <Box
      position="relative"
      my="4"
      borderRadius="md"
      overflow="hidden"
      {...props}
    >
      <Picture alt={picture.alt} imageSm={picture.imageSm} />
      {tagLabels && tagLabels.length > 1 && (
        <VStack
          align="flex-start"
          spacing={1}
          position="absolute"
          left="2"
          top="2"
        >
          {tagLabels.map((tagLabel, index) => (
            <TagLabel
              key={index}
              color={tagLabel.color}
              bgColor={tagLabel.bgColor}
            >
              {tagLabel.label}
            </TagLabel>
          ))}
        </VStack>
      )}
    </Box>
  );
};
const HeadlinePartial = ({ isHorizontal, children }: Props): JSX.Element => {
  return (
    <Text
      textStyle={isHorizontal ? "headline" : "lead"}
      fontWeight="700"
      my="4"
    >
      {children}
    </Text>
  );
};

const FeaturesPartial = ({ features }: Props): JSX.Element => {
  return (
    <HStack
      overflow="scroll"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {features.map((feature, index) => (
        <TagFeature key={index} icon={feature.icon}>
          {feature.label}
        </TagFeature>
      ))}
    </HStack>
  );
};

const PricePartial = ({ price }: Props): JSX.Element => {
  return (
    <Flex justify="flex-end">
      <Price
        variant={price.variant}
        textStyle="lead"
        fontWeight="500"
        fromLabel={price.fromLabel}
        toLabel={price.toLabel}
        fromPrice={price.fromPrice}
        toPrice={price.toPrice}
        strokedPrice={price.strokedPrice}
        tagLabel={price.tagLabel}
        isMultiline={false}
      >
        {price.value}
      </Price>
    </Flex>
  );
};

const ControlsPartial = ({ button }: Props): JSX.Element => {
  return (
    <Button
      mt="3"
      variant="primary"
      size="sm"
      as="a"
      href={button.url}
      target="_blank"
      width="100%"
    >
      {button.label}
    </Button>
  );
};

export const CardProductList = ({
  children,
  promo,
  logo,
  features,
  button,
  price,
  tagLabels,
  picture,
  specsInfo,
  ecoLabelInfo,
  isHorizontal = false,
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      {...props}
      m="4"
      bg="white"
      maxWidth={isHorizontal ? "782px" : "352px"}
    >
      {promo && (
        <BannerPromo
          promoLabel={promo.promoLabel}
          promoLinkLabel={promo.promoLinkLabel}
          promoLink={promo.promoLink}
          isSmall={true}
        />
      )}

      <Box
        px={isHorizontal ? "4" : "3"}
        py={isHorizontal ? "6" : "3"}
        border="1px solid"
        borderColor="neutral.200"
        borderRadius="lg"
      >
        {!isHorizontal ? (
          <Box>
            {logo && <Image src={logo.src} alt={logo.alt} />}

            <HeadlinePartial isHorizontal={isHorizontal}>
              {children}
            </HeadlinePartial>

            {features && features.length > 1 && (
              <FeaturesPartial features={features} />
            )}

            <PicturePartial picture={picture} tagLabels={tagLabels} />

            <SpecsInfoPartial
              specsInfo={specsInfo}
              ecoLabelInfo={ecoLabelInfo}
            />

            <PricePartial price={price} />

            <ControlsPartial button={button} />
          </Box>
        ) : (
          <HStack align="flex-start" spacing={4}>
            <Box>
              <PicturePartial picture={picture} tagLabels={tagLabels} m="0" />
            </Box>
            <Box w="">
              {logo && <Image src={logo.src} alt={logo.alt} />}

              <HeadlinePartial isHorizontal={isHorizontal}>
                {children}
              </HeadlinePartial>

              {/* {features && features.length > 1 && (
                <Box maxWidth="400px">
                  <FeaturesPartial features={features} />
                </Box>
              )} */}

              <SpecsInfoPartial
                specsInfo={specsInfo}
                ecoLabelInfo={ecoLabelInfo}
              />

              <PricePartial price={price} />

              <ControlsPartial button={button} />
            </Box>
          </HStack>
        )}
      </Box>
    </Box>
  );
};
