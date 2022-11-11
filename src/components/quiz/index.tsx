import { Stack } from "@chakra-ui/react";

import { Header } from "./header";

export function Quiz() {
  return (
    <Stack
      spacing={"24px"}
      pl={["15px", "50px", "100px", "200px"]}
      pt={["15px", "50px", "100px"]}
    >
      <Header />
    </Stack>
  );
}
