import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Session({ title }) {
  return (
    <View style={styles.sessionContainer}>
      <Text style={styles.sessionText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sessionContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },

  sessionText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold'
  }
})
