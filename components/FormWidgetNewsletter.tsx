"use client";
import { Checkbox, Box, Button } from "@chakra-ui/react";
import { FloatingInput } from "./FloatingInput";

interface Props {}

export const FormWidgetNewsletter = ({ ...props }: Props): JSX.Element => {
  return (
    <Box mt="4" {...props}>
      <Box>
        <FloatingInput
          id="email"
          label="Email"
          type="email"
          required={{ is: true }}
          invalid={{ is: false, text: "Your email is invalid" }}
        />
        <Checkbox size="lg" mt="3">
          Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur.{" "}
        </Checkbox>
      </Box>

      <Button variant="primary" size="md" mt="6" type="submit">
        Subscribe
      </Button>
    </Box>
  );
};
