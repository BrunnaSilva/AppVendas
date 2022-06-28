import { StyleSheet } from 'react-native'
import theme from '../styles/theme'

const { colors } = theme

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 30,
      marginVertical: 10,
      backgroundColor: colors.secundary
    },
    image: {
      width: 100,
      height: 100
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primary,
      paddingBottom: 20
    },
    rightContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  })
