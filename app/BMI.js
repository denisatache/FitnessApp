import { Stack } from 'expo-router'; // Importăm Stack pentru a configura header-ul
import { useState } from 'react';
import {
  Dimensions, Keyboard,
  ScrollView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  const calculateBMI = () => {
    Keyboard.dismiss(); 
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const result = w / (h * h);
      const rounded = result.toFixed(2);
      setBmi(rounded);
      interpretBMI(result);
    }
  };

  const interpretBMI = (value) => {
    if (value < 18.5) setInterpretation('🔵 Subponderal');
    else if (value < 25) setInterpretation('🟢 Greutate normală');
    else if (value < 30) setInterpretation('🟡 Supraponderal');
    else if (value < 35) setInterpretation('🟠 Obezitate grad I');
    else if (value < 40) setInterpretation('🔴 Obezitate grad II');
    else setInterpretation('🔴🔴 Obezitate severă (III)');
  };

  const getIndicatorPosition = () => {
    const min = 10;
    const max = 45;
    const width = Dimensions.get('window').width - 48;
    const clampedBMI = Math.max(min, Math.min(max, parseFloat(bmi) || 0));
    const percent = (clampedBMI - min) / (max - min);
    return percent * width;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Această linie adaugă titlul și butonul de Back automat */}
      <Stack.Screen options={{ title: 'Calculator IMC', headerBackTitle: 'Înapoi' }} />

      <Text style={styles.title}>📏 Analiză Corporală</Text>

      <View style={styles.inputCard}>
        <Text style={styles.label}>Greutatea ta (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 75"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <Text style={styles.label}>Înălțimea ta (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 180"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculează Rezultatul</Text>
        </TouchableOpacity>
      </View>

      {bmi && (
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Indicele tău BMI este:</Text>
          <Text style={styles.resultValue}>{bmi}</Text>
          <Text style={styles.interpret}>{interpretation}</Text>

          <View style={styles.barContainer}>
            <View style={[styles.bar, { backgroundColor: '#2196F3' }]} />
            <View style={[styles.bar, { backgroundColor: '#4CAF50' }]} />
            <View style={[styles.bar, { backgroundColor: '#FFEB3B' }]} />
            <View style={[styles.bar, { backgroundColor: '#FF9800' }]} />
            <View style={[styles.bar, { backgroundColor: '#F44336' }]} />
          </View>
          {/* Indicatorul poziționat relativ la bară */}
          <View style={[styles.indicator, { left: getIndicatorPosition() }]} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginVertical: 20,
  },
  inputCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 15,
    marginLeft: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f3f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#10B981',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultCard: {
    width: '100%',
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    position: 'relative',
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultValue: {
    fontSize: 48,
    fontWeight: '800',
    color: '#10B981',
    marginVertical: 10,
  },
  interpret: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  bar: { flex: 1 },
  indicator: {
    position: 'absolute',
    bottom: 25, // Ajustat să fie sub bară
    width: 4,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 2,
  },
});