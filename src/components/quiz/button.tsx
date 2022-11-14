import { chakra, Text, useCheckbox } from '@chakra-ui/react';

export function QuizButton(props: any) {
  const { state, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridColumnGap={2}
      maxW='40'
      bg={state.isChecked ? 'ACTIVE_BADGE' : 'LIGHT_GREY'}
      rounded='lg'
      px={3}
      py={1}
      cursor='pointer'
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Text color='TEXT' fontWeight={500} {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  );
}
