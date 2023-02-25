import React from 'react';
import {Image, View} from 'react-native';
import styles from '../styles/base';

const headerImage = require('../../assets/images/header.png');

const Container = ({children}) => {
  return (
    <View style={styles.baseFlex}>
      <Image
        style={styles.headerImage}
        source={headerImage}
        resizeMode={'cover'}
      />
      {children}
    </View>
  );
};

export default Container;
