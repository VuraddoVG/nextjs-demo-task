import { chakra, Text, useCheckbox } from "@chakra-ui/react";

import { colors } from "../../theme/foundations";

export function CustomCheckbox(props: any) {
  const { state, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="40"
      bg={state.isChecked ? colors.ACTIVE_BADGE : colors.LIGHT_GREY}
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Text color={colors.TEXT} fontWeight={500} {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  );
}
