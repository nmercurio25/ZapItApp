import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_700Bold, 
  Nunito_900Black 
} from '@expo-google-fonts/nunito';

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const ZAP_BLUE = "#00ADEF";

  // 1. Load Nunito with different weights
  const [loaded, error] = useFonts({
    'Nunito-Regular': Nunito_400Regular,
    'Nunito-Bold': Nunito_700Bold,
    'Nunito-Black': Nunito_900Black,
  });

  // 2. Hide splash screen once fonts are ready
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Prevent rendering anything until fonts are ready
  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={ZAP_BLUE} />

      <Stack
        screenOptions={{
          headerStyle: { 
            backgroundColor: ZAP_BLUE,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { 
            fontFamily: 'Nunito-Bold', // Applied Nunito-Bold to all headers
          },
          animation: 'fade_from_bottom', 
        }}
      >
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="safety-modal" 
          options={{ 
            presentation: 'modal', 
            title: '⚠️ EMERGENCY STOP',
            headerStyle: { backgroundColor: '#ff4444' },
            headerTitleStyle: { fontFamily: 'Nunito-Black' } // Extra bold for emergency
          }} 
        />

        <Stack.Screen 
          name="study-modal" 
          options={{ presentation: 'modal', title: 'Study Session' }} 
        />

        <Stack.Screen 
          name="deep-modal" 
          options={{ presentation: 'modal', title: 'Deep Focus' }} 
        />

        <Stack.Screen 
          name="device/[id]" 
          options={{ title: 'Device Info' }} 
        />

        <Stack.Screen 
          name="user/[username]" 
          options={{ title: 'Community Profile' }} 
        />
      </Stack>
    </>
  );
}