import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DeepModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔥</Text>
      <Text style={styles.title}>Deep Focus Mode</Text>
      <Text style={styles.desc}>Maximum intensity activated. Electrical sensing is now at Pro-Grade levels.</Text>
      
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeText}>Enter Flow State</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: '#001A2C' },
  icon: { fontSize: 60 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 20 },
  desc: { textAlign: 'center', color: '#8899A6', marginVertical: 20, lineHeight: 22 },
  closeButton: { backgroundColor: '#00ADEF', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  closeText: { color: '#fff', fontWeight: 'bold' }
});