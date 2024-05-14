import { Box } from "@chakra-ui/react";
import { TextTitleDescription } from "../components/TextTitleDescription";
import { TextTitle } from "../components/TextTitle";
import { FormWidgetVoucherOrPromo } from "../components/FormWidgetVoucherOrPromo";
import { ListingBook } from "../components/ListingBook";

export default function ContentServices() {
  return (
    <Box>
      <TextTitle>Services</TextTitle>
      <TextTitleDescription title="Select Services" size="headline">
        Lorem ipsum dolor sit amet consectetur. Blandit gravida adipiscing felis
        diam varius vivamus ullamcorper habitasse.{" "}
      </TextTitleDescription>
      <FormWidgetVoucherOrPromo mt="4" mb="6"></FormWidgetVoucherOrPromo>
      <ListingBook></ListingBook>
    </Box>
  );
}
