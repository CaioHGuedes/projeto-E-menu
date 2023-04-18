import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <Text>Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#992020',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
