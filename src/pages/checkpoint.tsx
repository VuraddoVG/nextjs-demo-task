import { Grid, GridItem } from '@chakra-ui/react';

import { Header } from '../components/checkpoint/header';
import { NavigationPanel } from '../components/checkpoint/navigation-panel';
import { Headline } from '../components/checkpoint/headline';
import { Emails } from '../components/checkpoint/emails';

export default function Checkpoint() {
  return (
    <Grid
      templateAreas={`
      "nav header"
      "nav contacts"
      "nav emails"
      "nav emails"
      "nav emails"
      `}
      gridTemplateRows='15% 20% 60%'
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
        <Headline />
      </GridItem>
      <GridItem p='25px' area='emails'>
        <Emails />
      </GridItem>
    </Grid>
  );
}
