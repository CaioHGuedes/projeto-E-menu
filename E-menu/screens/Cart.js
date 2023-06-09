import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cart({ route }) {
  const { value, bill } = route.params

  return (
    <View style={styles.cartContainer}>
      {Object.keys(bill).map((item, index) => {
        if (bill[item].quantity) {
          return (
            <Text style={styles.cartText} key={index}>
              {bill[item].quantity}x {item} &nbsp; R${' '}
              {bill[item].value * bill[item].quantity}
            </Text>
          )
        }
      })}
      <Text style={styles.billText}>Valor total: R$ {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 20
  },
  cartText: {
    color: 'white',
    fontSize: 14
  },
  billText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  }
})
