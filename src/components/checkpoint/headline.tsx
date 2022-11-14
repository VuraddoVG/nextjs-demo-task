import { Box, Button, Stack, Text } from '@chakra-ui/react';

const HEADING_SIZES = ['20px', '24px', '28px'];
const SUB_TEXT_SIZES = ['14px', '18px', '20px'];

export function Headline() {
  return (
    <Stack p='20px' spacing='10px' alignItems='center'>
      <Text fontSize={HEADING_SIZES} fontWeight='semibold'>
        Some headline
      </Text>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Text fontWeight='normal' fontSize={SUB_TEXT_SIZES} color='SUB_TEXT'>
          We have added some contacts to your Checkpoint.
        </Text>
        <Text fontWeight='normal' fontSize={SUB_TEXT_SIZES} color='SUB_TEXT'>
          You might remove them or add new anytime!
        </Text>
      </Box>
      <Button color='white' bg='DARK_BLUE' p='15px' h='10px' w='120px'>
        All done!
      </Button>
    </Stack>
  );
}
