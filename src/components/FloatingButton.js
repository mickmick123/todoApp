import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/floatingButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme/color';
const FloatingButton = ({icon, onPress, style}) => {
  return (
    <TouchableOpacity
      testID="btnTest"
      style={[styles.btnStyle, style]}
      onPress={onPress}>
      <AntDesign name={icon} color={colors.tint} size={32} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
