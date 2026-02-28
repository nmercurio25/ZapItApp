import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [intensity, setIntensity] = useState(50);
  const ZAP_BLUE = "#00ADEF";

  return (
    <ScrollView style={styles.container}>
      {/* Branding Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.brandTitle}>ZAP IT.</Text>
            <Text style={styles.tagline}>Precision in every pulse</Text>
          </View>
          {/* REQUIREMENT: Add Device Button with Icon */}
          <Link href="/add-device" asChild>
            <TouchableOpacity style={styles.addIconButton}>
              <Ionicons name="add-circle" size={40} color="white" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Heart Rate Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Heart Rate</Text>
          <Text style={styles.batteryText}>🔋 100%</Text>
        </View>
        <Text style={styles.bpmText}>❤️ 67 <Text style={styles.bpmSub}>BPM</Text></Text>
      </View>

      {/* Haptics Intensity Slider */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Haptics Intensity</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={ZAP_BLUE}
          value={intensity}
          onValueChange={setIntensity}
        />
        <Text style={styles.intensityVal}>{Math.floor(intensity)}% Power</Text>
      </View>

      {/* Mode Selection Modals */}
      <View style={styles.modesContainer}>
        <Link href="/study-modal" asChild>
          <TouchableOpacity style={styles.modeBox}>
            <Text style={styles.modeIcon}>⏳</Text>
            <Text style={styles.modeLabel}>STUDY</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/deep-modal" asChild>
          <TouchableOpacity style={styles.modeBox}>
            <Text style={styles.modeIcon}>🔥</Text>
            <Text style={styles.modeLabel}>DEEP</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Safety Switch Modal */}
      <Link href="/safety-modal" asChild>
        <TouchableOpacity style={StyleSheet.flatten([styles.card, styles.safetyCard])}>
          <Text style={styles.safetyTitle}>Safety Switch 🔒</Text>
          <Text style={styles.safetySub}>Tap for Emergency Stop</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F9FF' },
  header: { 
    padding: 25, 
    backgroundColor: '#00ADEF', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brandTitle: { fontSize: 32, fontFamily: 'Nunito-Black', color: 'white' },
  tagline: { fontFamily: 'Nunito-Regular', color: 'white', opacity: 0.9, fontSize: 14 },
  addIconButton: { padding: 5 },
  card: { backgroundColor: 'white', margin: 15, padding: 20, borderRadius: 20, elevation: 4 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 18, fontFamily: 'Nunito-Bold', color: '#333' },
  batteryText: { color: '#4CAF50', fontFamily: 'Nunito-Bold' },
  bpmText: { fontSize: 48, fontFamily: 'Nunito-Black', color: '#00ADEF' },
  bpmSub: { fontSize: 18, color: '#666', fontFamily: 'Nunito-Regular' },
  intensityVal: { textAlign: 'center', color: '#00ADEF', fontFamily: 'Nunito-Bold' },
  modesContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  modeBox: { backgroundColor: 'white', width: '42%', padding: 20, borderRadius: 20, alignItems: 'center', elevation: 2 },
  modeIcon: { fontSize: 30 },
  modeLabel: { fontFamily: 'Nunito-Bold', marginTop: 5 },
  safetyCard: { borderLeftWidth: 8, borderLeftColor: '#ff4444' },
  safetyTitle: { color: '#ff4444', fontFamily: 'Nunito-Bold', fontSize: 18 },
  safetySub: { color: '#666', fontFamily: 'Nunito-Regular' }
});