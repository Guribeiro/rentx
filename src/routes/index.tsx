import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack';

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
