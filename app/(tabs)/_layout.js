import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const ZAP_BLUE = "#00ADEF";

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: ZAP_BLUE,
      tabBarStyle: { height: 65, paddingBottom: 10 },
      // APPLY NUNITO TO TAB LABELS
      tabBarLabelStyle: {
        fontFamily: 'Nunito-Bold', // Using the weight we loaded in root layout
        fontSize: 12,
      },
      // APPLY NUNITO TO TOP HEADERS
      headerTitleStyle: {
        fontFamily: 'Nunito-Black', // Using the black weight for a bold header look
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#fff', // Or ZAP_BLUE if you prefer the colored header
      },
      headerTintColor: ZAP_BLUE, 
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="flash" size={26} color={color} />,
      }} />
      <Tabs.Screen name="sharing" options={{
        title: 'Sharing',
        tabBarIcon: ({ color }) => <Ionicons name="people" size={26} color={color} />,
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />,
      }} />
    </Tabs>
  );
}