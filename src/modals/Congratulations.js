import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../theme';
import {styles} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import images from '../assets/images';
import CustomButton from '../components/Button';
import gifs from '../assets/gifs';

const Congratulations = ({visibility, onPress}) => {
  return (
    <Modal
      visible={visibility}
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(9, 16, 29, 0.7)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 25,
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.secondary,
          }}>
          <Image
            source={gifs.cake}
            style={{height: 212, width: 285}}
            resizeMode="contain"
          />
          <Text
            style={{
              ...FONTS.urbanist_bold,
              fontSize: 24,
              color: COLORS.blue,
              textAlign: 'center',
              marginTop: 32,
            }}>
            Congratulations!
          </Text>
          <Text
            style={{
              ...FONTS.urbanist_regular,
              fontSize: 18,
              marginTop: 16,
            }}>
            Your account is ready to use
          </Text>
          <CustomButton
            text={'CONTINUE'}
            large={true}
            btnStyle={{width: SIZES.width - 100,marginTop:32}}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Congratulations;
