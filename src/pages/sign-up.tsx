import { Stack } from "@chakra-ui/react";

import { Logo } from "../components/logo";
import { Quiz } from "../components/quiz";

export default function SingUp() {
  return (
    <Stack spacing="24px" p="20px">
      <Logo />
      <Quiz />
    </Stack>
  );
}
