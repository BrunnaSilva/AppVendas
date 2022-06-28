import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const { colors } = theme

export const Style = () =>
  StyleSheet.create({
    container: {
      borderColor: colors.primary,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
      height: 30,
      width: 90
    },
    containerRemove: {
      borderColor: colors.red,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
      height: 30,
      width: 90
    },
    text: {
      fontSize: 14,
      color: colors.primary
    },
    textRemove: {
      fontSize: 14,
      color: colors.red
    }
  });
