import { View, Text, StyleSheet, FlatList } from 'react-native'
import Card from './Card'

export default function Container({ content, onAddProduct }) {
  return (
    <View style={styles.cardContainer}>
      <FlatList
        horizontal
        keyExtractor={item => item.key}
        data={content}
        renderItem={({item}) => <Card onAddProduct={onAddProduct} item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    //backgroundColor: '#992020',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
