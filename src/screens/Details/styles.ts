import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.screen.rem(4)}px
    ${({ theme }) => theme.screen.rem(1)}px
    ${({ theme }) => theme.screen.rem(1)}px;
  flex-direction: row;
`;
export const GobackButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.screen.rem(1)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  color: ${({ theme }) => theme.palette.colors.texts.medium};
`;
