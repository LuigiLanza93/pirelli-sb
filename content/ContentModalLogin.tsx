import { Box } from "@chakra-ui/react";
import { TextTitleDescription } from "../components/TextTitleDescription";
import { FormWidgetLogin } from "../components/FormWidgetLogin";

export default function ContentModalLogin() {
  return (
    <Box>
      <TextTitleDescription
        title="Hi, are you already a registered user?"
        size="headline"
      >
        Lorem ipsum dolor sit amet consectetur.
      </TextTitleDescription>

      <FormWidgetLogin />
    </Box>
  );
}
