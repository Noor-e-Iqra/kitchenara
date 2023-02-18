import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({onPress, btnStyle, icon, disabled}) => {
  if (disabled) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={disabled}
        style={[styles.disabled_container, btnStyle]}
        onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={15} color={COLORS.primary} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.enabled_container, btnStyle]}
        onPress={onPress}>
        <MaterialCommunityIcons
          name={icon}
          size={15}
          color={COLORS.secondary}
        />
      </TouchableOpacity>
    );
  }
};

export default IconButton;
