import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const ZAP_BLUE = "#00ADEF";

  return (
    <>
      <StatusBar style="light" backgroundColor={ZAP_BLUE} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: ZAP_BLUE },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'fade_from_bottom', 
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="safety-modal" options={{ presentation: 'modal', title: '⚠️ EMERGENCY STOP' }} />
        <Stack.Screen name="study-modal" options={{ presentation: 'modal', title: 'Study Session' }} />
        <Stack.Screen name="deep-modal" options={{ presentation: 'modal', title: 'Deep Focus' }} />
        <Stack.Screen name="device/[id]" options={{ title: 'Device Info' }} />
        <Stack.Screen name="user/[username]" options={{ title: 'Community Profile' }} />
      </Stack>
    </>
  );
}