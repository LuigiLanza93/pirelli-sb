"use client";
import { Box } from "@chakra-ui/react";

interface Props {
  alt?: string;
  imageLg?: string;
  imageMd?: string;
  imageSm: string;
}

export const Picture = ({ ...props }: Props): JSX.Element => {
  return (
    <Box {...props}>
      <picture>
        {props.imageLg && (
          <source media="(min-width:62em)" srcset={props.imageLg} /> // ~992px
        )}
        {props.imageMd && (
          <source media="(min-width:48em)" srcset={props.imageMd} /> // ~768px
        )}
        <img
          src={props.imageSm}
          alt={props.alt}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </picture>
    </Box>
  );
};
