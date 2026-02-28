import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [deviceNickname, setDeviceNickname] = useState('My Zap Watch');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Device Name</Text>
      <TextInput 
        style={styles.input}
        value={deviceNickname}
        onChangeText={setDeviceNickname}
      />

      <View style={styles.row}>
        <Text style={styles.rowText}>Haptic Notifications</Text>
        <Switch 
          value={isNotificationsEnabled} 
          onValueChange={setIsNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#00ADEF" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  sectionLabel: { fontSize: 14, color: '#666', marginBottom: 8 },
  input: { backgroundColor: '#F5F9FF', padding: 15, borderRadius: 10, fontSize: 16, marginBottom: 30 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowText: { fontSize: 18, fontWeight: '500' }
});