import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, ScrollView } from 'react-native';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isHapticsEnabled, setIsHapticsEnabled] = useState(true);
  const [deviceNickname, setDeviceNickname] = useState('My Zap Watch');

  const ZAP_BLUE = "#00ADEF";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeader}>Device Configuration</Text>
      
      {/* Device Name Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Device Nickname</Text>
        <TextInput 
          style={styles.input}
          value={deviceNickname}
          onChangeText={setDeviceNickname}
          placeholder="e.g. Zap Watch Pro"
        />
      </View>

      <Text style={styles.sectionHeader}>Preferences</Text>

      {/* Toggle Options Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Haptic Feedback</Text>
            <Text style={styles.rowSub}>Enable physical vibrations</Text>
          </View>
          <Switch 
            value={isHapticsEnabled} 
            onValueChange={setIsHapticsEnabled}
            trackColor={{ false: "#ccc", true: ZAP_BLUE }}
            thumbColor="white"
          />
        </View>

        <View style={[styles.row, { borderTopWidth: 1, borderTopColor: '#eee', marginTop: 15, paddingTop: 15 }]}>
          <View>
            <Text style={styles.rowTitle}>Push Notifications</Text>
            <Text style={styles.rowSub}>Alerts for focus milestones</Text>
          </View>
          <Switch 
            value={isNotificationsEnabled} 
            onValueChange={setIsNotificationsEnabled}
            trackColor={{ false: "#ccc", true: ZAP_BLUE }}
            thumbColor="white"
          />
        </View>
      </View>

      <Text style={styles.footerText}>Zap It v1.0.0 | Student Project</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F9FF', // Matching your light blue theme
    padding: 20 
  },
  sectionHeader: { 
    fontSize: 14, 
    fontFamily: 'Nunito-Bold', 
    color: '#00ADEF', 
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
    marginLeft: 5
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    elevation: 3, // Material shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: { 
    fontFamily: 'Nunito-Bold', 
    color: '#444', 
    marginBottom: 8 
  },
  input: { 
    backgroundColor: '#F9FCFF', 
    padding: 15, 
    borderRadius: 12, 
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    borderWidth: 1,
    borderColor: '#E0F4FF'
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  rowTitle: { 
    fontSize: 17, 
    fontFamily: 'Nunito-Bold', 
    color: '#333' 
  },
  rowSub: { 
    fontSize: 13, 
    fontFamily: 'Nunito-Regular', 
    color: '#888' 
  },
  footerText: {
    textAlign: 'center',
    color: '#bbb',
    fontFamily: 'Nunito-Regular',
    marginTop: 10,
    marginBottom: 30
  }
});