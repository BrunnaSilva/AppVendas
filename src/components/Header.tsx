import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import icons from '../assets/icons'
import { Style } from './Header.style'

interface HeaderProps {
  onPressIcon: () => void
  text: string
  isCartIcon: boolean
  isEmpty?: boolean
}

function Header({ text, isCartIcon, isEmpty, onPressIcon }: HeaderProps) {
  const styles = Style()

  return (
    <>
      {isCartIcon ? (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity onPress={onPressIcon}>
            <Image source={isEmpty ? icons.cartIcon : icons.fullCartIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressIcon}>
            <Image source={icons.backIcon} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </>
  )
}

export default Header
