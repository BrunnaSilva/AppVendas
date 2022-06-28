import { ImageSourcePropType } from 'react-native'

type productsImageProps = {
  [key: string]: ImageSourcePropType
}

const products: productsImageProps = {
  blackMachine: require('./blackMachine.png'),
  blueMachine: require('./blueMachine.png'),
  brownMachine: require('./brownMachine.png'),
  greenMachine: require('./greenMachine.png'),
  redMachine: require('./redMachine.png'),
  smallMachine: require('./smallMachine.png')
}

export default products
