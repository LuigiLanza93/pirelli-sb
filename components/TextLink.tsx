"use client";
import { Link, Box } from "@chakra-ui/react";

interface Props {
  alignment?: string;
  children: string;
  href: string;
  size?: string;
  color?: string;
  isExternal?: boolean;
}

export const TextLink = ({
  alignment = "center",
  size = "body",
  color = "neutral.700",
  isExternal = false,
  ...props
}: Props): JSX.Element => {
  return (
    <Box {...props} m="4" textAlign={alignment}>
      <Link
        href={props.href || "#"}
        isExternal={isExternal}
        textStyle={size}
        fontWeight="700"
        color={color}
        textDecoration="underline"
      >
        {props.children}
      </Link>
    </Box>
  );
};
