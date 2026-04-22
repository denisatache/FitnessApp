import { FlatList, StyleSheet, Text, View } from 'react-native';

const mockData = [
  { id: '1', date: '2026-04-01', steps: 4230 },
  { id: '2', date: '2026-04-16', steps: 6750 },
  { id: '3', date: '2026-04-21', steps: 5340 },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Istoric Activitate</Text>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryText}>📆 {item.date}</Text>
            <Text style={styles.entryText}>👣 {item.steps} pași</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nu există activitate înregistrată.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  entry: {
    backgroundColor: '#ecf0f1',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  entryText: {
    fontSize: 18,
    color: '#34495e',
  },
  emptyText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gray',
    fontSize: 16,
    marginTop: 40,
  },
});
