import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import {COLORS, FONTS} from '../../theme';
import {styles} from './styles';

const RowText = ({
  label,
  value,
  containerStyle,
  labelStyle,
  valueStyle,
  dropDown,
  onPressDropdown,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Pressable onPress={onPressDropdown}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.value, valueStyle]}>{value}</Text>
          {dropDown && (
            <Image
              source={icons.arrow_back}
              style={{
                height: 20,
                width: 20,
                transform: [{rotate: '270deg'}],
                marginLeft: 5,
              }}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default RowText;
