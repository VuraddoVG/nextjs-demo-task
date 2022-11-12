import Link from "next/link";
import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { Header } from "./header";
import { Steps } from "./steps";

const PADDING_TOP = ["15px", "50px", "100px"];

export function Quiz() {
  const [tabIndex, setTabIndex] = useState(0);
  const [choices, setChoices] = useState({
    email: "",
    work: "",
    aplications: [],
  });

  const handleChangeChoices = (id: number, options: (string | number)[]) => {
    const name = ["email", "work", "aplications"][id];

    setChoices((prevChoices) => ({
      ...prevChoices,
      [name]: options,
    }));
  };

  const isLastPage = tabIndex === 3;

  return (
    <Stack spacing="24px" pl={[...PADDING_TOP, "200px"]} pt={PADDING_TOP}>
      {isLastPage ? (
        <>
          <Header
            header="Welcome aboard, Johnny!"
            subHeader="We are all set!"
          />
          <Button
            as={Link}
            w="250px"
            color="white"
            bg="BUTTON"
            _hover={{ bg: "ACTIVE_DOT" }}
            href="/checkpoint"
            onClick={() => console.log("User choices", choices)}
          >
            Scan & Set-up My Account
          </Button>
        </>
      ) : (
        <>
          <Header
            header="Welcome to Project X"
            subHeader="Help us talior our service to your needs"
            isGrey={true}
          />
          <Steps
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
            handleChangeChoices={handleChangeChoices}
          />
        </>
      )}
    </Stack>
  );
}
