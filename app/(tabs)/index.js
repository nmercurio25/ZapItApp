import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
    const [intensity, setIntensity] = useState(50);
    const ZAP_BLUE = "#00ADEF";

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.brandTitle}>ZAP IT.</Text>
                <Text style={styles.tagline}>Precision in every pulse</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Heart Rate</Text>
                    <Text style={{ color: '#4CAF50', fontWeight: 'bold' }}>🔋 100%</Text>
                </View>
                <Text style={styles.bpmText}>❤️ 67 <Text style={{ fontSize: 18, color: '#666' }}>BPM</Text></Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Haptics Intensity</Text>
                <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0} maximumValue={100}
                    minimumTrackTintColor={ZAP_BLUE}
                    value={intensity}
                    onValueChange={setIntensity}
                />
                <Text style={{ textAlign: 'center', color: ZAP_BLUE }}>{Math.floor(intensity)}% Power</Text>
            </View>

            <View style={styles.modesContainer}>
                <Link href="/study-modal" asChild>
                    <TouchableOpacity style={styles.modeBox}>
                        <Text style={styles.modeIcon}>⏳</Text>
                        <Text style={styles.modeText}>STUDY MODE</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/deep-modal" asChild>
                    <TouchableOpacity style={styles.modeBox}>
                        <Text style={styles.modeIcon}>🔥</Text>
                        <Text style={styles.modeText}>DEEP MODE</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <Link href="/safety-modal" asChild>
                <TouchableOpacity style={StyleSheet.flatten([styles.card, { borderLeftWidth: 8, borderLeftColor: '#ff4444' }])}>
                    <Text style={{ color: '#ff4444', fontWeight: 'bold' }}>Safety Switch 🔒</Text>
                    <Text style={{ color: '#666' }}>Tap for Emergency Stop</Text>
                </TouchableOpacity>
            </Link>

            <View style={{ padding: 20 }}>
                <Link href="/device/zap-watch-pro" asChild>
                    <Button title="View Device Status" color={ZAP_BLUE} />
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F9FF' },
    header: { padding: 25, backgroundColor: '#00ADEF', borderBottomRightRadius: 30 },
    brandTitle: { fontSize: 32, fontWeight: 'bold', color: 'white' },
    tagline: { color: 'white', opacity: 0.8 },
    card: { backgroundColor: 'white', margin: 15, padding: 20, borderRadius: 20, elevation: 4 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    cardTitle: { fontSize: 18, fontWeight: 'bold' },
    bpmText: { fontSize: 48, fontWeight: 'bold', color: '#00ADEF' },
    modesContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
    modeBox: { backgroundColor: 'white', width: '40%', padding: 20, borderRadius: 20, alignItems: 'center', elevation: 2 }
});