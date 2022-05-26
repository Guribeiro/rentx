import React, { useState, useEffect, useCallback } from 'react';
import {
  Archivo_300Light,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenProvider } from 'responsive-native';
import { View } from 'react-native';
import { ThemeProvider } from './theme';

type Props = {
  children: JSX.Element;
};

const AppProvider = ({ children }: Props): JSX.Element => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        loadAsync({
          Archivo_300Light,
          Archivo_400Regular,
          Archivo_500Medium,
          Archivo_700Bold,
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1B1B1F',
        }}
      />
    );
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ScreenProvider baseFontSize={16}>
        <ThemeProvider>{children}</ThemeProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
