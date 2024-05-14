"use client";
import { Text, Box, VStack, Button, Image } from "@chakra-ui/react";
import { MailIcon, PhoneIcon } from "../icons/InterfaceIcons";

interface Props {
  children: React.ReactNode;
  phone?: string;
  mail?: string;
  url: string;
  image?: string;
}

export const CardLeasing = ({
  children,
  phone,
  mail,
  image,
  url,
  ...props
}: Props): JSX.Element => {
  const labels = {
    buttonLabel: "Contact your company",
  };

  return (
    <Box
      textAlign="center"
      px="3"
      py="4"
      border="1px solid"
      borderColor="neutral.200"
      borderRadius="lg"
      maxWidth="420px"
      {...props}
    >
      {image && <Image src={image} alt={children} margin="0 auto" />}
      <Text textStyle="lead" fontWeight="500" mb="2" mt="3">
        {children}
      </Text>
      <VStack spacing="2" mb="3">
        {phone && (
          <Text textStyle="small" fontWeight="400">
            <PhoneIcon boxSize="4" mr="2" />
            {phone}
          </Text>
        )}
        {mail && (
          <Text textStyle="small" fontWeight="400">
            <MailIcon boxSize="4" mr="2" />
            {mail}
          </Text>
        )}
      </VStack>
      <Button
        variant="primary"
        size="sm"
        w="100%"
        as="a"
        href={url}
        target="_blank"
      >
        {labels.buttonLabel}
      </Button>
    </Box>
  );
};
