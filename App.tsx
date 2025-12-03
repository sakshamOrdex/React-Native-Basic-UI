import { Text, View, Image, TouchableOpacity, Alert, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import New from './components/New';
import FlatCard from './components/FlatCard';
import Card from './components/Card';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  const theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <New />

        <FlatCard />

        <Card />

        <ActionCard />

        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 2,
    paddingHorizontal: 10,
    gap: 10,
    height: "100%",
  },
})
export default App