import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useCheckboxGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { colors } from "../../theme/foundations";
import { CustomCheckbox } from "./checkbox";

export function Steps(props: any) {
  const { tabIndex, setTabIndex, handleChangeChoices } = props;

  const { value, setValue, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });

  function quizTab(headline: string, options: string[] | number[]) {
    return (
      <Box>
        <Text color={colors.TEXT} fontWeight={500}>
          {headline}
        </Text>
        <Wrap spacing="24px" p={"20px 10px 20px 0px"}>
          {options.map((option, index) => {
            return (
              <WrapItem key={index}>
                <CustomCheckbox
                  key={index}
                  {...getCheckboxProps({ value: option })}
                />
              </WrapItem>
            );
          })}
        </Wrap>
        <Button
          isDisabled={value.length < 1}
          w="250px"
          sx={{ color: "white", bg: colors.BUTTON }}
          _hover={{ bg: colors.ACTIVE_DOT }}
          onClick={() => {
            handleChangeChoices(tabIndex, value);
            setValue([]);
            setTabIndex(tabIndex + 1);
          }}
        >
          Continue {">"}
        </Button>
      </Box>
    );
  }

  const quizTabs = [
    {
      content: quizTab("My email address is mainly usedd for:", [
        "Personal",
        "Work",
        "Both",
      ]),
    },
    {
      content: quizTab("My work is in following area:", [
        "Finance",
        "Education",
        "Business",
        "Government",
        "Other",
      ]),
    },
    {
      content: quizTab("I use following aplications:", [
        "Twitter",
        "Facebook",
        "Instagram",
        "Discord",
        "LinkedIn",
        "Calendar",
        "Zoom",
      ]),
    },
  ];

  return (
    <Tabs
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
      variant="solid-rounded"
      colorScheme="blue"
    >
      <TabList>
        {quizTabs.map((_, index) => (
          <Tab
            key={index}
            w={"30px"}
            h={"30px"}
            m={"5px"}
            transition={"0.5s"}
            sx={{ color: colors.TEXT, bg: colors.LIGHT_GREY }}
            _selected={{ bg: colors.ACTIVE_DOT }}
            isDisabled={index !== tabIndex}
          />
        ))}
      </TabList>
      <TabPanels maxW="700px">
        {quizTabs.map((tab, index) => (
          <TabPanel key={index} p={"50px 10px 20px 0px"}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
