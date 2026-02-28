import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SafetyModal() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 80}}>🛑</Text>
      <Text style={styles.title}>ZAP DISABLED</Text>
      <Button title="Resume Session" onPress={() => router.back()} color="#333" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#ff4444', marginBottom: 20 }
});