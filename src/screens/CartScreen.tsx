import React, { useEffect, useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CartCard, Header } from '../components'
import { ProductsProps } from '../entities'
import { getStyles } from './CartScreen.style'

function Cartcreen() {
  const styles = getStyles()
  const navigation = useNavigation()

  const [shoppingCart, setShoppingCart] = useState<ProductsProps[]>([])

  useEffect(() => {
    getData()
  }, [])

  function handlerCart() {
    navigation.navigate('Home')
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart')
      return setShoppingCart(JSON.parse(jsonValue))
    } catch (e) {
      console.error(e)
    }
  }

  const removeShoppingCart = async (id: number) => {
    let newValues = []
    newValues = shoppingCart.filter((product) => product.id !== id)
    setShoppingCart(newValues)
    try {
      await AsyncStorage.setItem('@cart', JSON.stringify(newValues))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onPressIcon={handlerCart} text={'Carrinho de compras'} isCartIcon={false} />
      </View>
      {!shoppingCart && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{'Você ainda não adicionou \nnada em seu carrinho ;)'}</Text>
        </View>
      )}
      {shoppingCart && (
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={shoppingCart}
            renderItem={({ item }) => (
              <CartCard
                key={item.id}
                data={item}
                onPress={() => {
                  removeShoppingCart(item.id)
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  )
}

export default Cartcreen
