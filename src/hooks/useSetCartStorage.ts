import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ProductsProps } from '../entities'

const useSetCartStorage = async (value: ProductsProps) => {
  const [shoppingCart, setShoppingCart] = useState<ProductsProps[]>([])

  useEffect(() => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart')
      setShoppingCart(jsonValue)
    } catch (error) {
      console.error(error)
    }
  }, [])

  setShoppingCart((oldValue) => [...oldValue, value])
  try {
    await AsyncStorage.setItem('@cart', JSON.stringify(shoppingCart));
    console.log('Adicionado')
  } catch (e) {
    // saving error
  }
}

export default useSetCartStorage
