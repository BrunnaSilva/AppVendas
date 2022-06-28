import { StyleSheet } from 'react-native'
import theme from '../styles/theme'

const { colors } = theme

export const Style = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    greeting: {
      fontSize: 32,
      color: colors.primary
    },
    userName: {
      fontSize: 32,
      color: colors.brown,
      lineHeight: 40
    }
  })
