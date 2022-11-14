import {
  Stack,
  Heading,
  Box,
  Text,
  Button,
  Hide,
  Spacer
} from '@chakra-ui/react';

import { BlankAvatar } from './blank-avatar';

const EMAILS = ['qwe@qwe.qwe', 'asd@asd.asd', 'zxc@zxc.zxc'];
const TEXT_SIZES = ['8px', '12px', '16px', '20px'];
const SUB_TEXT_SIZES = ['10px', '12px', '13px', '14px'];
const AVATAR_SIZES = ['12px', '18px', '24px'];

export function Emails() {
  return (
    <Stack>
      <Heading fontSize='20px' color='SUB_TEXT' fontWeight='bold'>
        Inbox
      </Heading>
      <Stack>
        {EMAILS.map((email, index) => {
          return (
            <Button
              key={index}
              w='100%'
              h='50px'
              p='10px'
              justifyContent='flex-start'
              leftIcon={
                <BlankAvatar
                  {...{
                    w: AVATAR_SIZES,
                    h: AVATAR_SIZES,
                    bg: 'SUB_TEXT',
                    borderRadius: '25px'
                  }}
                />
              }
              bg='white'
              _hover={{ bg: 'LIGHT_GREY' }}
              _active={{ bg: 'TEXT', color: 'LIGHT_GREY' }}
            >
              <Text fontSize={TEXT_SIZES}>Email Subject</Text>
              <Hide below='md'>
                <Spacer />
              </Hide>
              <Text
                fontSize={SUB_TEXT_SIZES}
                color='SUB_TEXT'
                fontWeight='normal'
                p='0px 10px'
              >
                {email}
              </Text>
              <Hide below='md'>
                <Box
                  color='SUB_TEXT'
                  bg='white'
                  p={['3px', '7px']}
                  fontSize={['4px', '8px', '12px']}
                  borderRadius='5px'
                  boxShadow='0px 0px 1px black'
                  ml='auto'
                >
                  Make it cool
                </Box>
              </Hide>
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
}
