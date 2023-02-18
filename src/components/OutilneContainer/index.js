import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const OutilneContainer = ({children,style}) => {
  return <View style={[styles.container,style]}>{children}</View>;
};

export default OutilneContainer;
