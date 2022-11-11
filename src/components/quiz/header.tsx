import { Heading, Text } from "@chakra-ui/react";
import { colors } from "../../theme/foundations";

const HEADING_SIZES = ["xl", "3xl", "5xl"];
const SUB_TEXT = ["sm", "md", "xl"];

export function Header(props: any) {
  const { header, subHeader, isGrey } = props;

  return (
    <>
      <Heading fontSize={HEADING_SIZES} fontWeight={"bold"}>
        {header}
      </Heading>
      <Text
        fontSize={SUB_TEXT}
        fontWeight={500}
        color={isGrey ? colors.SUB_TEXT : "black"}
      >
        {subHeader}
      </Text>
    </>
  );
}
