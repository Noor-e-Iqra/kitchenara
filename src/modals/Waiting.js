import React, { useEffect, useState } from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../theme';
import CustomButton from '../components/Button';
import gifs from '../assets/gifs';
import Timer from '../components/Timer';

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
            source={gifs.burger}
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
          <Timer text={['Reorder in ',' s','Reorder']}/>
          {/* <Text
            style={{
              ...FONTS.urbanist_regular,
              fontSize: 16,
            }}>
            {' '}
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 18,
                color: COLORS.primary,
              }}>
              56
            </Text>{' '}
            
          </Text> */}
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
