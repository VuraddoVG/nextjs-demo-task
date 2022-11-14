import { Grid, GridItem } from '@chakra-ui/react';

import { Header } from '../components/checkpoint/header';
import { NavigationPanel } from '../components/checkpoint/navigation-panel';

export default function Checkpoint() {
  return (
    <Grid
      templateAreas={`
      "nav header"
      "nav contacts"
      "nav main"
      "nav main"
      "nav main"
      `}
      gridTemplateRows='15% 25% 60%'
      gridTemplateColumns='20%'
      h='100vh'
    >
      <GridItem p='35px' area='header'>
        <Header />
      </GridItem>
      <GridItem area='nav'>
        <NavigationPanel />
      </GridItem>
      <GridItem p='25px' area='contacts'>
        Contacts
      </GridItem>
      <GridItem p='25px' area='main'>
        Main
      </GridItem>
    </Grid>
  );
}
