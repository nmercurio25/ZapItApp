import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, ScrollView, 
  TextInput, Switch, TouchableOpacity, Button 
} from 'react-native';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [intensity, setIntensity] = useState(50);
  const ZAP_BLUE = "#00ADEF";

  return (
    <ScrollView style={styles.container}>
      {/* Zap It Branding Header */}
      <View style={styles.header}>
        <Text style={styles.brandTitle}>ZAP IT.</Text>
        <Text style={styles.tagline}>Precision in every pulse</Text>
      </View>

      {/* Heart Rate Card - From Wireframe */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Heart Rate</Text>
          <Text style={styles.battery}>🔋 100%</Text>
        </View>
        <View style={styles.hrContent}>
          <Text style={styles.bpmText}>❤️ 67 <Text style={styles.bpmSub}>BPM</Text></Text>
          <View style={styles.waveContainer}>
            <View style={[styles.waveBar, {height: 15}]} />
            <View style={[styles.waveBar, {height: 35}]} />
            <View style={[styles.waveBar, {height: 20}]} />
            <View style={[styles.waveBar, {height: 40}]} />
            <View style={[styles.waveBar, {height: 10}]} />
          </View>
        </View>
      </View>

      {/* Haptics Card - Uses Third-Party Slider */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Haptics Intensity</Text>
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={ZAP_BLUE}
          maximumTrackTintColor="#000000"
          value={intensity}
          onValueChange={setIntensity}
        />
        <Text style={styles.intensityLabel}>{Math.floor(intensity)}% Power</Text>
      </View>

      {/* Mode Selectors - From Wireframe */}
      <View style={styles.modesContainer}>
        <TouchableOpacity style={styles.modeBox}>
          <Text style={styles.modeIcon}>⏳</Text>
          <Text style={styles.modeText}>STUDY MODE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modeBox}>
          <Text style={styles.modeIcon}>🔥</Text>
          <Text style={styles.modeText}>DEEP MODE</Text>
        </TouchableOpacity>
      </View>

      {/* Safety Switch - Requirement: Modal Navigation */}
      <Link href="/safety-modal" asChild>
        <TouchableOpacity style={StyleSheet.flatten([styles.card, styles.safetyCard])}>
          <View style={styles.row}>
            <View>
              <Text style={styles.safetyTitle}>Safety Switch</Text>
              <Text style={styles.safetySub}>Tap to disable all haptics</Text>
            </View>
            <Text style={{fontSize: 30}}>🔒</Text>
          </View>
        </TouchableOpacity>
      </Link>

      {/* Device Link - Requirement: URL Parameter Navigation */}
      <View style={{padding: 20, paddingBottom: 40}}>
        <Link href="/device/zap-watch-01" asChild>
          <TouchableOpacity style={styles.deviceButton}>
            <Text style={styles.deviceButtonText}>View Connected Device</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F9FF' 
  },
  header: { 
    padding: 25, 
    backgroundColor: '#00ADEF', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  brandTitle: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  tagline: { 
    color: 'white', 
    opacity: 0.9, 
    fontSize: 14 
  },
  card: { 
    backgroundColor: 'white', 
    margin: 15, 
    padding: 20, 
    borderRadius: 20, 
    elevation: 4 
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  battery: { 
    fontWeight: 'bold', 
    color: '#4CAF50' 
  },
  bpmText: { 
    fontSize: 48, 
    fontWeight: 'bold', 
    color: '#00ADEF' 
  },
  bpmSub: { 
    fontSize: 18, 
    color: '#666' 
  },
  waveContainer: { 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    height: 40, 
    gap: 4, 
    marginTop: 5 
  },
  waveBar: { 
    width: 6, 
    backgroundColor: '#E0F4FF', 
    borderRadius: 3 
  },
  intensityLabel: { 
    textAlign: 'center', 
    color: '#00ADEF', 
    fontWeight: 'bold' 
  },
  modesContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingHorizontal: 10 
  },
  modeBox: { 
    backgroundColor: 'white', 
    width: '42%', 
    padding: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    elevation: 2 
  },
  modeIcon: { 
    fontSize: 35 
  },
  modeText: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    marginTop: 8 
  },
  safetyCard: { 
    borderLeftWidth: 8, 
    borderLeftColor: '#ff4444' 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  safetyTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#ff4444' 
  },
  safetySub: { 
    color: '#666', 
    fontSize: 12 
  },
  deviceButton: {
    backgroundColor: '#00ADEF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  },
  deviceButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});