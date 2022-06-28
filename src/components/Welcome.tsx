import React from 'react'
import { Text, View } from 'react-native'
import { Style } from './Welcome.style'

interface HeaderProps {
  name: string
}

function Welcome({ name }: HeaderProps) {
  const styles = Style()

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Bem vindo, </Text>
        <Text style={styles.userName}>{name}</Text>
      </View>
    </View>
  )
}

export default Welcome
