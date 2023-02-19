import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme';
import {styles} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CustomButton = ({
  text,
  small,
  large,
  onPress,
  outlined,
  btnStyle,
  textStyle,
  icon,
  disabled,
}) => {
  if (large) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.large_container,
          {backgroundColor: disabled ? '#E5384E80' : COLORS.primary},
          btnStyle,
        ]}
        onPress={onPress}>
        {icon}
        <Text style={styles.large_title}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (small) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.small_container, btnStyle]}
        onPress={onPress}>
        <Text style={styles.small_title}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (outlined) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.outline_container, btnStyle]}
        onPress={onPress}>
        {icon}
        <Text style={[styles.outline_title,textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (icon) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.small_container,
          btnStyle,
          {
            flexDirection: 'row',
            alignItems: 'center',
            width: 170,
            marginTop: 2,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.large_title}>{text}</Text>
        <SimpleLineIcons
          name={icon}
          color={COLORS.secondary}
          style={{
            height: 14,
            width: 14,
            marginLeft: 8,
          }}
        />
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
