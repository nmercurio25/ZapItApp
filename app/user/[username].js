import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function UserDetail() {
  const { username } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>
      <Text style={styles.username}>{username}</Text>
      <View style={styles.statBox}>
        <Text style={styles.statTitle}>Focus Streak</Text>
        <Text style={styles.statValue}>5 Days</Text>
      </View>
      <Button title="Back to Community" onPress={() => router.back()} color="#00ADEF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  avatar: { fontSize: 80, marginBottom: 10 },
  username: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  statBox: { backgroundColor: '#E0F4FF', width: '100%', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 30 },
  statTitle: { color: '#00ADEF', fontWeight: 'bold' },
  statValue: { fontSize: 32, fontWeight: 'bold' }
});