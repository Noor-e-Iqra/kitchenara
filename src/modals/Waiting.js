import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../theme';
import {styles} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import images from '../assets/images';
import CustomButton from '../components/Button';

const Waiting = ({visibility, setVisibility,onPress}) => {
  return (
    <Modal
      visible={visibility}
      animationType="fade"
      statusBarTranslucent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#C4C4C46E',
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
            source={images.love_burger}
            style={{height: 200, width: 180}}
            resizeMode="contain"
          />
          <Text
            style={{
              ...FONTS.urbanist_bold,
              fontSize: 24,
              color: COLORS.blue,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Waiting for your order to be accepted
          </Text>
          <Text
            style={{
              ...FONTS.urbanist_regular,
              fontSize: 16,
            }}>
            Reorder in{' '}
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 18,
                color: COLORS.primary,
              }}>
              56
            </Text>{' '}
            s
          </Text>
          <CustomButton
            text={'Cancel'}
            large={true}
            btnStyle={{width: SIZES.width - 100}}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Waiting;
