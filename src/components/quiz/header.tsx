import { Heading, Text } from "@chakra-ui/react";
import { colors } from "../../theme/foundations";

const HEADING_SIZES = ["xl", "3xl", "5xl"];
const SUB_TEXT = ["sm", "md", "xl"];

export function Header() {
  return (
    <>
      <Heading fontSize={HEADING_SIZES} fontWeight={"bold"}>
        Welcome to Project X
      </Heading>
      <Text fontSize={SUB_TEXT} fontWeight={500} color={colors.SUB_TEXT}>
        Help us talior our service to your needs
      </Text>
    </>
  );
}
