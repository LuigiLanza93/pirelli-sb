"use client";
import { useBreakpoint } from "@chakra-ui/react";

import {
  Stepper,
  Step,
  StepIndicator,
  StepNumber,
  StepStatus,
  StepSeparator,
  useSteps,
  Text,
  Flex,
} from "@chakra-ui/react";

import { ArrowLeftIcon } from "../icons/InterfaceIcons";

interface Props {}

export const StepCounter = ({ ...props }: Props): JSX.Element => {
  const labels = {
    back: "Back",
  };

  const steps = [
    { title: "Fitment" },
    { title: "Services" },
    { title: "Dealer Locator" },
    { title: "Tire Size" },
    { title: "Services Confirmation" },
    { title: "Personal info" },
    { title: "Personal info" },
  ];

  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  const breakPoint = useBreakpoint();
  console.log(breakPoint);
  return (
    <Flex
      mb="4"
      {...props}
      direction={["column", "column", "row"]}
      justifyContent={["center", "space-between"]}
    >
      <Flex
        height="52px"
        mb={[2, 0, 0]}
        alignItems="center"
        justify="center"
        pos="relative"
      >
        <ArrowLeftIcon boxSize={6} pos="absolute" left="0" />
        <Text
          fontSize={["16px", "16px"]}
          fontWeight="600"
          px={["6", "8"]}
          display={["inline-block", "inline-block", "none"]}
        >
          {steps[activeStep].title}
        </Text>
        <Text
          fontSize={["16px", "16px"]}
          fontWeight="600"
          px={["6", "8"]}
          display={["none", "none", "inline-block"]}
        >
          {labels.back}
        </Text>
      </Flex>

      <Stepper
        index={activeStep}
        size="sm"
        width="100%"
        maxW={["none", "none", "500px"]}
      >
        {/* minW="435px" */}
        {steps.map((step, index) => (
          <Step key={index} flex={breakPoint === "base" ? "1" : "auto"}>
            <StepIndicator
              w={
                index === activeStep
                  ? breakPoint === "base" || breakPoint === "sm"
                    ? "6"
                    : "auto"
                  : "6"
              }
              px={index === activeStep ? "3" : "0"}
            >
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
              {index === activeStep ? (
                <Text
                  textStyle="xsmall"
                  ml="2"
                  display={["none", "none", "inline-block"]}
                >
                  {step.title}
                </Text>
              ) : null}
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Flex>
  );
};
