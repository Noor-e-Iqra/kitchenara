import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, version} from 'react';

const {width, height} = Dimensions.get('screen');
import ActionSheet from 'react-native-actions-sheet';
import OnVideoModal from './components/OnVideoModal';
import routes from '../../navigation/routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrices';
import {FONTS} from '../../theme';
import GalleryPickerModal from './components/GalleryPickerModal';

export const AddVideo = ({navigation}) => {
  const modalShowRef = useRef(null);
  const galleryModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <View style={styles.bgImageWrapper}>
        <Image
          source={require('../../assets/images/backgroundvideo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.topParrent}>
        <View>
          <Image source={require('../../assets/images/cross-white.png')} />
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/flip.png')} />
            <Text style={{...styles.textstyle}}>Flip</Text>
          </View>
          <View
            style={{marginVertical: verticalScale(15), alignItems: 'center'}}>
            <Image source={require('../../assets/images/timer.png')} />
            <Text style={{...styles.textstyle}}>Timer</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/flash.png')} />
            <Text style={{...styles.textstyle}}>Flash</Text>
          </View>
        </View>
      </View>
      <View style={styles.boToomParent}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            paddingHorizontal: horizontalScale(18),
            paddingVertical: verticalScale(11),
            borderRadius: moderateScale(5),
          }}>
          {new Array(5).fill(null).map((__, index) => {
            return (
              <Text
                key={index}
                style={{
                  ...FONTS.arial_rounded_bold,
                  fontSize: moderateScale(13),
                  color: 'white',
                }}>
                {index + 1 + 'x'}
              </Text>
            );
          })}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(50),
            alignItems: 'center',
          }}>
          <View>
            <View
              style={{
                backgroundColor: 'rgba(221, 131, 243, 1)',
                height: moderateScale(39),
                width: moderateScale(38),
                borderRadius: moderateScale(8),
              }}></View>
            <Text
              style={{
                ...FONTS.arial_rounded_bold,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 1)',
                marginTop: 3,
              }}>
              Filters
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              modalShowRef.current?.show();
            }}
            style={{
              height: moderateScale(83),
              width: moderateScale(83),
              borderWidth: moderateScale(6),
              borderColor: 'rgba(229, 56, 78, 0.6)',
              borderRadius: moderateScale(199),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: moderateScale(66),
                width: moderateScale(66),
                backgroundColor: 'rgba(229, 56, 78, 1)',
                borderRadius: moderateScale(100),
              }}></View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                galleryModalRef?.current?.show();
              }}
              style={{
                backgroundColor: 'white',
                height: moderateScale(39),
                width: moderateScale(38),
                borderRadius: moderateScale(8),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.arial_rounded_bold,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 1)',
                marginTop: 3,
              }}>
              Gallery
            </Text>
          </View>
        </View>
      </View>
      <ActionSheet
        ref={modalShowRef}
        containerStyle={{
          borderTopLeftRadius: 37,
          borderTopRightRadius: 37,
        }}
        indicatorStyle={{
          width: 37,
          height: 2.98,
          backgroundColor: 'rgba(224, 224, 224, 1)',
          borderRadius: 100,
          marginTop: 5,
        }}
        gestureEnabled={true}>
        <OnVideoModal
          callback={() => {
            navigation.navigate(routes.videoNext.index);
          }}
        />
      </ActionSheet>
      <ActionSheet
        ref={galleryModalRef}
        containerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        indicatorStyle={{
          width: 50,
          height: 2.98,
          backgroundColor: 'rgba(229, 56, 78, 1)',
          borderRadius: 100,
          marginTop: 5,
        }}
        gestureEnabled={true}>
        <GalleryPickerModal
          callback={() => {
            galleryModalRef.current.hide();
          }}
        />
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageWrapper: {
    height: height,
    width: width,
    position: 'absolute',
  },
  topParrent: {
    position: 'absolute',
    width: width,
    top: verticalScale(47),
    paddingHorizontal: horizontalScale(16),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  boToomParent: {
    position: 'absolute',
    width: width,
    bottom: verticalScale(140),
    paddingHorizontal: horizontalScale(30),
  },
  textstyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 9,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 4,
  },
});
