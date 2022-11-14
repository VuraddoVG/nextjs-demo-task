import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Heading,
  HStack,
  useDisclosure
} from '@chakra-ui/react';

export function Header() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Heading color='SUB_TEXT' fontWeight='bold'>
        Checkpoint
      </Heading>
      <Box m='20px 0px'>
        {isOpen && (
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
        )}
      </Box>
    </>
  );
}
