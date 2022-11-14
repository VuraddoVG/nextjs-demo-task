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
  useRadioGroup,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import { QuizButton } from './button';

interface Props {
  tabIndex: number;
  setTabIndex: Function;
  handleChangeChoices: Function;
}

export function Steps({ tabIndex, setTabIndex, handleChangeChoices }: Props) {
  const {
    value: checkboxValue,
    setValue: setCheckboxValue,
    getCheckboxProps
  } = useCheckboxGroup({
    defaultValue: []
  });

  const {
    value: radioValue,
    setValue: setRadioValue,
    getRadioProps,
    getRootProps
  } = useRadioGroup({
    defaultValue: ''
  });

  function quizTab(
    headline: string,
    options: string[] | number[],
    isRadio = true
  ) {
    return (
      <Box {...getRootProps()}>
        <Text color='TEXT' fontWeight={500}>
          {headline}
        </Text>
        <Wrap spacing='24px' p='20px 10px 20px 0px'>
          {options.map((option, index) => {
            return (
              <WrapItem key={index}>
                <QuizButton
                  props={
                    isRadio
                      ? getRadioProps({ value: option })
                      : getCheckboxProps({ value: option })
                  }
                />
              </WrapItem>
            );
          })}
        </Wrap>
        <Button
          isDisabled={isRadio ? radioValue === '' : checkboxValue.length < 1}
          w='250px'
          color='white'
          bg='BUTTON'
          _hover={{ bg: 'ACTIVE_DOT' }}
          onClick={() => {
            handleChangeChoices(tabIndex, isRadio ? radioValue : checkboxValue);
            isRadio ? setRadioValue('') : setCheckboxValue([]);
            setTabIndex(tabIndex + 1);
          }}
        >
          Continue {'>'}
        </Button>
      </Box>
    );
  }

  const quizTabs = [
    {
      content: quizTab('My email address is mainly usedd for:', [
        'Personal',
        'Work',
        'Both'
      ])
    },
    {
      content: quizTab('My work is in following area:', [
        'Finance',
        'Education',
        'Business',
        'Government',
        'Other'
      ])
    },
    {
      content: quizTab(
        'I use following aplications:',
        [
          'Twitter',
          'Facebook',
          'Instagram',
          'Discord',
          'LinkedIn',
          'Calendar',
          'Zoom'
        ],
        false
      )
    }
  ];

  return (
    <Tabs
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
      variant='solid-rounded'
      colorScheme='blue'
    >
      <TabList>
        {quizTabs.map((_, index) => (
          <Tab
            isDisabled={index !== tabIndex}
            key={index}
            mt='10px'
            mr='15px'
            pr='0px'
            transition='0.5s'
            color='TEXT'
            bg='LIGHT_GREY'
            cursor='default'
            _disabled={{ cursor: 'default' }}
            _selected={{ bg: 'ACTIVE_DOT' }}
          />
        ))}
      </TabList>
      <TabPanels maxW='700px'>
        {quizTabs.map((tab, index) => (
          <TabPanel key={index} p='50px 10px 20px 0px'>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
