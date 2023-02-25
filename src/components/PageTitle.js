import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/title';
const PageTitle = ({title}) => {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default PageTitle;
