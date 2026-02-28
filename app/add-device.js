import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AddDeviceScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons name="bluetooth" size={80} color="#00ADEF" style={{ marginBottom: 20 }} />
      
      <Text style={styles.title}>Searching for Devices...</Text>
      <Text style={styles.subtitle}>Make sure your Zap It watch is nearby and in pairing mode.</Text>

      <View style={styles.searchBox}>
        <Text style={styles.searchText}>ZAP-WATCH-V3 (Found)</Text>
        <TouchableOpacity style={styles.connectButton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 30 },
  title: { fontSize: 24, fontFamily: 'Nunito-Bold', color: '#333' },
  subtitle: { fontSize: 16, fontFamily: 'Nunito-Regular', color: '#666', textAlign: 'center', marginVertical: 15 },
  searchBox: { width: '100%', backgroundColor: '#F5F9FF', padding: 20, borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  searchText: { fontFamily: 'Nunito-Bold', fontSize: 16 },
  connectButton: { backgroundColor: '#00ADEF', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontFamily: 'Nunito-Bold' },
  cancelButton: { marginTop: 40 },
  cancelText: { color: '#ff4444', fontFamily: 'Nunito-Bold' }
});