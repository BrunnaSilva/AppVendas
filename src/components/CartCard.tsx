import React from 'react'
import { Text, Image, View } from 'react-native'
import products from '../assets/images/products'
import { PrimaryButton } from './Buttons'

import { getStyles } from './CartCard.style'

interface CartCardProps {
  data: {
    name: string
    type: string
  }
  onPress: () => void
}

function CartCard({ data, onPress }: CartCardProps) {
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <Image source={products[`${data.type}`]} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <PrimaryButton text={'Remover'} onPress={onPress} isRemovable />
      </View>
    </View>
  )
}

export default CartCard
