import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const Heading = ({text,style}) => {
  return <Text style={[styles.title,style]}>{text}</Text>;
};

export default Heading;
