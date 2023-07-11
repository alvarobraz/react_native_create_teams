import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 24px 12px 12px 12px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;