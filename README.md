⚡ Zap It: Wearable Focus & Bio-Feedback Monitor
Course: Emerging Technologies (COMP265)

Student: Nicole Mercurio

Institution: Saskatchewan Polytechnic

Program: Interactive Design and Technology

📖 Project Overview
Zap It is a concept mobile application designed to interface with a wearable "Zap" device. It uses emerging haptic technology to assist users with ADHD or focus-related challenges by providing tactile "Zaps" (vibrations) to anchor attention. This project explores the intersection of biometric monitoring and behavioral conditioning through a mobile interface.

🛠️ Core Functions & Features
1. Real-Time Biometric Monitoring

The Health Monitor screen simulates a live connection to a wearable sensor.

Heartbeat Animation: Uses the React Native Animated API to provide a visual pulse synced with a mock 67 BPM reading.

Vitals Dashboard: Tracks minimum and maximum heart rate to monitor user stress levels during focus sessions.

2. Adaptive Focus Modes

The app offers two distinct emerging-tech focus loops:

Study Mode: A low-intensity loop that triggers haptics at set intervals to prevent "mind-wandering." Includes a TextInput for goal setting.

Deep Focus Mode: A high-intensity "Flow State" mode with a dark-themed UI to reduce visual distractions and increase haptic frequency.

3. Remote Haptic Interaction (The "Poke")

Located in the Sharing tab, this feature simulates a peer-to-peer focus network.

Haptic Feedback: Utilizing the expo-haptics library, users can send a physical "vibration" to a friend’s device to help them stay on task.

4. Safety Architecture

Because this technology involves physical stimulation, a Safety Switch (Emergency Stop) is implemented as a high-priority modal to instantly kill all device processes.

🏗️ Technical Implementation (Requirements Met)
UI Components

Layouts: View, ScrollView, SafeAreView.

Interaction: TouchableOpacity, Switch (Settings), Slider (Intensity).

Media: Image (Profile avatars) and Ionicons (Vector iconography).

Inputs: TextInput with state management for user bios and study goals.

Navigation & Routing (Expo Router)

The app utilizes a hybrid navigation architecture:

Tab Navigation: Home, Sharing, Profile.

Stack Navigation: settings/index, add-device.

Modal Presentation: 4 unique modals (health, safety, study, deep).

Dynamic Routing: Supports user/[id] paths for community profiles.

Design System

Typography: Integration of Google Fonts (Nunito) with three weights (Regular, Bold, Black) for a professional product look.

Platform Optimization: Styled specifically for Android using elevation properties and Material Design spacing.

📦 Project Structure
Plaintext
ZapItApp/
├── app/                 # Expo Router directory
│   ├── (tabs)/          # Main Tab Navigator
│   ├── settings/        # Nested Settings Stack
│   ├── _layout.js       # Root Stack & Font Loading
│   ├── health-modal.js  # Animated Health Screen
│   └── safety-modal.js  # Emergency Stop
├── assets/              # Nunito Font files & Branding
└── package.json         # Dependencies (Haptics, Slider, etc.)
🚦 Getting Started
Install: npm install

Launch: npx expo start -c

Hardware: Best viewed on an Android Emulator or physical device via Expo Go to experience the expo-haptics feedback.

Final Student Note: This application serves as a prototype for emerging wearable technologies, focusing on how haptic feedback can be used as a non-invasive tool for cognitive enhancement.