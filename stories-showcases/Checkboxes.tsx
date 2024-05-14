import {
  CheckboxGroup,
  VStack,
  Checkbox,
  Container,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Buttons() {
  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Box>
        <CheckboxGroup>
          <VStack align="flex-start" spacing="4">
            <Checkbox size="lg">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <CheckboxGroup>
          <VStack align="flex-start" spacing="4">
            <Checkbox size="lg">
              <Text textStyle="lead" fontWeight="600">
                By clicking on "book" the Retailer will be informed that you
                have booked the appointment and will wait for you on the day and
                time you have chosen
              </Text>
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <CheckboxGroup>
          <VStack align="flex-start" spacing="4">
            <Checkbox size="md">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <CheckboxGroup>
          <Flex justifyContent="space-between" w="100%">
            <Text textStyle="lead" fontWeight="600">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Text>
            <Checkbox size="lg" ml="4"></Checkbox>
          </Flex>
        </CheckboxGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <CheckboxGroup>
          <Flex justifyContent="space-between" w="100%">
            <Text textStyle="small" fontWeight="600">
              By clicking on "book" the Retailer will be informed that you have
              booked the appointment and will wait for you on the day and time
              you have chosen
            </Text>
            <Checkbox size="md" ml="4"></Checkbox>
          </Flex>
        </CheckboxGroup>
      </Box>

      <Box my="8">
        <hr />
      </Box>

      <Box mt="8">
        <CheckboxGroup>
          <VStack spacing={4}>
            <Flex justifyContent="space-between" w="100%">
              <Text textStyle="small" fontWeight="400">
                By clicking on "book" the Retailer will be informed that you
                have booked the appointment and will wait for you on the day and
                time you have chosen
              </Text>
              <Checkbox size="md" ml="4" value="1"></Checkbox>
            </Flex>
            <Flex justifyContent="space-between" w="100%">
              <Text textStyle="small" fontWeight="400">
                I have a car with a leasing agreement
              </Text>
              <Checkbox size="md" ml="4" value="2"></Checkbox>
            </Flex>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Container>
  );
}
