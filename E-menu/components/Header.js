import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import logo from '../assets/LOGO.png'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerImage} source={logo} />
      <View style={styles.searchContainer}>
        <Ionicons name="search-sharp" size={18} color="white" />
        <TextInput placeholder="buscar..." style={styles.textInput} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000000',
    height: 200,
    width: '100%',
    borderRadius: 27,
    alignItems: 'center',
    shadowColor: '#52006A',
    elevation: 20
  },

  headerText: {
    color: 'white'
  },

  headerImage: {
    flex: 0.9,
    width: 130,
    height: 10,
    resizeMode: 'center'
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#777',
    padding: 3,
    paddingLeft: 13,
    //margin: 5,
    width: 250,
    borderRadius: 10
  },

  textInput: {
    color: 'white',
    marginLeft: 3
  }
})
