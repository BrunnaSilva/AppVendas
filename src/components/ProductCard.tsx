import React from 'react'
import { Text, Image, View } from 'react-native'
import products from '../assets/images/products'
import { PrimaryButton } from './Buttons'

import { getStyles } from './ProductCard.style'

interface ProductCardProps {
  data: {
    name: string
    type: string
  }
  textButton: string
  isRemovable: boolean
  onPress: () => void
}

function ProductCard({ data, textButton, isRemovable, onPress }: ProductCardProps) {
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <Image source={products[`${data.type}`]} style={styles.image} />
      <Text style={styles.text}>{data.name}</Text>
      <PrimaryButton text={textButton} onPress={onPress} isRemovable={isRemovable} />
    </View>
  )
}

export default ProductCard
