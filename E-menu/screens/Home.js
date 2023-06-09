import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Session from '../components/Session'
import { CARDAPIO } from '../utils/constants'

export default function Home({ navigation }) {
  const [cardapio, setCardapio] = useState(CARDAPIO)
  const [search, setSearch] = useState('')
  const [value, setValue] = useState(0)
  const [bill, setBill] = useState({})

  useEffect(() => {
    if (search) {
      const newPizzas = CARDAPIO.PIZZAS.filter(item =>
        item.name.includes(search)
      )
      const newBebidas = CARDAPIO.BEBIDAS.filter(item =>
        item.name.includes(search)
      )
      setCardapio(oldValue => ({
        ...oldValue,
        PIZZAS: newPizzas,
        BEBIDAS: newBebidas
      }))
    } else {
      setCardapio(CARDAPIO)
    }
  }, [search])

  useEffect(() => {
    const pizzas = CARDAPIO.PIZZAS.map(pizza => ({
      name: pizza.name,
      value: pizza.value
    }))
    const bebidas = CARDAPIO.BEBIDAS.map(bebida => ({
      name: bebida.name,
      value: bebida.value
    }))
    const billPizzas = pizzas.reduce(
      (accumulator, pizza) => ({
        ...accumulator,
        [pizza.name]: { value: pizza.value, quantity: 0 }
      }),
      {}
    )
    const billBebidas = bebidas.reduce(
      (accumulator, bebida) => ({
        ...accumulator,
        [bebida.name]: { value: bebida.value, quantity: 0 }
      }),
      {}
    )

    setBill({ ...billPizzas, ...billBebidas })
  }, [])

  useEffect(() => {
    const newValue = Object.keys(bill).reduce((accumulator, item) => {
      return bill[item].quantity * bill[item].value + accumulator
    }, 0)
    setValue(newValue)
  }, [bill])

  const handleBillModification = (item, quantity) => {
    const newBill = { ...bill }
    newBill[item] = { ...newBill[item], quantity }
    setBill(newBill)
  }

  return (
    <ScrollView style={styles.container}>
      <Header search={search} setSearch={setSearch} />
      <View style={{ padding: 10 }}>
        <Session title="Pizzas" />
        <Container
          onAddProduct={handleBillModification}
          content={cardapio.PIZZAS}
        />
        <Session title="Bebidas" />
        <Container
          onAddProduct={handleBillModification}
          content={cardapio.BEBIDAS}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Cart', { value, bill })}
      >
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 14,
    backgroundColor: '#fff'
  },
  buttonText: {
    color: 'black',
    fontSize: 18
  }
})
