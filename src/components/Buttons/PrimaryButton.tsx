import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { Style } from './PrimaryButton.style';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string
  isRemovable?: boolean
}

function PrimaryButton({ text, isRemovable, ...rest }: PrimaryButtonProps) {
  const styles = Style();

  return (
    <TouchableOpacity style={isRemovable ? styles.containerRemove : styles.container} {...rest}>
      <Text style={isRemovable ? styles.textRemove : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
