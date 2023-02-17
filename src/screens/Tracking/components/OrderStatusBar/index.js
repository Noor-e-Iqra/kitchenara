import React, {Fragment} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import {COLORS, FONTS} from '../../../../theme';
import {styles} from './styles';

const OrderStatusBar = ({track}) => {
  const status = ['Preparing', 'Enroute', 'Received'];
  const color = [COLORS.yellow, COLORS.red, COLORS.light_blue];
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10
      }}>
      {status.map((item, i) => (
        <Fragment key={i}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: i + 1 <= track ? color[i] : COLORS.light_gray,
                borderRadius: 20,
                marginHorizontal: 2,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                width: 85,
                top: 25,
                textAlign: 'center',
                ...FONTS.arial_rounded_bold,
                fontSize: 12,
                color: COLORS.light_gray_txt,
              }}>
              {item}
            </Text>
          </View>
          {i + 1 != status.length &&
            [...Array(10)].map((_, index) => (
              <View
                key={index}
                style={{
                  height: 4,
                  width: 4,
                  backgroundColor:
                    i + 1 < track ? color[2] : COLORS.light_gray,
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              />
            ))}
        </Fragment>
      ))}
    </View>
  );
};

export default OrderStatusBar;
