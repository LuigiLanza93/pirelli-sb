import { Container, Divider } from "@chakra-ui/react";
import { Price } from "../components/Price";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Price variant="standard" textStyle="body" fontWeight="900">
        100€
      </Price>

      <Divider m="8" />

      <Price variant="free" textStyle="body" fontWeight="500" tagLabel="FREE">
        0,00€
      </Price>

      <Divider m="8" />

      <Price
        variant="discount"
        isMultiline={false}
        textStyle="body"
        fontWeight="700"
        strokedPrice="100.0€"
      >
        99,0€
      </Price>

      <Divider m="8" />

      <Price
        variant="discount"
        isMultiline={true}
        textStyle="body"
        fontWeight="700"
        strokedPrice="100.0€"
      >
        99,0€
      </Price>

      <Divider m="8" />

      <Price
        variant="range"
        textStyle="body"
        fontWeight="700"
        fromLabel="From"
        toLabel="To"
        fromPrice="100.0€"
        toPrice="200.0€"
      />

      <Divider m="8" />

      <Price
        variant="range"
        isMultiline={true}
        textStyle="body"
        fontWeight="700"
        fromLabel="From"
        toLabel="To"
        fromPrice="100.0€"
        toPrice="200.0€"
      />

      <Divider m="8" />

      <Price
        variant="starting"
        textStyle="body"
        fontWeight="700"
        fromLabel="From"
      >
        100€
      </Price>
    </Container>
  );
}
