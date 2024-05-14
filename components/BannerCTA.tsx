"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { TextTitleDescription } from "./TextTitleDescription";

interface Props {
  alt?: string;
  imageLg?: string;
  imageMd?: string;
  imageSm: string;
}

export const BannerCTA = ({ ...props }: Props): JSX.Element => {
  return (
    <Box
      {...props}
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      p={["3", "3", "4"]}
      bgSize="cover"
      bgImage={[
        `url(${props.imageSm})`,
        `url(${props.imageMd})`,
        `url(${props.imageLg})`,
      ]}
    >
      <Flex
        direction={["column", "row", "row"]}
        justifyContent="space-between"
        alignItems={["flex-start", "center"]}
        color="white"
        width="100%"
      >
        <TextTitleDescription
          asType="p"
          title="Log in or register later"
          size="subheadline"
        >
          Lorem ipsum dolor sit amet consectetur. Sollicitudin vitae egestas
          dictum.
        </TextTitleDescription>
        <Button
          as="a"
          href="/#"
          variant="primary"
          mt={["4", "0", "0", "0"]}
          size={["sm", "md"]}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
};
