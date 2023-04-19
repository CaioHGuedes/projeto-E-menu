import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import Header from './components/Header'
import Container from './components/Container'
import Session from './components/Session'
import { useEffect, useState } from 'react'
import { CARDAPIO } from './utils/constants'

export default function App() {
  const [cardapio, setCardapio] = useState(CARDAPIO)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search) {
      const newPizzas = CARDAPIO.PIZZAS.filter(item =>
        item.name.includes(search)
      )
      const newBebidas = CARDAPIO.BEBIDAS.filter(item =>
        item.name.includes(search)
      )
      setCardapio(oldValue => ({ ...oldValue, PIZZAS: newPizzas, BEBIDAS: newBebidas }))
    } else {
      setCardapio(CARDAPIO)
    }
  }, [search])

  return (
    <ScrollView style={styles.container}>
      <Header search={search} setSearch={setSearch} />
      <View style={{ padding: 10 }}>
        <Session title="Pizzas" />
        <Container content={cardapio.PIZZAS} />
        <Session title="Bebidas" />
        <Container content={cardapio.BEBIDAS} />
      </View>
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
