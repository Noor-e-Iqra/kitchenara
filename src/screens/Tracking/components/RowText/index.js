import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import {COLORS, FONTS} from '../../../../theme';
import {styles} from './styles';

const RowText = ({label, value,containerStyle,labelStyle,valueStyle}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <Text style={[styles.label,labelStyle]}>{label}</Text>
      <Text style={[styles.value,valueStyle]}>{value}</Text>
    </View>
  );
};

export default RowText;
