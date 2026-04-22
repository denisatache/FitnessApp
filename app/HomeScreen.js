import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/home-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🏠 Home – Antrenamente</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StepCounter')}>
          <Text style={styles.buttonText}>🚶‍♂️ Step Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
          <Text style={styles.buttonText}>⏱️ Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BMI')}>
          <Text style={styles.buttonText}>📏 BMI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
          <Text style={styles.buttonText}>📅 History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Extras')}>
          <Text style={styles.buttonText}>✨ Extras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StartWorkout')}>
          <Text style={styles.buttonText}>🏋️‍♀️ Start Workout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e84393',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
