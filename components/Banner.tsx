"use client";
import { Box, Button } from "@chakra-ui/react";
import { Picture } from "./Picture";
import { TextTitleDescription } from "./TextTitleDescription";
import { Overlay } from "./Overlay";

interface Props {
  alt?: string;
  imageLg?: string;
  imageMd?: string;
  imageSm: string;
}

export const Banner = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props} position="relative" borderRadius="lg" overflow="hidden">
      <Picture
        imageSm={props.imageSm}
        imageMd={props.imageMd}
        imageLg={props.imageLg}
        alt="Alternative Text for Image"
      />

      <Overlay bgColor="blackAlpha.500" />

      <Box
        color="white"
        position="absolute"
        zIndex="docked"
        left="0"
        top="0"
        p={["5", "5", "6", "8"]}
        maxW="580px"
        width="100%"
      >
        <TextTitleDescription
          title="It's time to change tires"
          size="title"
          asType="p"
        >
          Immediately for you up to €100 in benefits on 18-inch or larger summer
          or 4-season tires for your car. Promotion valid until May 31st .
        </TextTitleDescription>
        <Button as="a" href="/#" variant="primary" mt="8" size={["sm", "md"]}>
          Discover More
        </Button>
      </Box>
    </Box>
  );
};
