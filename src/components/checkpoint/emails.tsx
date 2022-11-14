import { Stack, Heading, Box, Text, Button } from '@chakra-ui/react';

import { BlankAvatar } from './blank-avatar';

const EMAILS = ['qwe@qwe.qwe', 'asd@asd.asd', 'zxc@zxc.zxc'];

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
              justifyContent='flex-start'
              leftIcon={
                <BlankAvatar
                  {...{
                    w: '24px',
                    h: '24px',
                    bg: 'SUB_TEXT',
                    borderRadius: '25px'
                  }}
                />
              }
              bg='white'
              _hover={{ bg: 'LIGHT_GREY' }}
              _active={{ bg: 'TEXT', color: 'LIGHT_GREY' }}
            >
              <Text>Email Subject</Text>
              <Text color='SUB_TEXT' fontWeight='normal' p='0px 10px'>
                {email}
              </Text>
              <Box
                color='SUB_TEXT'
                bg='white'
                p='7px'
                borderRadius='5px'
                boxShadow='0px 0px 1px black'
                ml='auto'
              >
                Make it cool
              </Box>
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
}
