import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from './components/Header'
import Card from './components/Card'
import Session from './components/Session'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Session title="Pizzas" />
      <Card />

      <StatusBar style="light" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
    // alignItems: 'center'
    // justifyContent: 'center',
  }
})
