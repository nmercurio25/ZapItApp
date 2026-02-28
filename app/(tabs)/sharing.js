import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics'; // Import Haptics

export default function SharingScreen() {
  const router = useRouter();

  const community = [
    { id: 'Xyruz_Zap', status: 'Deep Mode 🔥' },
    { id: 'Carl_Focus', status: 'Study Mode ⏳' },
    { id: 'Nikol_Bolt', status: 'Active ⚡' },
  ];

  const friends = [
    { username: '@SULIN', status: 'Active' },
    { username: '@TINE_M', status: 'STUDY MODE' },
  ];

  // The Poke Logic: Triggers vibration and an alert
  const onPoke = (name) => {
    // Requirement: Third-party interaction
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert("Poke Sent!", `You sent a focus vibration to ${name}.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Zap Community</Text>
      {community.map((member) => (
        <TouchableOpacity 
          key={member.id} 
          style={styles.card}
          onPress={() => router.push(`/user/${member.id}`)}
        >
          <View>
            <Text style={styles.mainName}>{member.id}</Text>
            <Text style={styles.statusText}>{member.status}</Text>
          </View>
          <Text style={{fontSize: 24}}>👤</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.subHeader}>Friends</Text>
      {friends.map((friend) => (
        <View key={friend.username} style={styles.friendRow}>
          <TouchableOpacity 
            style={styles.friendCard}
            onPress={() => router.push(`/user/${friend.username.replace('@', '')}`)}
          >
            <Text style={styles.friendName}>{friend.username}</Text>
            <Text style={styles.friendStatus}>{friend.status}</Text>
          </TouchableOpacity>

          {/* Poke Button - Triggers the vibration logic */}
          <TouchableOpacity 
            style={styles.pokeButton}
            onPress={() => onPoke(friend.username)}
          >
            <Ionicons name="hand-right-outline" size={24} color="#00ADEF" />
          </TouchableOpacity>
        </View>
      ))}
      <View style={{height: 40}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F9FF', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#00ADEF' },
  subHeader: { fontSize: 24, fontWeight: 'bold', marginTop: 30, marginBottom: 15, color: '#333' },
  card: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20, 
    borderRadius: 20, 
    marginBottom: 12, 
    elevation: 3 
  },
  mainName: { fontSize: 18, fontWeight: 'bold' },
  statusText: { color: '#666', marginTop: 4 },
  friendRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  friendCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    marginRight: 10,
  },
  friendName: { fontSize: 16, fontWeight: 'bold' },
  friendStatus: { fontSize: 12, color: '#666' },
  pokeButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0F4FF',
  }
});