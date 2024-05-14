"use client";
import { Text, Flex, Box } from "@chakra-ui/react";

import {
  InfoIcon,
  ErrorIcon,
  WarningIcon,
  SuccessIcon,
} from "../icons/AlertIcons";

interface Props {
  alertType: string;
  title?: string;
  description: string;
}

export const AlertMessage = ({
  alertType = "info",
  title,
  description = "Lorem ipsum dolor sit amet consectetur.",
  ...props
}: Props): JSX.Element => {
  let bgColor: string = "";
  let icon: any;
  const getStatus = () => {
    switch (alertType) {
      case "info":
        bgColor = "info.100";
        icon = <InfoIcon boxSize={[5, 5, 6]} mr={[2.5, 3, 3]} />;
        return;
      case "success":
        bgColor = "success.100";
        icon = <SuccessIcon boxSize={[5, 5, 6]} mr={[2.5, 3, 3]} />;
        return;
      case "warning":
        bgColor = "warning.100";
        icon = <WarningIcon boxSize={[5, 5, 6]} mr={[2.5, 3, 3]} />;
        return;
      case "error":
        bgColor = "error.100";
        icon = <ErrorIcon boxSize={[5, 5, 6]} mr={[2.5, 3, 3]} />;
        return;
      default:
        return null;
    }
  };

  getStatus();

  return (
    <Box
      borderRadius="lg"
      bg={bgColor}
      px={[2, 3, 3]}
      py="2"
      textAlign="left"
      {...props}
    >
      <Flex direction="row" align="center">
        {icon}
        <Flex direction="column" alignItems="flex-start">
          {title && (
            <Text textStyle="body" fontWeight="500" mb="1">
              {title}
            </Text>
          )}
          <Text textStyle="small">{description}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
