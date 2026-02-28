import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SafetyModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.emergencyIcon}>🛑</Text>
      </View>
      
      <Text style={styles.title}>EMERGENCY STOP</Text>
      <Text style={styles.description}>
        All haptic feedback and electrical sensing have been disabled. 
        Please re-engage from the dashboard when safe.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>DISMISS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
  iconContainer: {
    backgroundColor: '#FFE5E5',
    padding: 30,
    borderRadius: 100,
    marginBottom: 20,
  },
  emergencyIcon: { fontSize: 80 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D32F2F', // Material Red
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});