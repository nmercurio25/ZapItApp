import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('User');
  const [bio, setBio] = useState('Focusing with Zap It.');

  const ZAP_BLUE = "#00ADEF";

  return (
    <View style={styles.container}>
      {/* Requirement: Image Component */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: 'https://placehold.co/150x150/00ADEF/FFFFFF/png?text=User' }} 
          style={styles.profileImage} 
        />
        <TouchableOpacity style={styles.editBadge}>
          <Text style={{color: 'white', fontSize: 12}}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Display Name</Text>
      {/* Requirement: TextInput Component */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Bio / Status</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={bio}
        onChangeText={setBio}
        placeholder="What's your focus goal?"
        multiline
      />

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>24h</Text>
          <Text style={styles.statLabel}>Total Focus</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Zaps Avoided</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 30, alignItems: 'center' },
  avatarContainer: { marginBottom: 30, position: 'relative' },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#00ADEF' },
  editBadge: { 
    position: 'absolute', bottom: 0, right: 0, 
    backgroundColor: '#333', padding: 8, borderRadius: 20 
  },
  label: { alignSelf: 'flex-start', fontWeight: 'bold', color: '#666', marginBottom: 5 },
  input: { 
    width: '100%', backgroundColor: '#F5F9FF', padding: 15, 
    borderRadius: 10, marginBottom: 20, fontSize: 16 
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#00ADEF' },
  statLabel: { color: '#999', fontSize: 12 }
});