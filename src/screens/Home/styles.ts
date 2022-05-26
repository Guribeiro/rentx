import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../components/Text';

import { CarData } from '../../components/Car';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.palette.colors.shapes.strong};
`;

export const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.screen.rem(4)}px
    ${({ theme }) => theme.screen.rem(1)}px
    ${({ theme }) => theme.screen.rem(2)}px;

  background: ${({ theme }) => theme.palette.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountCars = styled(Text)`
  color: ${({ theme }) => theme.palette.colors.texts.medium};
`;

export const CarsList = styled(
  FlatList as new (props: FlatListProps<CarData>) => FlatList<CarData>,
).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: theme.screen.rem(1),
  },
}))`
  width: 100%;
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
`;
