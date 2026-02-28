import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const ZAP_BLUE = "#00ADEF";

  return (
    <>
      {/* Ensures the Android status bar (clock/battery) matches the theme */}
      <StatusBar style="light" backgroundColor={ZAP_BLUE} />

      <Stack
        screenOptions={{
          // Global header styling
          headerStyle: { 
            backgroundColor: ZAP_BLUE,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { 
            fontWeight: 'bold',
          },
          // Modern Android transitions
          animation: 'fade_from_bottom', 
        }}
      >
        {/* 1. The main Tab navigation (Home, Profile, Sharing) */}
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />

        {/* 2. The Modal Requirement - This slides up from the bottom */}
        <Stack.Screen 
          name="safety-modal" 
          options={{ 
            presentation: 'modal', 
            title: '⚠️ EMERGENCY STOP',
            headerStyle: { backgroundColor: '#ff4444' } // Red for safety
          }} 
        />

        {/* 3. Parameter Screen: Device Details */}
        <Stack.Screen 
          name="device/[id]" 
          options={{ title: 'Device Settings' }} 
        />

        {/* 4. Settings Screen */}
        <Stack.Screen 
          name="settings/index" 
          options={{ title: 'Global App Settings' }} 
        />
      </Stack>
    </>
  );
}