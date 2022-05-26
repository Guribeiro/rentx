import styled from 'styled-components/native';
import { Text } from '../Text';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.palette.colors.shapes.light};
  padding: ${({ theme }) => theme.screen.rem(1)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: ${({ theme }) => theme.screen.rem(1)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.View``;

export const Brand = styled(Text)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.screen.rem(0.625, true)}px;
  color: ${({ theme }) => theme.palette.colors.texts.light};
`;

export const Name = styled(Text)`
  color: ${({ theme }) => theme.palette.colors.texts.strong};
`;

export const About = styled.View`
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  flex-direction: row;
`;

export const Rent = styled.View`
  margin-right: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const Period = styled(Brand)``;

export const Price = styled(Text)`
  color: ${({ theme }) => theme.palette.colors.red};
`;

export const Type = styled.View``;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${({ theme }) => theme.screen.rem(10)}px;
  height: ${({ theme }) => theme.screen.rem(5)}px;
`;
