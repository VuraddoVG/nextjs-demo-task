import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Hide,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';

import { BlankAvatar } from '../blank-avatar';

const AVATAR_SIZES = ['14px', '26px', '38px', '52px'];
const HEADING_SIZES = ['14px', '15px', '16px'];
const SUB_TEXT_SIZES = ['12px', '13px', '14px'];
const USER_INFO = {
  name: 'Erikka Apple',
  email: 'e.apple@yapple.yap',
  secondEmail: 'e.apple@barbie.usa'
};

export function UserSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Accordion allowToggle>
      <AccordionItem border='none'>
        <AccordionButton
          p='0px'
          alignSelf='center'
          justifyContent='space-between'
          onClick={onOpen}
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
            <Hide below='xl'>
              <Stack alignItems='start'>
                <Text fontSize={HEADING_SIZES} fontWeight='semibold'>
                  {USER_INFO.name}
                </Text>
                <Text fontSize={SUB_TEXT_SIZES} color='SUB_TEXT' m='0px'>
                  {USER_INFO.email}
                </Text>
              </Stack>
            </Hide>
          </HStack>
          <AccordionIcon alignSelf='center' />
        </AccordionButton>
        <Hide below='lg'>
          <AccordionPanel pb={4}>{USER_INFO.secondEmail}</AccordionPanel>
        </Hide>
        <Show below='lg'>
          <Modal onClose={onClose} isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{USER_INFO.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{USER_INFO.email}</ModalBody>
            </ModalContent>
          </Modal>
        </Show>
      </AccordionItem>
    </Accordion>
  );
}
