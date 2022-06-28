import { StyleSheet } from 'react-native'
import theme from '../styles/theme'

const { colors } = theme

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    header: {
      marginHorizontal: 10,
      marginVertical: 10,
    },
    listContainer:{
      flex: 1,
      paddingHorizontal: 12,
      justifyContent: 'center'
    }
  })
