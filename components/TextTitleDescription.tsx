"use client";
import { Text, Box } from "@chakra-ui/react";

interface Props {
  asType?: string;
  title?: string;
  size?: string;
  weight?: string;
  alignment?: string;
  children: React.ReactNode;
  props?: any;
}

export const TextTitleDescription = ({
  asType = "h2",
  size = "hero",
  weight = "600",
  alignment = "left",
  ...props
}: Props): JSX.Element => {
  // if size is subheadline, lead or body, set margin to 1, else 2
  const margin =
    size === "subheadline" || size === "lead" || size == "body" ? "1" : "2";

  return (
    <Box textAlign={alignment} {...props}>
      {props.title && (
        <Text as={asType} textStyle={size} fontWeight={weight} mb={margin}>
          {props.title}
        </Text>
      )}
      <Text textStyle="body" fontWeight="400" color="neutral.900">
        {props.children}
      </Text>
    </Box>
  );
};
