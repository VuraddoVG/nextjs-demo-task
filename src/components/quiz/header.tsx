import { Heading, Text } from "@chakra-ui/react";

const HEADING_SIZES = ["xl", "3xl", "5xl"];
const SUB_TEXT_SIZES = ["sm", "md", "xl"];

interface Props {
  header: string;
  subHeader: string;
  isGrey?: boolean;
}

export function Header({ header, subHeader, isGrey }: Props) {
  return (
    <>
      <Heading fontSize={HEADING_SIZES} fontWeight="bold">
        {header}
      </Heading>
      <Text
        fontSize={SUB_TEXT_SIZES}
        fontWeight={500}
        color={isGrey ? "SUB_TEXT" : "black"}
      >
        {subHeader}
      </Text>
    </>
  );
}
