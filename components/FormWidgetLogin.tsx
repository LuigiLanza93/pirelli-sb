"use client";
import { Link, Box } from "@chakra-ui/react";
import { FloatingInput } from "./FloatingInput";

interface Props {}

export const FormWidgetLogin = ({ ...props }: Props): JSX.Element => {
  return (
    <Box mt="6">
      <Box mb="2">
        <FloatingInput
          id="email"
          label="Email"
          type="email"
          required={{ is: true }}
          invalid={{ is: false, text: "Your email is invalid" }}
        />
      </Box>
      <Box mb="2">
        <FloatingInput
          id="password"
          label="Password"
          type="password"
          required={{ is: true }}
          invalid={{ is: false, text: "Your password is invalid" }}
        />
      </Box>
      <Link
        href="/forgot-password"
        fontSize="12px"
        fontWeight="400"
        color="neutral.950"
        textDecoration="underline"
      >
        Forgot Password?
      </Link>
    </Box>
  );
};
