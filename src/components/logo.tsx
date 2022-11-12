import { Heading, Image, HStack } from "@chakra-ui/react";

const IMAGE_SIZES = ["38px", "52px", "64px"];
const HEADING_SIZES = ["xl", "2xl", "4xl"];

export function Logo() {
  return (
    <HStack align="center">
      <Image
        boxSize={IMAGE_SIZES}
        objectFit="cover"
        src="/demo-logo.png"
        alt="logo"
      />
      <Heading fontSize={HEADING_SIZES} fontWeight="bold">
        Project X
      </Heading>
    </HStack>
  );
}
