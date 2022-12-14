import { Button, Stack, Text } from '@chakra-ui/react';

const HEADING_SIZES = ['14px', '16px', '18px'];
const SUB_TEXT_SIZES = ['10px', '12px', '14px'];

export function Promo() {
  return (
    <Stack bg='TEXT' p='20px' spacing='10px' borderRadius='10px'>
      <Text fontSize={HEADING_SIZES}>Project X Business</Text>
      <Text fontWeight='normal' fontSize={SUB_TEXT_SIZES} color='SUB_TEXT'>
        Find out more about new possibilities
      </Text>
      <Button bg='DARK_BLUE' p='15px' h='10px' w='120px'>
        Get the offer
      </Button>
    </Stack>
  );
}
