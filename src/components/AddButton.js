import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/addButton';

const AddButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
