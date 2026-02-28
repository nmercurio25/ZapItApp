import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SafetyModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Icon Container to match the other modal designs */}
      <View style={styles.iconContainer}>
        <Text style={styles.emergencyIcon}>🛑</Text>
      </View>
      
      <Text style={styles.title}>ZAP DISABLED</Text>
      
      <Text style={styles.description}>
        All haptic feedback and electrical sensing have been paused. 
        Please ensure you are in a safe environment before re-engaging.
      </Text>

      {/* Custom TouchableOpacity to replace the basic Button component */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>RESUME SESSION</Text>
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
    padding: 30 
  },
  iconContainer: {
    backgroundColor: '#FFE5E5', // Light red background for the icon
    padding: 30,
    borderRadius: 100,
    marginBottom: 20,
  },
  emergencyIcon: { 
    fontSize: 80 
  },
  title: {
    fontSize: 28,
    fontFamily: 'Nunito-Black', // Consistent with your branding
    color: '#D32F2F', 
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
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
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});