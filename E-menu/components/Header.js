import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import logo from '../assets/LOGO.png'
import { Ionicons } from '@expo/vector-icons'

export default function Header({ search, setSearch }) {

  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerImage} source={logo} />
      <Ionicons
        style={{ position: 'absolute', right: 15, top: 40 }}
        name="menu"
        size={35}
        color="white"
      />
      <View style={styles.searchContainer}>
        <Ionicons name="search-sharp" size={15} color="white" />
        <TextInput
          value={search}
          onChangeText={(text)=>setSearch(text)}
          placeholder="buscar..."
          placeholderTextColor="white"
          style={styles.textInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000000',
    height: 175,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#141414',
    elevation: 50
  },

  headerImage: {
    flex: 0.9,
    width: 100,
    height: 10,
    resizeMode: 'center'
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#777',
    padding: 2,
    paddingLeft: 13,
    width: 250,
    borderRadius: 10,
    marginBottom: 5
  },

  textInput: {
    color: 'white',
    width: '100%',
    marginLeft: 12
  }
})
