import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../theme';

const OutlinedText = ({icon, text, containerStyle, labelStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && (
        <MaterialCommunityIcons
          name="ticket-percent-outline"
          size={15}
          style={{marginRight: 5}}
          color={COLORS.light_blue}
        />
      )}
      <Text style={[styles.label, labelStyle]}>{text}</Text>
    </View>
  );
};

export default OutlinedText;
