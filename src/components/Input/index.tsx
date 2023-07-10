import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

// componente usando todos oa tributos de props via ...rest
export function Input({ ...rest }: TextInputProps) {

  // buscando propriedade colors de theme
  const { COLORS } = useTheme();

  return (
    <Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    />
  )
}