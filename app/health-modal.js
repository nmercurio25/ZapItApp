import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';

// Component name updated to HealthModal
export default function HealthModal() {
    const router = useRouter();

    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const heartbeat = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
            ])
        );

        heartbeat.start();
        return () => heartbeat.stop();
    }, [pulseAnim]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.iconContainer,
                    { transform: [{ scale: pulseAnim }] }
                ]}
            >
                <Text style={styles.icon}>❤️</Text>
            </Animated.View>

            <Text style={styles.title}>Health Monitor</Text>

            <View style={styles.bpmCard}>
                <Text style={styles.bpmLarge}>67 <Text style={styles.bpmUnit}>BPM</Text></Text>
                <View style={styles.linePlaceholder} />
                <Text style={styles.graphLabel}>Last synced: 2 mins ago</Text>
            </View>

            <View style={styles.graphCard}>
                <View style={styles.graphHeader}>
                    <Text style={styles.graphTitle}>Activity Graph</Text>
                    <Text style={styles.graphTime}>Last 30 Mins</Text>
                </View>

                <View style={styles.mockGraph}>
                    <View style={[styles.graphBar, { height: '40%' }]} />
                    <View style={[styles.graphBar, { height: '60%' }]} />
                    <View style={[styles.graphBar, { height: '45%' }]} />
                    <View style={[styles.graphBar, { height: '80%' }]} />
                    <View style={[styles.graphBar, { height: '55%' }]} />
                    <View style={[styles.graphBar, { height: '70%' }]} />
                    <View style={[styles.graphBar, { height: '90%' }]} />
                    <View style={[styles.graphBar, { height: '50%' }]} />
                </View>
            </View>

            <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                    <Text style={styles.statEmoji}>⚡</Text>
                    <Text style={styles.statValue}>12</Text>
                    <Text style={styles.statName}>Zaps Today</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statEmoji}>📈</Text>
                    <Text style={styles.statValue}>-5%</Text>
                    <Text style={styles.statName}>Avg. Stress</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
                <Text style={styles.closeText}>BACK TO DASHBOARD</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 25 },
    iconContainer: { backgroundColor: '#FFF0F0', padding: 25, borderRadius: 100, marginBottom: 15, elevation: 2 },
    icon: { fontSize: 60 },
    title: { fontSize: 26, fontFamily: 'Nunito-Black', color: '#00ADEF', marginBottom: 20 },
    bpmCard: { width: '100%', backgroundColor: '#F5F9FF', borderRadius: 20, padding: 20, alignItems: 'center', marginBottom: 15 },
    bpmLarge: { fontSize: 50, fontFamily: 'Nunito-Black', color: '#00ADEF' },
    bpmUnit: { fontSize: 18, fontFamily: 'Nunito-Regular', color: '#666' },
    linePlaceholder: { width: '100%', height: 2, backgroundColor: '#00ADEF', marginVertical: 15, opacity: 0.2 },
    graphLabel: { fontFamily: 'Nunito-Regular', color: '#888', fontSize: 12 },
    graphCard: { width: '100%', backgroundColor: '#fff', borderRadius: 20, padding: 20, elevation: 3, marginBottom: 15 },
    graphHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    graphTitle: { fontFamily: 'Nunito-Bold', fontSize: 16, color: '#333' },
    graphTime: { fontFamily: 'Nunito-Regular', fontSize: 12, color: '#999' },
    mockGraph: { height: 80, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
    graphBar: { width: 12, backgroundColor: '#00ADEF', borderRadius: 6, opacity: 0.6 },
    statsGrid: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 25 },
    statCard: { backgroundColor: '#fff', width: '48%', padding: 15, borderRadius: 15, alignItems: 'center', elevation: 2, borderWidth: 1, borderColor: '#F0F0F0' },
    statEmoji: { fontSize: 24, marginBottom: 5 },
    statValue: { fontSize: 20, fontFamily: 'Nunito-Black', color: '#333' },
    statName: { fontSize: 12, fontFamily: 'Nunito-Regular', color: '#999' },
    closeButton: { backgroundColor: '#00ADEF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, width: '100%', alignItems: 'center' },
    closeText: { color: '#fff', fontFamily: 'Nunito-Bold', fontSize: 16 },
    lastSyncedText: { fontFamily: 'Nunito-Regular',fontSize: 12, color: '#888', marginTop: 4},
});