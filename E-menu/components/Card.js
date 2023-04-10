import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View>
      <Text>Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc1b18',
    alignItems: 'center'
    // justifyContent: 'center',
  }
})
