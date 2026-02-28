import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DeviceDetailScreen() {
  // 1. Hook to get URL parameters
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const ZAP_BLUE = "#00ADEF";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Device Details</Text>
        <Text style={styles.idBadge}>ID: {id}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          You are currently viewing the diagnostic data for the 
          {id === 'watch' ? ' Zap Watch Pro' : ' Zap Band Lite'}.
        </Text>
        
        {/* Requirement: Image Component */}
        <View style={styles.imageContainer}>
             <Text style={{fontSize: 50}}>⌚</Text>
             <Text style={styles.statusText}>Connection: Stable</Text>
        </View>

        {/* Navigation back */}
        <Button 
          title="Back to Dashboard" 
          onPress={() => router.back()} 
          color={ZAP_BLUE} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 40, backgroundColor: '#00ADEF', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  idBadge: { color: 'white', opacity: 0.8, marginTop: 5 },
  content: { padding: 20, alignItems: 'center' },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#666' },
  imageContainer: { 
    padding: 40, 
    borderRadius: 100, 
    backgroundColor: '#E0F4FF', 
    marginBottom: 30,
    alignItems: 'center'
  },
  statusText: { marginTop: 10, fontWeight: 'bold', color: '#00ADEF' }
});