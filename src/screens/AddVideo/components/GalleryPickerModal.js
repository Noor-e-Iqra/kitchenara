import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {FONTS} from '../../../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrices';

const {width, height} = Dimensions.get('screen');

const GalleryPickerModal = ({callback}) => {
  return (
    <View style={{...styles.container}}>
      <View style={{...styles.headercontainer}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            callback();
          }}
          style={{...styles.headercrossbtnstyle}}>
          <Image
            style={{width: 14, height: 14}}
            source={require('../../../assets/images/cross.png')}
          />
        </TouchableOpacity>
        <View style={{...styles.headermiddlebtnstyle}}>
          <Text style={{...styles.textstyle}}>Recents</Text>
          <Image source={require('../../../assets/images/down-arrow.png')} />
        </View>
        <View style={{width: 43}} />
      </View>
      <FlatList
        data={new Array(18).fill(null)}
        numColumns={3}
        keyExtractor={(item, index) => index + ''}
        columnWrapperStyle={{
          paddingHorizontal: horizontalScale(8),
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          return (
            <Image
              source={require('../../../assets/images/man.png')}
              resizeMode="cover"
              style={{
                height: moderateScale(120),
                width: moderateScale(112),
                marginTop: moderateScale(9),
                borderRadius: moderateScale(12),
              }}
            />
          );
        }}
      />
      <View style={{...styles.bottomcard}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/images/man.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 6,
              marginHorizontal: 2,
            }}
            resizeMode="cover"
          />

          <Image
            source={require('../../../assets/images/man.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 6,
              marginHorizontal: 2,
            }}
            resizeMode="cover"
          />

          <Image
            source={require('../../../assets/images/man.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 6,
              marginHorizontal: 2,
            }}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: 94,
            height: 50,
            backgroundColor: 'rgba(229, 56, 78, 1)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
          }}>
          <Text
            style={{
              ...FONTS.arial_rounded_bold,
              fontSize: 16,
              color: 'rgba(255, 255, 255, 1)',
            }}>
            OK (3)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GalleryPickerModal;

const styles = StyleSheet.create({
  container: {
     width: width,
    height: height,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginTop: 18,
    position: 'relative',
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(25),
  },
  headercrossbtnstyle: {marginLeft: 29},
  headermiddlebtnstyle: {flexDirection: 'row', alignItems: 'center'},
  textstyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
    marginRight: 6,
  },
  bottomcard: {
    position: 'absolute',
    width: width,
    height: 190,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 100,
    elevation: 2,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 110,
  },
});
