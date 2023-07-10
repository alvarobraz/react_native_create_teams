import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

// união de props
type Props = TouchableOpacityProps & {
  // tipando icon MaterialIcons.glyphMap
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return(
    <Container {...rest}>
      <Icon 
      // name agora recebe icon dinamico
      name={icon}
      type={type} 
      />
    </Container>
  );
}