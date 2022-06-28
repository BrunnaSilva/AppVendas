import { ImageSourcePropType } from 'react-native'

type iconProps = {
  [key: string]: ImageSourcePropType
}

const icons: iconProps = {
  backIcon: require('./backIcon.png'),
  cartIcon: require('./cartIcon.png'),
  fullCartIcon: require('./fullCartIcon.png')
}

export default icons;
