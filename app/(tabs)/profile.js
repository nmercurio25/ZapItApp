import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [name, setName] = useState('User');
  const [bio, setBio] = useState('Focusing with Zap It.');
  const navigation = useNavigation();

  const ZAP_BLUE = "#00ADEF";

  // Requirement: Add Button to the Upper Right Navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => navigation.navigate('settings/index')}
          style={{ marginRight: 15 }}
        >
          <Ionicons name="settings-outline" size={24} color={ZAP_BLUE} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Profile Image Section */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: 'https://placehold.co/150x150/00ADEF/FFFFFF/png?text=User' }} 
          style={styles.profileImage} 
        />
        <TouchableOpacity style={styles.editBadge}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Display Name</Text>
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

      {/* Stats Section with Nunito Font */}
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
  editText: { color: 'white', fontSize: 12, fontFamily: 'Nunito-Bold' },
  label: { 
    alignSelf: 'flex-start', 
    fontFamily: 'Nunito-Bold', 
    color: '#666', 
    marginBottom: 5 
  },
  input: { 
    width: '100%', 
    backgroundColor: '#F5F9FF', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20, 
    fontSize: 16,
    fontFamily: 'Nunito-Regular'
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 24, fontFamily: 'Nunito-Black', color: '#00ADEF' },
  statLabel: { color: '#999', fontSize: 12, fontFamily: 'Nunito-Regular' }
});