import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';

const HEADING_SIZES = ['lg', 'xl', '2xl'];
const HEADLINE_SIZES = ['8px', '16px', '20px', '28px'];
const SUB_TEXT_SIZES = ['4px', '14px', '18px', '20px'];

export function Header() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Heading color='SUB_TEXT' fontWeight='bold' fontSize={HEADING_SIZES}>
        Checkpoint
      </Heading>
      {isOpen && (
        <Box mt='20px'>
          <Alert status='info' variant='top-accent'>
            <HStack>
              <AlertIcon />
              <Box>
                <AlertTitle>Welcome to best-in-class Checkpoint!</AlertTitle>
                <AlertDescription>
                  Only your contacts will make it through the checkpoint, you
                  can modify your contacts list below.
                </AlertDescription>
              </Box>
            </HStack>
            <CloseButton
              alignSelf='flex-start'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        </Box>
      )}
      <Stack spacing='10px' alignItems='center' pt='10px'>
        <Text fontSize={HEADLINE_SIZES} fontWeight='semibold'>
          Hey, there!
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
    </>
  );
}
