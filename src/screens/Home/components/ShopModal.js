import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrices';

const ShopModal = () => {
  return (
    <View
      style={{
        paddingBottom: verticalScale(50),
      }}>
      <View style={{...styles.subcontainer}}>
        <Text style={{...styles.titlestyle}}>In this video:</Text>
        <View style={{...styles.headercontainer}}>
          <View style={{...styles.imagewrapper}}>
            <Image
              style={{
                width: moderateScale(73.32),
                height: moderateScale(73.32),
              }}
              source={require('../../../assets/icons/iconfolder/rectangle1.png')}
            />
          </View>
          <View style={{...styles.headersubContainer}}>
            <Text style={{...styles.sourcesancepro18}}>Papa Johns</Text>
            <Text style={{...styles.sourcesancepro14}}>Pizza</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...styles.sourcesanspro14}}>9 SAR delivery</Text>
              <Text style={{...styles.sourcesanspro14}}>SAR 35 minimum</Text>
            </View>
          </View>
        </View>
        <CardItem
          image={require('../../../assets/icons/iconfolder/saladicon.png')}
        />
        <CardItem
          image={require('../../../assets/icons/iconfolder/pizzaicon.png')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            borderRadius: moderateScale(17),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: verticalScale(19),
            marginTop: verticalScale(24),
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(17),
              color: 'white',
              letterSpacing: moderateScale(0.22),
            }}>
            View entire menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CardItem = ({image}) => {
  return (
    <View style={{...styles.cardcontainer}}>
      <View style={{...styles.cardiconwrapper}}>
        <Image
          style={{width: moderateScale(74), height: moderateScale(66)}}
          source={image}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: horizontalScale(17),
          marginRight: horizontalScale(8),
        }}>
        <Text style={{...styles.arialroundedbold19, color: COLORS.black}}>
          Greek Salad
        </Text>
        <Text style={{...styles.arialroundedbold19}}>SR 14</Text>
      </View>
      <TouchableOpacity style={{...styles.addtocartbtnstyle}}>
        <Text style={{...styles.addtocartbtntextstyle}}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopModal;

const styles = StyleSheet.create({
  subcontainer: {
    marginTop: 30,
    marginLeft: 14,
    marginRight: 14,
  },
  titlestyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: moderateScale(15),
    color: '#A6A6A6',
  },
  headercontainer: {
    marginLeft: horizontalScale(6),
    marginTop: verticalScale(14),
    flexDirection: 'row',
  },

  imagewrapper: {
    width: moderateScale(73.32),
    height: moderateScale(73.32),
  },
  headersubContainer: {
    marginLeft: horizontalScale(19.23),
  },
  sourcesancepro18: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 18,
    color: '#000000',
    // lineHeight: 27,
  },
  sourcesancepro14: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 14,
    color: '#979797',
    // lineHeight: 22,
  },
  sourcesanspro14: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 14,
    color: '#4086F0',
    marginRight: 7,
    // lineHeight: 22,
  },
  cardcontainer: {
    marginTop: verticalScale(21),
    paddingTop: verticalScale(16),
    paddingLeft: horizontalScale(12),
    paddingBottom: verticalScale(13),
    paddingRight: horizontalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(rgba(132, 132, 132, 0.5)',
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(15),
  },
  cardiconwrapper: {
    width: moderateScale(74),
    height: moderateScale(66),
  },
  addtocartbtnstyle: {
    width: verticalScale(90),
    height: horizontalScale(26),
    borderRadius: moderateScale(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5384E',
  },
  addtocartbtntextstyle: {
    ...FONTS.arial_rounded_bold,
    color: '#FFFFFF',
    fontSize: moderateScale(12),
  },
  arialroundedbold19: {
    ...FONTS.arial_rounded_bold,
    fontSize: moderateScale(19),
    color: '#E5384E',
  },
});
