import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import {COLORS, FONTS} from '../../../../theme';
import {styles} from './styles';

const OutilneContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default OutilneContainer;
