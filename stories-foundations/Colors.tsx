import { Text, Container, HStack, Box, VStack } from "@chakra-ui/react";
import colors from "../theme/colors";

export default function Colors() {
  const swatches = colors.colors;

  return (
    <Container maxW="container.lg" textAlign="left" pb="40">
      <Text textStyle="body" fontWeight="600" mb="1">
        Primary
      </Text>
      <HStack mb="4">
        <VStack spacing="1px">
          <Text textStyle="xsmall">50</Text>
          <Box width="70px" height="70px" bgColor="primary.50"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">100</Text>
          <Box width="70px" height="70px" bgColor="primary.100"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">200</Text>
          <Box width="70px" height="70px" bgColor="primary.200"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">300</Text>
          <Box width="70px" height="70px" bgColor="primary.300"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">400</Text>
          <Box width="70px" height="70px" bgColor="primary.400"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">500</Text>
          <Box width="70px" height="70px" bgColor="primary.500"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">600</Text>
          <Box width="70px" height="70px" bgColor="primary.600"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">700</Text>
          <Box width="70px" height="70px" bgColor="primary.700"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">800</Text>
          <Box width="70px" height="70px" bgColor="primary.800"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">900</Text>
          <Box width="70px" height="70px" bgColor="primary.900"></Box>
        </VStack>

        <VStack spacing="1px">
          <Text textStyle="xsmall">950</Text>
          <Box width="70px" height="70px" bgColor="primary.950"></Box>
        </VStack>
      </HStack>

      {Object.keys(swatches).map((key) => (
        <>
          <Text
            textStyle="body"
            fontWeight="600"
            mb="1"
            textTransform="capitalize"
          >
            {key}
          </Text>
          <HStack mb="4">
            {Object.keys(swatches[key]).map((swatchKey) => (
              <>
                <VStack spacing="1px">
                  <Text textStyle="xsmall">{swatchKey}</Text>
                  <Box
                    key={swatchKey}
                    width="70px"
                    height="70px"
                    bgColor={swatches[key][swatchKey]}
                  ></Box>
                </VStack>
              </>
            ))}
          </HStack>
        </>
      ))}
    </Container>
  );
}
