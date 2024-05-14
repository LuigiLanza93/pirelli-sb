import { Box, Button } from "@chakra-ui/react";
import { TextTitleDescription } from "../components/TextTitleDescription";
import { FormWidgetNewsletter } from "../components/FormWidgetNewsletter";
import { Banner } from "../components/Banner";

export default function ContentModalLogin() {
  return (
    <Box>
      <TextTitleDescription title="Thanks for your order!" size="hero">
        Lorem ipsum dolor sit amet consectetur. Sapien egestas vel sit massa
        eget molestie. Tempor nec ultrices ut volutpat.
      </TextTitleDescription>

      <Box mt="6">
        <Button
          variant="secondary"
          size="md"
          as="a"
          href="#"
          display={["inline-flex", "inline-flex", "none"]}
          mr="2"
        >
          See order summary
        </Button>
        <Button variant="primary" size="md" as="a" href="#">
          Go to homepage
        </Button>
      </Box>

      <TextTitleDescription
        title="Subscribe to our newsletter"
        size="headline"
        mt="8"
      >
        Lorem ipsum dolor sit amet consectetur.
      </TextTitleDescription>

      <FormWidgetNewsletter maxW="580px" />
      <Banner
        mt="8"
        alt="Alternative Text for Image"
        imageLg="https://via.placeholder.com/954x408"
        imageMd="https://via.placeholder.com/720x308"
        imageSm="https://via.placeholder.com/335x418"
      ></Banner>
    </Box>
  );
}
