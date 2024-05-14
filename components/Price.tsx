"use client";
import { Text, Box, HStack, VStack } from "@chakra-ui/react";
import { TagLabel } from "./TagLabel";

interface Props {
  variant?: string;
  children?: string;
  tagLabel?: string;
  textStyle?: string;
  fontWeight?: string;
  strokedPrice?: string;
  isMultiline?: boolean;
  fromLabel?: string;
  toLabel?: string;
  fromPrice?: string;
  toPrice?: string;
}

const Standard = ({ children, ...props }: Props): JSX.Element => {
  return <Text {...props}>{children}</Text>;
};

const Free = ({ tagLabel, children, ...props }: Props): JSX.Element => {
  return (
    <HStack {...props} spacing={2}>
      <Text
        color="success.800"
        textStyle={props.textStyle}
        fontWeight={props.fontWeight}
      >
        {children}
      </Text>
      <TagLabel
        bgColor="success.800"
        textStyle="xsmall"
        color="white"
        fontWeight="600"
      >
        {tagLabel}
      </TagLabel>
    </HStack>
  );
};

const Discount = ({
  children,
  isMultiline = false,
  strokedPrice,
  ...props
}: Props): JSX.Element => {
  const content = (
    <>
      <Text
        as="s"
        textStyle={
          props.textStyle === "body" || "lead" ? "small" : props.textStyle
        }
        fontWeight="400"
        color="neutral.800"
      >
        {strokedPrice}
      </Text>
      <Text
        color="success.800"
        textStyle={props.textStyle}
        fontWeight={props.fontWeight}
      >
        {children}
      </Text>
    </>
  );

  return (
    <>
      {isMultiline ? (
        <VStack {...props} spacing={0} align="flex-end">
          {content}
        </VStack>
      ) : (
        <HStack {...props} spacing={2}>
          {content}
        </HStack>
      )}
    </>
  );
};

const PriceRange = ({
  fromPrice,
  toPrice,
  fromLabel,
  toLabel,
  isMultiline = false,
  ...props
}: Props): JSX.Element => {
  const content = (
    <>
      <HStack spacing={1}>
        <Text textStyle={props.textStyle} fontWeight="400" color="neutral.800">
          {fromLabel}
        </Text>
        <Text
          color="neutral.950"
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
        >
          {fromPrice}
        </Text>
      </HStack>
      <HStack spacing={1}>
        <Text textStyle={props.textStyle} fontWeight="400" color="neutral.800">
          {toLabel}
        </Text>
        <Text
          color="neutral.950"
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
        >
          {toPrice}
        </Text>
      </HStack>
    </>
  );

  return (
    <>
      {isMultiline ? (
        <VStack {...props} spacing={0} align="flex-end">
          {content}
        </VStack>
      ) : (
        <HStack {...props} spacing={1}>
          {content}
        </HStack>
      )}
    </>
  );
};

const Starting = ({ fromLabel, children, ...props }: Props): JSX.Element => {
  return (
    <HStack spacing={1}>
      <Text textStyle={props.textStyle} fontWeight="400" color="neutral.800">
        {fromLabel}
      </Text>
      <Text
        color="neutral.950"
        textStyle={props.textStyle}
        fontWeight={props.fontWeight}
      >
        {children}
      </Text>
    </HStack>
  );
};

export const Price = ({ variant, children, ...props }: Props): JSX.Element => {
  return (
    <Box {...props}>
      {variant === "standard" && (
        <Standard textStyle={props.textStyle} fontWeight={props.fontWeight}>
          {children}
        </Standard>
      )}

      {variant === "free" && (
        <Free
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
          tagLabel={props.tagLabel}
        >
          {children}
        </Free>
      )}

      {variant === "discount" && (
        <Discount
          isMultiline={props.isMultiline}
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
          strokedPrice={props.strokedPrice}
        >
          {children}
        </Discount>
      )}

      {variant === "range" && (
        <PriceRange
          isMultiline={props.isMultiline}
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
          fromLabel={props.fromLabel}
          toLabel={props.toLabel}
          fromPrice={props.fromPrice}
          toPrice={props.toPrice}
        />
      )}

      {variant === "starting" && (
        <Starting
          textStyle={props.textStyle}
          fontWeight={props.fontWeight}
          fromLabel={props.fromLabel}
        >
          {children}
        </Starting>
      )}
    </Box>
  );
};
