import { Link } from 'expo-router';

// Inside the Safety Switch card:
<Link href="/safety-modal" asChild>
  <TouchableOpacity style={styles.safetyButton}>
    <Text>🔒 Open Safety Switch</Text>
  </TouchableOpacity>
</Link>