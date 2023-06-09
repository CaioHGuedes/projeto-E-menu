import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Card({ item, onAddProduct }) {
  const [quantidade, setQuantidade] = useState(0)

  const handleClick = type => {
    if (type === 'plus') {
      setQuantidade(quantidade + 1)
      return
    }
    setQuantidade(quantidade ? quantidade - 1 : 0)
  }

  useEffect(() => {
    onAddProduct(item.name, quantidade)
  }, [quantidade])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',

    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <View style={styles.cardContainer}>
      <Image style={{ width: '100%', height: 100 }} source={item.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.valueText}>{formatter.format(item.value)}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 'auto',
          marginBottom: 10
        }}
      >
        <TouchableOpacity
          style={[styles.buttons, styles.leftButton]}
          onPress={() => handleClick('remove')}
          disabled={!quantidade}
        >
          <Ionicons name="remove" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantidade}</Text>

        <TouchableOpacity
          style={[styles.buttons, styles.rightButton]}
          onPress={() => handleClick('plus')}
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: 300,
    height: 330,
    marginEnd: 10,
    backgroundColor: '#992020',
    borderRadius: 8,
    overflow: 'hidden'
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  descriptionText: {
    fontSize: 10,
    color: 'white'
  },

  valueText: {
    fontSize: 20,
    color: 'white',
    marginTop: 60
  },

  buttons: {
    backgroundColor: 'white',
    padding: 10
  },

  rightButton: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },

  leftButton: {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },

  quantity: {
    padding: 10,
    backgroundColor: 'white',
    fontSize: 18
  }
})
