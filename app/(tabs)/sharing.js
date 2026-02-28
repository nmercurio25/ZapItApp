import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SharingScreen() {
  const router = useRouter();
  const friends = ['Alex_Zap', 'Jordan_Focus', 'Sam_Bolt'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Community Focus</Text>
      {friends.map((friend) => (
        <TouchableOpacity 
          key={friend} 
          style={styles.friendCard}
          // URL Parameters
          onPress={() => router.push(`/user/${friend}`)}
        >
          <Text style={styles.friendName}>{friend}</Text>
          <Text style={styles.status}>Status: In Deep Mode 🔥</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F9FF', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#00ADEF' },
  friendCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 10, elevation: 2 },
  friendName: { fontSize: 18, fontWeight: '600' },
  status: { color: '#666', marginTop: 5 }
});