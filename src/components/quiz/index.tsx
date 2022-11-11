import { Stack } from "@chakra-ui/react";
import { useState } from "react";

import { Header } from "./header";
import { Steps } from "./steps";

export function Quiz() {
  const [tabIndex, setTabIndex] = useState(0);
  const [choices, setChoices] = useState({
    email: [],
    work: [],
    aplications: [],
  });

  const handleChangeChoices = (id: number, options: (string | number)[]) => {
    const name = id === 0 ? "email" : id === 1 ? "work" : "aplications";

    setChoices((prevChoices) => ({
      ...prevChoices,
      [name]: options,
    }));
  };

  return (
    <Stack
      spacing={"24px"}
      pl={["15px", "50px", "100px", "200px"]}
      pt={["15px", "50px", "100px"]}
    >
      <Header />
      <Steps {...{ tabIndex, setTabIndex, handleChangeChoices }} />
    </Stack>
  );
}
