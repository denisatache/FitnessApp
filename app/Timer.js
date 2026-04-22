import { Stack } from 'expo-router'; // Pentru butonul de Back
import { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLap = () => {
    setLaps((prev) => [seconds, ...prev]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  return (
    <View style={styles.container}>
      {/* Configurează header-ul paginii */}
      <Stack.Screen options={{ title: 'Timer Antrenament', headerBackTitle: 'Înapoi' }} />

      <Text style={styles.title}>⏱️ Cronometru</Text>
      
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
            style={[styles.button, isRunning ? styles.stopButton : styles.startButton]} 
            onPress={() => setIsRunning(!isRunning)}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLap} disabled={!isRunning}>
          <Text style={[styles.buttonText, !isRunning && { color: '#666' }]}>Lap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Înregistrări Rulante (Laps)</Text>
        <FlatList
          data={laps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.lapRow}>
              <Text style={styles.lapNumber}>Lap {laps.length - index}</Text>
              <Text style={styles.lapTime}>{formatTime(item)}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>Nicio înregistrare încă</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#111827', // Dark background profesional
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F97316', // Portocaliu de cronometru
    marginTop: 40,
    marginBottom: 20,
  },
  timerContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 80,
    fontWeight: '200',
    color: '#fff',
    fontVariant: ['tabular-nums'], // Previne "săritul" cifrelor
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 40,
  },
  button: {
    backgroundColor: '#374151',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  stopButton: {
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 20,
  },
  listTitle: {
    color: '#9CA3AF',
    marginBottom: 15,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  lapNumber: {
    color: '#fff',
    fontSize: 18,
  },
  lapTime: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'monospace',
  },
  empty: {
    color: '#4B5563',
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
  },
});