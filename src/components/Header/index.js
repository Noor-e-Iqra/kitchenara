import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme';
import {styles} from './styles';
import icons from '../../assets/icons/index';

const CustomHeader = ({title, showArrow}) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={COLORS.secondary} barStyle="dark-content" />
      <View style={styles.container}>
        {showArrow && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.arrow_back}
              style={{height: 24, width: 24}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

export default CustomHeader;
