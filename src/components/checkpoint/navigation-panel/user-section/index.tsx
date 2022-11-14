import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react';

import { BlankAvatar } from '../../blank-avatar';

const AVATAR_SIZES = ['26px', '38px', '52px'];
const HEADING_SIZES = ['14px', '15px', '16px'];
const SUB_TEXT_SIZES = ['12px', '13px', '14px'];

export function UserSection() {
  return (
    <Accordion allowToggle>
      <AccordionItem border='none'>
        <AccordionButton
          p='0px'
          alignSelf='center'
          justifyContent='space-between'
        >
          <HStack spacing='10px'>
            <BlankAvatar
              {...{
                w: AVATAR_SIZES,
                h: AVATAR_SIZES,
                borderRadius: '25px',
                bg: 'EMAIL_SUBJECT',
                color: 'SUB_TEXT'
              }}
            />
            <Stack alignItems='start'>
              <Text fontSize={HEADING_SIZES} fontWeight='semibold'>
                Erikka Apple
              </Text>
              <Text fontSize={SUB_TEXT_SIZES} color='SUB_TEXT' m='0px'>
                e.apple@yapple.yap
              </Text>
            </Stack>
          </HStack>
          <AccordionIcon alignSelf='center' />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
