import { Grid, GridItem } from '@chakra-ui/react';

import { NavigationPanel } from '../components/checkpoint/navigation-panel';
import { Header } from '../components/checkpoint/header';
import { Emails } from '../components/checkpoint/emails';

export default function Checkpoint() {
  return (
    <Grid
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(5, 1fr)'
      h='100vh'
      w='100vw'
      overflow='hidden visible'
      sx={{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '24px'
        }
      }}
    >
      <GridItem area='nav' rowSpan={5} colSpan={1}>
        <NavigationPanel />
      </GridItem>
      <GridItem
        p={['15px', '25px', '35px']}
        area='header'
        rowSpan={1}
        colSpan={4}
      >
        <Header />
      </GridItem>
      <GridItem
        p={['5px', '15px', '25px']}
        area='emails'
        rowSpan={2}
        colSpan={4}
      >
        <Emails />
      </GridItem>
    </Grid>
  );
}
