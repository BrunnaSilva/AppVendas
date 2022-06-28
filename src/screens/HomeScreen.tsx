/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'

import FixtureAPI from '../services/FixtureAPI'
import { ProductCard, Header, Welcome } from '../components'
import { ProductsProps } from '../entities'
import { getStyles } from './HomeScreen.style'

function HomeScreen() {
  const styles = getStyles()
  const { products } = FixtureAPI
  const navigation = useNavigation()

  const [shoppingCart, setShoppingCart] = useState<ProductsProps[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart')
      return setShoppingCart(JSON.parse(jsonValue))
    } catch (e) {
      console.error(e)
    }
  }

  function handlerCart() {
    navigation.navigate('Cart')
  }

  const addShoppingCart = async (value: ProductsProps) => {
    setShoppingCart((oldValue) => [...oldValue, value])
    try {
      await AsyncStorage.setItem('@cart', JSON.stringify(shoppingCart))
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

  const getDataFromDB = (item: ProductsProps) => {
    for (let index = 0; index < shoppingCart.length; index++) {
      if (shoppingCart[index].id == item.id) {
        return true
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Welcome name={'Lojista'} />
        <Header
          onPressIcon={handlerCart}
          text={'Escolha a melhor maquininha \npara o seu negócio :)'}
          isCartIcon={true}
          isEmpty={!shoppingCart}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={products}
          renderItem={({ item }) => (
            <>
              {getDataFromDB(item) ? (
                <ProductCard
                  key={item.id}
                  data={item}
                  textButton={'Remover'}
                  onPress={() => {
                    removeShoppingCart(item.id)
                  }}
                  isRemovable={true}
                />
              ) : (
                <ProductCard
                  key={item.id}
                  data={item}
                  textButton={'Comprar'}
                  onPress={() => {
                    addShoppingCart(item)
                  }}
                  isRemovable={false}
                />
              )}
            </>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  )
}

export default HomeScreen
