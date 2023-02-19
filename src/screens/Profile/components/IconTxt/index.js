import React from 'react';
import {Text, View} from 'react-native';
import HyperLink from '../HyperLink';
import {styles} from './styles';

const IconText = ({icon, text,onPress}) => {
  return (
    <View style={styles.container}>
      {icon}
      <HyperLink text={text} onPress={onPress} />
    </View>
  );
};

export default IconText;
