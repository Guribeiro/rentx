import { StatusBar } from 'expo-status-bar';
import AppProvider from '@shared/hooks';
import Routes from './src/routes';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
