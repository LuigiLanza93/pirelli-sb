"use client";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FloatingInput } from "../components/FloatingInput";
import { MinusIcon, AddIcon } from "../icons/InterfaceIcons";
interface Props {}

export const FormWidgetVoucherOrPromo = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props}>
      <Accordion allowToggle variant="pill">
        <AccordionItem border="0">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    textStyle="small"
                    fontWeight="700"
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                  >
                    VOUCHER OR PROMO
                  </Box>

                  {isExpanded ? (
                    <MinusIcon fontSize="24px" />
                  ) : (
                    <AddIcon fontSize="24px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textStyle="body" fontWeight="400" color="neutral.800">
                  Choose from the list a promo or write down your voucher
                </Text>

                <Flex mt="4" direction={["column", "row"]}>
                  <Box mb={[2, 0]} mr={[0, 2]} w="100%">
                    <FloatingInput
                      id="select-promo"
                      label="Select Promo"
                      type="text"
                    ></FloatingInput>
                  </Box>

                  <Box w="100%">
                    <FloatingInput
                      id="select-voucher"
                      label="Voucher"
                      type="text"
                    ></FloatingInput>
                  </Box>
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
