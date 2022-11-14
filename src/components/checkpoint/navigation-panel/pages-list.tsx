import { Button, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { ICONS_MUI } from '../../icons';

const ICONS = [
  ICONS_MUI.DASHBOARD,
  ICONS_MUI.CHECK,
  ICONS_MUI.BROOM,
  ICONS_MUI.FOLDER
];
const NAMES = ['Dashboard', 'Checkpoint', 'Spring Cleaner', 'Smart Folders'];

export function PagesList() {
  const [buttonId, setButtonId] = useState(1);

  return (
    <Stack>
      {ICONS.map((Icon, index) => {
        return (
          <Button
            key={index}
            w='100%'
            leftIcon={<Icon />}
            bg='DASHBOARD_BG'
            justifyContent='start'
            _hover={{ bg: 'SUB_TEXT' }}
            _active={{ bg: 'TEXT' }}
            isActive={buttonId === index}
            onClick={() => setButtonId(index)}
          >
            {NAMES[index]}
          </Button>
        );
      })}
    </Stack>
  );
}
