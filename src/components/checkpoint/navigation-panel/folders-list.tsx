import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { ICONS_MUI } from '../../icons';

const SMART_FOLDERS = ['Top Senders', 'Dead Ends', 'Automated', 'Excluded'];
const SUB_TEXT_SIZES = ['12px', '13px', '14px'];

export function FoldersList() {
  const [buttonId, setButtonId] = useState(-1);

  return (
    <Stack>
      <HStack justifyContent='space-between'>
        <Text color='SUB_TEXT'>Smart Folders</Text>
        <Button variant='outline' fontSize={SUB_TEXT_SIZES} p='5px' h='25px'>
          Create
        </Button>
      </HStack>
      {SMART_FOLDERS.map((name, index) => {
        return (
          <Button
            key={index}
            w='100%'
            justifyContent='flex-start'
            leftIcon={<ICONS_MUI.FOLDER />}
            bg='DASHBOARD_BG'
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
