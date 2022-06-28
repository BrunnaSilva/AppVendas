import { StyleSheet } from 'react-native';
import theme from '../styles/theme';

const { colors } = theme;

export const Style = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10
    },
    text: {
      fontSize: 18,
      flexWrap: 'wrap'
    },
    icon: {
      width: 50,
      height: 50,
    },
  });
