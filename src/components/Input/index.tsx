import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

// união de tipagens
type Props = TextInputProps & {
  // tipando inputRef, recebendo tipo  React.RefObject<TextInput>;
  inputRef?: React.RefObject<TextInput>;
}

// componente usando todos oa tributos de props via ...rest
export function Input({ inputRef, ...rest }: Props) {

  // buscando propriedade colors de theme
  const { COLORS } = useTheme();

  return (
    <Container 
      // Passando a tipagem
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    />
  )
}