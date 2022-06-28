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
      paddingRight: 10,
      marginVertical: 5,
    },
    listContainer: {

    },
    emptyContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    emptyText:{
      fontSize: 18,
      color: colors.primary,
      textAlign: 'center'
    }
  })
