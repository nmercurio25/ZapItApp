import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudyModal() {
  const router = useRouter();
  const [goal, setGoal] = useState('');

  return (
    <View style={styles.container}>
      {/* Icon Container matching Safety/Deep modal style */}
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⏳</Text>
      </View>
      
      <Text style={styles.title}>Study Mode</Text>
      
      <Text style={styles.desc}>
        Haptics will trigger every 10 minutes to keep you alert and focused on your task.
      </Text>

      {/* Requirement: TextInput for study goal */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>What are you studying?</Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. Interactive Design"
          placeholderTextColor="#999"
          value={goal}
          onChangeText={setGoal}
        />
      </View>

      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>START SESSION</Text>
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
    backgroundColor: '#E0F4FF', // Light blue background for the icon
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
    color: '#00ADEF', 
    marginBottom: 10 
  },
  desc: { 
    textAlign: 'center', 
    fontFamily: 'Nunito-Regular', 
    color: '#666', 
    lineHeight: 22, 
    marginBottom: 30 
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 40,
  },
  label: {
    fontFamily: 'Nunito-Bold',
    color: '#333',
    marginBottom: 8,
    fontSize: 14,
  },
  input: { 
    width: '100%', 
    backgroundColor: '#F5F9FF', 
    padding: 15, 
    borderRadius: 15, 
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0F4FF'
  },
  startButton: { 
    backgroundColor: '#00ADEF', 
    paddingVertical: 18, 
    borderRadius: 30, 
    width: '100%', 
    alignItems: 'center',
    elevation: 3
  },
  buttonText: { 
    color: '#fff', 
    fontFamily: 'Nunito-Black', 
    fontSize: 16,
    letterSpacing: 1
  }
});