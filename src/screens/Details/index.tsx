import { Container, Header, GobackButton, Icon } from './styles';
import { Text } from '../../components/Text';

const Details = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <GobackButton>
          <Icon name="chevron-left" />
        </GobackButton>
      </Header>
      <Text>Details</Text>
    </Container>
  );
};

export default Details;
