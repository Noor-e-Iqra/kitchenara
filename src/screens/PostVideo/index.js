import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {FONTS} from '../../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrices';

const {width, height} = Dimensions.get('screen');

export const POstVideo = ({navigation}) => {
  return (
    <View style={{...styles.container}}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{width: 31, alignItems: 'flex-end'}}>
          <Image
            style={{width: 19.64, height: 19.64}}
            source={require('../../assets/icons/iconfolder/arrow_back_ios.png')}
          />
        </TouchableOpacity>
        <Text style={{...styles.title}}>Post</Text>
        <View style={{width: 31}} />
      </View>
      <View style={{...styles.linestyle}} />
      <View style={{...styles.descriptioncontainer}}>
        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <Text style={{...styles.description}}>Describe your video</Text>
          <View
            style={{
              padding: 5,
              borderWidth: 0.5,
              borderColor: 'rgba(0,0,0,0.4)',
              alignSelf: 'flex-start',
              borderRadius: moderateScale(5),
            }}>
            <Text
              style={{
                ...FONTS.arial_rounded_bold,
                color: 'black',
                fontSize: moderateScale(11),
              }}>
              # Hashtag
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{width: 84, height: 118}}
            source={require('../../assets/images/image2332.png')}
          />
          <TouchableOpacity style={{...styles.selectcoverbtnstyle}}>
            <Text style={{...styles.selectcovertextstyle}}>Select cover</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: verticalScale(15),
        }}>
        <Image source={require('../../assets/images/location.png')} />
        <Text
          style={{
            ...FONTS.arial_rounded,
            color: 'black',
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(13),
          }}>
          Add location
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: verticalScale(15),
        }}>
        <View
          style={{
            padding: 5,
            borderWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.4)',
            alignSelf: 'flex-start',
            borderRadius: moderateScale(5),
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              color: 'black',
              fontSize: moderateScale(11),
            }}>
            Riyadh
          </Text>
        </View>
        <View
          style={{
            padding: 5,
            borderWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.4)',
            alignSelf: 'flex-start',
            borderRadius: moderateScale(5),
            marginHorizontal: horizontalScale(13),
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              color: 'black',
              fontSize: moderateScale(11),
            }}>
            Saudi Arabia
          </Text>
        </View>
        <View
          style={{
            padding: 5,
            borderWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.4)',
            alignSelf: 'flex-start',
            borderRadius: moderateScale(5),
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              color: 'black',
              fontSize: moderateScale(11),
            }}>
            Kingdom Tower
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: verticalScale(38),
        }}>
        <Image source={require('../../assets/images/comment.png')} />
        <Text
          style={{
            ...FONTS.arial_rounded,
            color: 'black',
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(13),
          }}>
          Allow comments
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: verticalScale(31),
        }}>
        <Image source={require('../../assets/images/share.png')} />
        <Text
          style={{
            ...FONTS.arial_rounded,
            color: 'black',
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(13),
          }}>
          Share to
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: verticalScale(26),
        }}>
        <TouchableOpacity style={styles.shareWrapper}>
          <Image source={require('../../assets/images/instagram.png')} />
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(11),
              color: 'rgba(129, 52, 175, 1)',
              marginLeft: horizontalScale(13),
            }}>
            Instagram
          </Text>
        </TouchableOpacity>
        <View style={{width: horizontalScale(20)}} />
        <TouchableOpacity
          style={{...styles.shareWrapper, borderColor: 'black'}}>
          <Image source={require('../../assets/images/tiktok.png')} />
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(11),
              color: 'rgba(0, 0, 0, 1)',
              marginLeft: horizontalScale(13),
            }}>
            Tiktok
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(18),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: verticalScale(20),
        }}>
        <TouchableOpacity
          style={{
            ...styles.shareWrapper,
            borderColor: 'rgba(64, 134, 240, 1)',
          }}>
          <Image source={require('../../assets/images/facebook.png')} />
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(11),
              color: 'rgba(64, 134, 240, 1)',
              marginLeft: horizontalScale(13),
            }}>
            Facebook
          </Text>
        </TouchableOpacity>
        <View style={{width: horizontalScale(20)}} />
        <TouchableOpacity
          style={{...styles.shareWrapper, borderColor: 'rgba(229, 56, 78, 1)'}}>
          <Image source={require('../../assets/images/youtube.png')} />
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(11),
              color: 'rgba(229, 56, 78, 1)',
              marginLeft: horizontalScale(13),
            }}>
            Youtube
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtonsWrapper}>
        <TouchableOpacity style={styles.bottomButtom}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(16),
              color: 'rgba(255, 77, 103, 1)',
            }}>
            Drafts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.bottomButtom,
            marginLeft: moderateScale(8),
            backgroundColor: 'rgba(229, 56, 78, 1)',
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: moderateScale(16),
              color: 'white',
            }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
  },
  title: {
    ...FONTS.arial_rounded_bold,
    fontSize: 24,
    color: 'rgba(229, 56, 78, 1)',
  },
  linestyle: {
    backgroundColor: 'rgba(227, 227, 227, 1)',
    marginTop: 10,
    height: 1,
  },
  descriptioncontainer: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-between',
    height: verticalScale(190),
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(18),
    borderBottomColor: 'rgba(227, 227, 227, 1)',
    borderBottomWidth: 1,
  },
  description: {
    ...FONTS.arial_rounded,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  selectcoverbtnstyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 84,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectcovertextstyle: {},
  shareWrapper: {
    flex: 1,
    height: verticalScale(45),
    borderRadius: moderateScale(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(129, 52, 175, 1)',
  },
  bottomButtonsWrapper: {
    position: 'absolute',
    bottom: verticalScale(80),
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: horizontalScale(17),
  },

  bottomButtom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    flex: 1,
    backgroundColor: 'rgba(255, 237, 240, 1)',
    height: verticalScale(46),
  },
});
