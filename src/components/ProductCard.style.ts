import { StyleSheet } from 'react-native'
import theme from '../styles/theme'

const { colors } = theme

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secundary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      marginBottom: 8,
      marginHorizontal: 8
    },
    image: {
      width: 130,
      height: 130
    },
    text:{
      fontSize: 18,
      fontWeight: 'bold',
      paddingVertical: 8,
      paddingHorizontal: 8,
      color: colors.primary
    }
  })
