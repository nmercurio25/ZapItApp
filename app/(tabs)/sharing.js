import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SharingScreen() {
  const router = useRouter();
  // Data for parameter navigation
  const friends = [
    { id: 'Alex_Zap', status: 'Deep Mode 🔥' },
    { id: 'Jordan_Focus', status: 'Study Mode ⏳' },
    { id: 'Sam_Bolt', status: 'Active ⚡' },
    { id: 'Taylor_Sync', status: 'Deep Mode 🔥' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Zap Community</Text>
      {friends.map((friend) => (
        <TouchableOpacity 
          key={friend.id} 
          style={styles.friendCard}
          // Requirement: URL Parameters Screen #2
          onPress={() => router.push(`/user/${friend.id}`)}
        >
          <View>
            <Text style={styles.friendName}>{friend.id}</Text>
            <Text style={styles.statusText}>{friend.status}</Text>
          </View>
          <Text style={{fontSize: 24}}>👤</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F9FF', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#00ADEF' },
  friendCard: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 12, 
    elevation: 3 
  },
  friendName: { fontSize: 18, fontWeight: 'bold' },
  statusText: { color: '#666', marginTop: 4 }
});