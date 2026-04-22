import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExtrasScreen() {
  const handleTip = () => {
    Alert.alert('💡 Sfat rapid', 'Bea apă și fă 5 minute de stretching!');
  };

  const handleInspiration = () => {
    Alert.alert('🔥 Motivație', '„Disciplină > Motivație” – continuă să te miști!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Extras</Text>

      <TouchableOpacity style={styles.card} onPress={handleTip}>
        <Text style={styles.cardText}>💧 Sfat pentru azi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleInspiration}>
        <Text style={styles.cardText}>🚀 Citat motivațional</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6f0',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#c2185b',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffb3d9',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: '#2d3436',
    textAlign: 'center',
  },
});
