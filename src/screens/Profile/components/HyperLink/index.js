import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const HyperLink = ({text, onPress}) => {
  return (
    <Text style={styles.text} onPress={onPress}>
      {text}
    </Text>
  );
};

export default HyperLink;
