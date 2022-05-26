import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Car, CarData } from '../../components/Car';
import { Container, Header, CountCars, CarsList } from './styles';
import { RootStackParamsList } from '../../routes/stack';

import LogoSvg from '../../assets/logo.svg';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const Home = (): JSX.Element => {
  const { navigate } = useNavigation<HomeScreenProps>();

  const cars: Array<CarData> = [
    {
      brand: 'audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 120,
      },
      thumbnail:
        'https://cdn.pixabay.com/photo/2021/10/21/23/42/audi-6730693_960_720.png',
    },
    {
      brand: 'audi2',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 120,
      },
      thumbnail:
        'https://cdn.pixabay.com/photo/2021/10/21/23/42/audi-6730693_960_720.png',
    },
    {
      brand: 'audi3',
      name: 'RS 5 Coupé',
      rent: {
        period: 'Ao dia',
        price: 120,
      },
      thumbnail:
        'https://cdn.pixabay.com/photo/2021/10/21/23/42/audi-6730693_960_720.png',
    },
  ];

  return (
    <Container>
      <Header>
        <LogoSvg />
        <CountCars>Total de {cars.length} carros</CountCars>
      </Header>
      <CarsList
        data={cars}
        keyExtractor={item => item.brand}
        renderItem={({ item }) => (
          <Car data={item} onPress={() => navigate('Details')} />
        )}
      />
    </Container>
  );
};

export default Home;
