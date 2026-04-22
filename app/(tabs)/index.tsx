import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D1FAE5', dark: '#064E3B' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pro Fitness Hub</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedText style={styles.introText}>
        Alege un instrument pentru a-ți monitoriza progresul astăzi:
      </ThemedText>

      <View style={styles.menuGrid}>
        {/* Buton BMI */}
        <TouchableOpacity 
          style={[styles.card, { borderLeftColor: '#10B981' }]} 
          onPress={() => router.push('/BMI')}>
          <ThemedText type="subtitle">📏 Calculator IMC</ThemedText>
          <ThemedText type="default">Verifică starea ta fizică.</ThemedText>
        </TouchableOpacity>

        {/* Buton Timer */}
        <TouchableOpacity 
          style={[styles.card, { borderLeftColor: '#3B82F6' }]} 
          onPress={() => router.push('/Timer')}>
          <ThemedText type="subtitle">⏱️ Cronometru</ThemedText>
          <ThemedText type="default">Antrenamente pe intervale.</ThemedText>
        </TouchableOpacity>

        {/* Buton Pași */}
        <TouchableOpacity 
          style={[styles.card, { borderLeftColor: '#F59E0B' }]} 
          onPress={() => router.push('/Steps')}>
          <ThemedText type="subtitle">🚶 Contor Pași</ThemedText>
          <ThemedText type="default">Monitorizează mișcarea zilnică.</ThemedText>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 10,
  },
  introText: {
    marginBottom: 20,
    opacity: 0.7,
  },
  menuGrid: {
    gap: 15,
  },
  card: {
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});