import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DeepModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Icon Container matching the Study/Safety modal layout */}
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🔥</Text>
      </View>
      
      <Text style={styles.title}>Deep Focus Mode</Text>
      
      <Text style={styles.desc}>
        Maximum intensity activated. Electrical sensing and rhythmic haptics are now at Pro-Grade levels for total immersion.
      </Text>
      
      <TouchableOpacity style={styles.startButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>ENTER FLOW STATE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelText}>Not now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 30, 
    backgroundColor: '#001A2C' // Deep midnight blue 
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent white circle
    padding: 30,
    borderRadius: 100,
    marginBottom: 20,
  },
  icon: { 
    fontSize: 70 
  },
  title: { 
    fontSize: 28, 
    fontFamily: 'Nunito-Black', 
    color: '#fff', 
    marginTop: 10,
    textAlign: 'center'
  },
  desc: { 
    textAlign: 'center', 
    fontFamily: 'Nunito-Regular', 
    color: '#8899A6', 
    marginVertical: 20, 
    lineHeight: 24 
  },
  startButton: { 
    backgroundColor: '#00ADEF', 
    paddingVertical: 18, 
    borderRadius: 30, 
    width: '100%', 
    alignItems: 'center',
    marginTop: 20,
    elevation: 5
  },
  buttonText: { 
    color: '#fff', 
    fontFamily: 'Nunito-Black', 
    fontSize: 16,
    letterSpacing: 1 
  },
  cancelButton: {
    marginTop: 25
  },
  cancelText: {
    color: '#556677',
    fontFamily: 'Nunito-Bold',
    fontSize: 14
  }
});