import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shared/hooks/theme';

import Home from '../screens/Home';
import Details from '../screens/Details';

export type RootStackParamsList = {
  Home: undefined;
  Details: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

const StackRoutes = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.palette.colors.shapes.light,
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};

export default StackRoutes;
