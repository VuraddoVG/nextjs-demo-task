import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';

import { ICONS_MUI } from '../../icons';

const INPUT_TEXT_SIZES = ['14px', '15px', '16px'];

export function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const handleChangeSearchValue = (event: any) => {
    setSearchValue(event.target.value);
    console.log('Search Value', event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none' alignContent='center'>
        <ICONS_MUI.SEARCH />
      </InputLeftElement>
      <Input
        value={searchValue}
        onChange={handleChangeSearchValue}
        placeholder='Search'
        border='2px solid'
        borderColor='SUB_TEXT'
        borderRadius='10px'
        fontSize={INPUT_TEXT_SIZES}
      />
    </InputGroup>
  );
}
