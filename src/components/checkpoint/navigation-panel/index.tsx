import { Stack } from '@chakra-ui/react';

import { UserSection } from './user-section';
import { SearchInput } from './search-input';
import { PagesList } from './pages-list';
import { FoldersList } from './folders-list';
import { Promo } from './promo';

export function NavigationPanel() {
  return (
    <Stack
      h='100%'
      spacing={['8px', '10px', '24px']}
      p={['4px', '8px', '10px', '15px']}
      bg='DASHBOARD_BG'
      color='LIGHT_GREY'
      fontWeight='semibold'
      overflow='clip visible'
    >
      <UserSection />
      <SearchInput />
      <PagesList />
      <FoldersList />
      <Promo />
    </Stack>
  );
}
