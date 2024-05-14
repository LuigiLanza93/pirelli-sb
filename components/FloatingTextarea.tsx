"use client";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Box,
  Text,
  Textarea,
} from "@chakra-ui/react";

import {
  InfoIcon,
  ErrorIcon,
  WarningIcon,
  SuccessIcon,
} from "../icons/AlertIcons";

interface Props {
  id: string;
  label: string;
  value: string;
  required: { is: boolean };
  disabled: { is: boolean };
  readonly: { is: boolean };
  hint: { is: boolean; text: string; icon: JSX.Element };
  invalid: { is: boolean; text: string };
  success: { is: boolean; text: string };
  info: { is: boolean; text: string };
  warning: { is: boolean; text: string };
}

export const FloatingTextarea = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props} mb="2">
      <FormControl
        variant="floating"
        isRequired={props.required?.is}
        isInvalid={props.invalid?.is || false}
        isDisabled={props.disabled?.is || false}
        isReadOnly={props.readonly?.is || false}
      >
        <Textarea
          placeholder=""
          fontSize="1rem"
          fontWeight="500"
          size="sm"
          resize="vertical"
          bg="white"
          value={props.value}
          data-status={
            props.success?.is === true
              ? "success"
              : props.warning?.is === true
                ? "warning"
                : "default"
          }
        />
        <FormLabel fontSize="1rem" fontWeight="400">
          {props.label || "Label Placeholder"}
        </FormLabel>

        {props.hint?.is && (
          <FormHelperText
            fontSize="0.75rem"
            fontWeight="400"
            mt="2"
            display="flex"
            alignItems="center"
          >
            {props.hint.icon}
            {props.hint.text}
          </FormHelperText>
        )}

        {props.invalid?.is && (
          <FormErrorMessage
            mt="2"
            fontSize="0.75rem"
            fontWeight="400"
            color="error.900"
            display="flex"
            alignItems="center"
          >
            <ErrorIcon boxSize="6" mr="1" /> {props.invalid.text}
          </FormErrorMessage>
        )}

        {props.info?.is && (
          <Text
            fontSize="0.75rem"
            fontWeight="400"
            color="info.900"
            mt="2"
            display="flex"
            alignItems="center"
          >
            <InfoIcon boxSize="6" mr="1" /> {props.info.text}
          </Text>
        )}

        {props.success?.is && (
          <Text
            fontSize="0.75rem"
            fontWeight="400"
            color="success.900"
            mt="2"
            display="flex"
            alignItems="center"
          >
            <SuccessIcon boxSize="6" mr="1" /> {props.success.text}
          </Text>
        )}

        {props.warning?.is && (
          <Text
            fontSize="0.75rem"
            fontWeight="400"
            color="warning.900"
            mt="2"
            display="flex"
            alignItems="center"
          >
            <WarningIcon boxSize="6" mr="1" /> {props.warning.text}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};
