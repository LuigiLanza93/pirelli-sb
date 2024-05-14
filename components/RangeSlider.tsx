"use client";
import {
  Text,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

interface Props {
  minValue: string;
  maxValue: string;
  defaltValue: number;
  name: string;
}

export const RangeSlider = ({
  minValue,
  maxValue,
  defaltValue,
  name,
  ...props
}: Props): JSX.Element => {
  return (
    <HStack {...props}>
      <Text fontStyle="small" fontWeight="600">
        {minValue}
      </Text>
      <Slider aria-label={name} defaultValue={defaltValue} mx="2">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text fontStyle="small" fontWeight="600">
        {maxValue}
      </Text>
    </HStack>
  );
};
