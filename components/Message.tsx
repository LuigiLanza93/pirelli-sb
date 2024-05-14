"use client";
import { Text, Box, Button } from "@chakra-ui/react";
import ReactDOM from "react-dom";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  isBig?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
}

export const Message = ({
  icon,
  title,
  description = "Lorem ipsum dolor sit amet consectetur.",
  isBig = false,
  buttonLabel,
  buttonUrl,
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      maxWidth={isBig ? "760px" : "387px"}
      margin="0 auto"
      textAlign="center"
      {...props}
    >
      {icon}

      <Text
        textStyle={isBig ? "title" : "subheadline"}
        fontWeight="600"
        color="neutral.950"
        mb="1"
        mt="2"
      >
        {title}
      </Text>
      <Text textStyle="body" fontWeight="400" color="neutral.800">
        {description}
      </Text>

      {buttonLabel && buttonUrl && (
        <Button as="a" href={buttonUrl} variant="primary" mt="4">
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};
