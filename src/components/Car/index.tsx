import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import EnergySvg from '../../assets/energy.svg';

export type CarData = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

type Props = {
  data: CarData;
  onPress(): void;
};

const Car = ({ data, onPress }: Props): JSX.Element => {
  const { name, brand, rent, thumbnail } = data;
  return (
    <Container onPress={onPress}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>$ {rent.price}</Price>
          </Rent>
          <Type>
            <EnergySvg />
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: thumbnail }} />
    </Container>
  );
};

export { Car };
