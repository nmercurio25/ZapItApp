import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';

export default function HeartModal() {
  const router = useRouter();
  
  // 1. Setup the Animation Value
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // 2. Define the Heartbeat Sequence
  useEffect(() => {
    const heartbeat = Animated.loop(
      Animated.sequence([
        // Scale up slightly (the "thump")
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 400,
          useNativeDriver: true,
        }),
        // Scale back to normal
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );

    heartbeat.start();

    // Clean up animation on unmount
    return () => heartbeat.stop();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      {/* 3. Wrap the icon in an Animated.View */}
      <Animated.View 
        style={[
          styles.iconContainer, 
          { transform: [{ scale: pulseAnim }] } // Apply the pulse
        ]}
      >
        <Text style={styles.icon}>❤️</Text>
      </Animated.View>
      
      <Text style={styles.title}>Heart Rate Monitor</Text>
      
      <View style={styles.graphCard}>
        <Text style={styles.bpmLarge}>67 <Text style={styles.bpmUnit}>BPM</Text></Text>
        <View style={styles.linePlaceholder} />
        <Text style={styles.graphLabel}>Real-time vitals synced with Zap It watch</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statVal}>62</Text>
          <Text style={styles.statName}>Min</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statVal}>74</Text>
          <Text style={styles.statName}>Max</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeText}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 30 },
  iconContainer: { 
    backgroundColor: '#FFF0F0', 
    padding: 25, 
    borderRadius: 100, 
    marginBottom: 15,
    // Ensure shadow/elevation stays consistent during animation
    elevation: 2 
  },
  icon: { fontSize: 60 },
  title: { fontSize: 26, fontFamily: 'Nunito-Black', color: '#00ADEF', marginBottom: 20 },
  graphCard: { width: '100%', backgroundColor: '#F5F9FF', borderRadius: 20, padding: 20, alignItems: 'center' },
  bpmLarge: { fontSize: 50, fontFamily: 'Nunito-Black', color: '#00ADEF' },
  bpmUnit: { fontSize: 18, fontFamily: 'Nunito-Regular', color: '#666' },
  linePlaceholder: { width: '100%', height: 2, backgroundColor: '#00ADEF', marginVertical: 20, opacity: 0.3 },
  graphLabel: { fontFamily: 'Nunito-Regular', color: '#888', fontSize: 13 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
  statBox: { backgroundColor: '#fff', width: '45%', padding: 15, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  statVal: { fontSize: 20, fontFamily: 'Nunito-Bold' },
  statName: { fontSize: 12, fontFamily: 'Nunito-Regular', color: '#999' },
  closeButton: { backgroundColor: '#333', marginTop: 40, paddingVertical: 15, paddingHorizontal: 50, borderRadius: 30 },
  closeText: { color: '#fff', fontFamily: 'Nunito-Bold' }
});