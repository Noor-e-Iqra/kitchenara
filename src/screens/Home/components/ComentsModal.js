import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrices';
import {COLORS, FONTS} from '../../../theme';

const ComentsModal = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image
            source={require('../../../assets/icons/iconfolder/user2icon.png')}
            style={{
              height: moderateScale(48),
              width: moderateScale(48),
            }}
          />

          <View
            style={{
              paddingLeft: horizontalScale(16),

              flex: 1,
            }}>
            <Text
              style={{
                ...FONTS.urbanist_bold,
                fontSize: 16,
                color: COLORS.black,
              }}>
              jenny_wirosa
            </Text>
            <Text
              style={{
                ...FONTS.urbanist_bold,
                fontSize: moderateScale(12),
                color: '#616161',
                marginTop: verticalScale(5),
              }}>
              Videographer
            </Text>
          </View>
          <View
            style={{
              height: moderateScale(18),
              width: moderateScale(18),
              borderRadius: 10,
              borderColor: '#616161',
              borderWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            height: 0.4,
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginTop: 18,
            marginBottom: 12,
          }}
        />
        <Text
          style={{
            ...FONTS.urbanist_regular,
            fontSize: moderateScale(14),
            lineHeight: moderateScale(19),
            color: '#616161',
            letterSpacing: moderateScale(0.2),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text
          style={{
            ...FONTS.urbanist_regular,
            fontSize: moderateScale(14),
            lineHeight: moderateScale(19),
            marginTop: moderateScale(20),
            color: '#3F51B2',
          }}>
          #girl #girls #babygirl #girlpower #girlswholift #polishgirl #girlboss
          #girly #girlfriend #fitgirl #birthdaygirl #instagirl #girlsnight
          #animegirl #mygirl
        </Text>
        <Text
          style={{
            ...FONTS.urbanist_semiBold,
            fontSize: moderateScale(12),
            marginTop: verticalScale(12),
            color: '#616161',
          }}>
          6 hours ago
        </Text>
        <View style={{...styles.row1, marginTop: 14, marginBottom: 26}}>
          <View style={styles.row1}>
            <Image
              source={require('../../../assets/icons/iconfolder/reddilicon.png')}
            />
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 14,
                color: '#424242',
                marginLeft: 10,
              }}>
              12,267
            </Text>
          </View>
          <View style={{...styles.row1, marginLeft: 35}}>
            <Image
              source={require('../../../assets/icons/iconfolder/commenticon.png')}
            />
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 14,
                color: '#424242',
                marginLeft: 10,
              }}>
              12,267
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 0.4,
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginBottom: 24,
          }}
        />
        <View style={styles.row1}>
          <Image
            source={require('../../../assets/icons/iconfolder/usericon.png')}
            style={{
              height: moderateScale(48),
              width: moderateScale(48),
            }}
          />

          <View
            style={{
              paddingLeft: horizontalScale(16),

              flex: 1,
            }}>
            <Text
              style={{
                ...FONTS.urbanist_bold,
                fontSize: 16,
                color: COLORS.black,
              }}>
              SARA
            </Text>
            <Text
              style={{
                ...FONTS.urbanist_bold,
                fontSize: moderateScale(12),
                color: '#616161',
                marginTop: verticalScale(5),
              }}>
              Designer
            </Text>
          </View>
          <View
            style={{
              height: moderateScale(18),
              width: moderateScale(18),
              borderRadius: 10,
              borderColor: '#616161',
              borderWidth: 1,
            }}
          />
        </View>
        <Text
          style={{
            ...FONTS.urbanist_regular,
            fontSize: 14,
            color: '#212121',
            lineHeight: 19,
            marginTop: 12,
          }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
        <View style={{...styles.row1, marginTop: 14, marginBottom: 26}}>
          <View style={styles.row1}>
            <Image
              source={require('../../../assets/icons/iconfolder/dilicon.png')}
            />
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 14,
                color: '#424242',
                marginLeft: 10,
              }}>
              492
            </Text>
          </View>
          <View style={{...styles.row1, marginLeft: 24}}>
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 12,
                color: '#212121',
                //   marginLeft: 10,
              }}>
              Reply
            </Text>
          </View>
          <View style={{...styles.row1, marginLeft: 24}}>
            <Text
              style={{
                ...FONTS.urbanist_semiBold,
                fontSize: 12,
                color: '#616161',
                //   marginLeft: 10,
              }}>
              5 hours ago
            </Text>
          </View>
        </View>
      </View>
      <View style={{...styles.commentcontainer}}>
        <Image
          style={{width: 35, height: 35}}
          source={require('../../../assets/icons/iconfolder/usericon.png')}
        />
        <TextInput
          style={{...styles.inputcommentstyle}}
          placeholder="Comment.."
          placeholderTextColor={'rgba(132, 132, 132, 0.5)'}
        />
      </View>
    </>
  );
};

export default ComentsModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    marginTop: verticalScale(5),
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentcontainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  inputcommentstyle: {
    ...FONTS.urbanist_semiBold,
    fontSize: 14,
    color: 'rgba(132, 132, 132, 0.5)',
    flex: 1,
    height: 37,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginLeft: 20,
  },
});
