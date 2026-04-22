import { Stack, useRouter } from 'expo-router'; // Importăm uneltele noi de navigare
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function StepCounterScreen() {
  const [steps, setSteps] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [time, setTime] = useState('');
  const router = useRouter(); // Inițializăm router-ul

  const simulateStep = () => setSteps(steps + 100);

  const handleSendToWorkout = () => {
    if (steps === 0) {
      Alert.alert('Eroare', 'Fă niște pași înainte să trimiți!');
      return;
    }
    setShowInput(true);
  };

  const handleConfirm = () => {
    Keyboard.dismiss();
    const parsedTime = parseFloat(time);
    if (isNaN(parsedTime) || parsedTime <= 0) {
      Alert.alert('Eroare', 'Introdu un timp valid în minute.');
      return;
    }
    
    // În Expo Router, trimitem datele prin parametri în URL sau state
    // Dacă ai un ecran numit 'workout.js' în app, va merge așa:
    router.push({
      pathname: '/workout',
      params: { steps: steps, time: parsedTime }
    });

    setTime('');
    setShowInput(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header cu buton de înapoi */}
      <Stack.Screen options={{ title: 'Pedometru', headerBackTitle: 'Înapoi' }} />

      <View style={styles.circle}>
        <Text style={styles.title}>🚶‍♂️ Activitate</Text>
        <Text style={styles.steps}>{steps}</Text>
        <Text style={styles.stepsLabel}>pași astăzi</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.mainButton} onPress={simulateStep}>
          <Text style={styles.buttonText}>+ 100 Pași</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.secondaryButton, { marginTop: 15 }]} 
          onPress={handleSendToWorkout}>
          <Text style={styles.secondaryButtonText}>Înregistrează Antrenament</Text>
        </TouchableOpacity>
      </View>

      {showInput && (
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>În cât timp ai făcut acești pași?</Text>
          <TextInput
            style={styles.input}
            placeholder="Minute (ex: 30)"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={time}
            onChangeText={setTime}
          />
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirmă Progresul</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 8,
    borderColor: '#3B82F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#64748b',
    marginBottom: 5,
  },
  steps: {
    fontSize: 50,
    fontWeight: '900',
    color: '#1e293b',
  },
  stepsLabel: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 50,
  },
  mainButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  secondaryButtonText: {
    color: '#3B82F6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  confirmButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
});