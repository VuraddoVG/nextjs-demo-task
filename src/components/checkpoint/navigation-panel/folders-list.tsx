import { Box, Button, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { ICONS_MUI } from '../../icons';

const SMART_FOLDERS = ['Top Senders', 'Dead Ends', 'Automated', 'Excluded'];
const TEXT_SIZES = ['8px', '12px', '16px'];
const SUB_TEXT_SIZES = ['10px', '12px', '13px', '14px'];

export function FoldersList() {
  const [buttonId, setButtonId] = useState(-1);

  return (
    <Stack>
      <Flex direction={['column', 'row']} alignItems='center'>
        <Text color='SUB_TEXT' fontSize={SUB_TEXT_SIZES}>
          Smart Folders
        </Text>
        <Spacer />
        <Button variant='outline' fontSize={SUB_TEXT_SIZES} p='5px' h='25px'>
          Create
        </Button>
      </Flex>
      {SMART_FOLDERS.map((name, index) => {
        return (
          <Button
            key={index}
            w='100%'
            justifyContent='flex-start'
            bg='DASHBOARD_BG'
            fontSize={TEXT_SIZES}
            leftIcon={<ICONS_MUI.FOLDER />}
            _hover={{ bg: 'SUB_TEXT' }}
            _active={{ bg: 'TEXT' }}
            isActive={buttonId === index}
            onClick={() => setButtonId(index)}
          >
            {name}
            <Box
              color='SUB_TEXT'
              bg='TEXT'
              p='4px'
              borderRadius='6px'
              ml='auto'
            >
              {index + 1 * 7}
            </Box>
          </Button>
        );
      })}
    </Stack>
  );
}
