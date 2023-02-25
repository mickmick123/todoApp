import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from '../navigators/mainNavigation';

const Entry = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Entry;
