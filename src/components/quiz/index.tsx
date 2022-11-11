import Link from "next/link";
import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { colors } from "../../theme/foundations";
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
  const isLastPage = tabIndex === 3;
  isLastPage && console.log("User choices", choices);

  return (
    <Stack
      spacing={"24px"}
      pl={["15px", "50px", "100px", "200px"]}
      pt={["15px", "50px", "100px"]}
    >
      {isLastPage ? (
        <>
          <Header
            {...{
              header: "Welcome aboard, Johnny!",
              subHeader: "We are all set!",
            }}
          />
          <Button
            as={Link}
            w="250px"
            sx={{ color: "white", bg: colors.BUTTON }}
            _hover={{ bg: colors.ACTIVE_DOT }}
            href="/checkpoint"
          >
            Scan & Set-up My Account
          </Button>
        </>
      ) : (
        <>
          <Header
            {...{
              header: "Welcome to Project X",
              subHeader: "Help us talior our service to your needs",
              isGrey: true,
            }}
          />
          <Steps {...{ tabIndex, setTabIndex, handleChangeChoices }} />
        </>
      )}
    </Stack>
  );
}
