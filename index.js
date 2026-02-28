import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, ScrollView, 
  TextInput, Switch, TouchableOpacity, Button 
} from 'react-native';
import Slider from '@react-native-community/slider'; // Third-party module

export default function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [intensity, setIntensity] = useState(50);
  const [search, setSearch] = useState('');

  // Constants for theme
  const ZAP_BLUE = "#00ADEF";
  const LIGHT_BLUE = "#E0F4FF";

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.brandTitle}>ZAP IT.</Text>
        <TextInput 
          style={styles.searchBar}
          placeholder="Search devices..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Heart Rate Card (From Wireframe) */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Heart Rate</Text>
          <Text style={styles.battery}>100%</Text>
        </View>
        <View style={styles.hrContent}>
          <Text style={styles.bpmText}>❤️ 67 <Text style={{fontSize: 18}}>BPM</Text></Text>
          {/* Placeholder for the wave image */}
          <View style={styles.wavePlaceholder} />
        </View>
      </View>

      {/* Haptics Control Card (From Wireframe) */}
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

      {/* Modes Grid */}
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

      {/* Safety Switch (From Wireframe) */}
      <View style={[styles.card, styles.safetyCard]}>
        <View style={styles.row}>
          <View>
            <Text style={styles.safetyTitle}>Safety Switch</Text>
            <Text style={styles.safetySub}>Instantly disable all haptics</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#ff4444" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            onValueChange={() => setIsEnabled(previousState => !previousState)}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={{padding: 20}}>
        <Button title="Add New Device" color={ZAP_BLUE} onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  header: {
    padding: 20,
    backgroundColor: '#00ADEF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    elevation: 4, // Android shadow
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bpmText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00ADEF',
  },
  wavePlaceholder: {
    height: 40,
    width: '100%',
    backgroundColor: '#E0F4FF',
    marginTop: 10,
    borderRadius: 5,
  },
  modesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  modeBox: {
    backgroundColor: 'white',
    width: '45%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 2,
  },
  modeText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modeIcon: {
    fontSize: 30,
  },
  safetyCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#ff4444',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  safetyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  intensityLabel: {
    textAlign: 'center',
    color: '#00ADEF',
    fontWeight: 'bold',
  }
});