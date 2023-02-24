import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import routes from '../../navigation/routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrices';
import {FONTS} from '../../theme';

const {width, height} = Dimensions.get('screen');

export const VideoNext = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <View style={styles.bgImageWrapper}>
        <Image
          source={require('../../assets/images/videonexticon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.topParrent}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../assets/images/cross-white.png')} />
        </TouchableOpacity>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/scissors.png')} />
            <Text style={{...styles.textstyle}}>Trim</Text>
          </View>
          <View
            style={{marginVertical: verticalScale(15), alignItems: 'center'}}>
            <Image source={require('../../assets/images/sparkle.png')} />
            <Text style={{...styles.textstyle}}>Effects</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/vector.png')} />
            <Text style={{...styles.textstyle}}>Text</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.postVideo.index);
        }}
        style={{
          ...styles.nextbtnstyle,
        }}>
        <Text style={{...styles.nextbtntextstyle}}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
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
  nextbtnstyle: {
    position: 'absolute',
    bottom: 30,
    width: width - 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(229, 56, 78, 1)',
    height: 58,
    borderRadius: 16,
  },
  nextbtntextstyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
  textstyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 9,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 4,
  },
});
