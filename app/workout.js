import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StartWorkout() {
  // Pasul 1: Extragem datele trimise de la Pedometru
  // Folosim valori default (0) în caz că cineva accesează pagina direct
  const { steps, time } = useLocalSearchParams(); 

  // Pasul 2: Calculăm ceva extra (opțional, pentru design)
  const caloriesBurned = (parseFloat(steps) * 0.04).toFixed(1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Configurează titlul de sus și butonul de înapoi */}
      <Stack.Screen options={{ 
        title: 'Rezumat Antrenament',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#3b82f6' }
      }} />
      
      <View style={styles.card}>
        <Text style={styles.congratsText}>🎊 Felicitări!</Text>
        <Text style={styles.subtitle}>Ai finalizat sesiunea de mișcare.</Text>
        
        <View style={styles.divider} />

        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>PAȘI</Text>
            <Text style={styles.statValue}>{steps || 0}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>MINUTE</Text>
            <Text style={styles.statValue}>{time || 0}</Text>
          </View>
        </View>

        <View style={[styles.statBox, { width: '100%', marginTop: 20 }]}>
          <Text style={styles.statLabel}>CALORII ESTIMATE</Text>
          <Text style={[styles.statValue, { color: '#ef4444' }]}>{caloriesBurned} kcal</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => { /* Navigarea înapoi este automată din header, dar putem adăuga butoane aici */ }}
      >
        <Text style={styles.backButtonText}>Salvează în Jurnal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginTop: 20,
  },
  congratsText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 25,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 15,
    width: '45%',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: 1,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#3b82f6',
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#10b981',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});