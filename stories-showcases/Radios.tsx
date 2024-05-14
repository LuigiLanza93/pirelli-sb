import {
  RadioGroup,
  VStack,
  Radio,
  Container,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Box>
        <RadioGroup>
          <VStack align="flex-start" spacing="4">
            <Radio size="lg" value="1">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Radio>
            <Radio size="lg" value="2">
              I have a car with a leasing agreement
            </Radio>
          </VStack>
        </RadioGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <RadioGroup>
          <VStack align="flex-start" spacing="4">
            <Radio size="lg" value="1">
              <Text textStyle="lead" fontWeight="600">
                By clicking on "book" the Retailer will be informed that you
                have booked the appointment and will wait for you on the day and
                time you have chosen
              </Text>
            </Radio>
            <Radio size="lg" value="2">
              <Text textStyle="lead" fontWeight="600">
                I have a car with a leasing agreement
              </Text>
            </Radio>
          </VStack>
        </RadioGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <RadioGroup>
          <VStack align="flex-start" spacing="4">
            <Radio size="md" value="1">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Radio>
            <Radio size="md" value="2">
              I have a car with a leasing agreement
            </Radio>
          </VStack>
        </RadioGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <RadioGroup>
          <Flex justifyContent="space-between" w="100%">
            <Text textStyle="lead" fontWeight="600">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Text>
            <Radio size="lg" ml="4"></Radio>
          </Flex>
        </RadioGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <RadioGroup>
          <Flex justifyContent="space-between" w="100%">
            <Text textStyle="small" fontWeight="600">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Text>
            <Radio size="md" ml="4"></Radio>
          </Flex>
        </RadioGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <RadioGroup>
          <VStack spacing={4}>
            <Flex justifyContent="space-between" w="100%">
              <Text textStyle="small" fontWeight="400">
                By clicking on "book" the Retailer will be informed that you
                have booked the appointment and will wait for you on the day and
                time you have chosen
              </Text>
              <Radio size="md" ml="4" value="1"></Radio>
            </Flex>
            <Flex justifyContent="space-between" w="100%">
              <Text textStyle="small" fontWeight="400">
                I have a car with a leasing agreement
              </Text>
              <Radio size="md" ml="4" value="2"></Radio>
            </Flex>
          </VStack>
        </RadioGroup>
      </Box>
    </Container>
  );
}
